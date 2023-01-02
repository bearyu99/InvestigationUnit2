const menu = document.querySelectorAll("#menu li");
const floorList = document.querySelectorAll("#floor-list li");
const mainInfo = document.querySelector(".floor-title");
const mainInfoSection = document.querySelector("#section-main-building");
// const img = "https://hankookhos.site/images/lee_portrait.png";
const ham = document.querySelector(".menu");
const bg = document.querySelector(".bg-portrait > img");
const nav = document.querySelector(".nav-btn-group");
const map = document.getElementById("map");
let menuWide = false;

// Map Panzoom
const panzoom = Panzoom(map, {
  maxScale: 7,
  minScale: 1.2,
  startScale: 3,
  animate: true,
  cursor: "grab",
  contain: "outside",
});
map.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);

// Modal Popup
function popOpen() {
  var modalPop = document.querySelector(".modal-wrap");
  var modalBg = document.querySelector(".modal-bg");

  modalPop.style.display = "initial";
  modalBg.style.display = "initial";
}

function popClose() {
  var modalPop = document.querySelector(".modal-wrap");
  var modalBg = document.querySelector(".modal-bg");

  modalPop.style.display = "none";
  modalBg.style.display = "none";
}

// Nav Bar
function toggleMenu() {
  ham.classList.toggle("open");
  document.querySelector(".menu-group").classList.toggle("wide");
  document.querySelector("#menu").classList.toggle("visible");
  setTimeout(
    () => document.querySelector("#menu").classList.toggle("fade"),
    100
  );
  if (menuWide == 0) {
    menuWide = true;
  } else {
    menuWide = false;
  }
}

function selectRemove() {
  menu.forEach((e) => {
    e.classList.remove("select");
  });
  console.log("select class was removed");
}

function sectionVisible(id) {
  const sectionList = document.querySelectorAll(".main-section");
  sectionList.forEach((e) => {
    e.style.display = "none";
    if (e.id == id + "-section") {
      e.style.display = "";
      if (e.id == "home-section") {
        // bg.style.visibility = "";
        // bg.src = "/images/portrait.png";
      } else {
        // bg.style.visibility = "hidden";
      }
    }
  });
}

document.body.addEventListener("click", (e) => {
  const pNode = e.target.parentNode;
  const div = document.getElementById("mobile-menu");
  // 메뉴가 열려있는 상태에서
  if (div.classList.contains("wide")) {
    let selectNav = e.target.closest("#mobile-nav");
    // #mobile-nav가 아닌 다른 곳을 클릭하면
    if (!selectNav) {
      // 메뉴를 접는다
      ham.classList.remove("open");
      document.querySelector(".menu-group").classList.remove("wide");
      document.querySelector("#menu").classList.remove("visible");
      document.querySelector("#menu").classList.add("fade");
      menuWide = false;
    }
  }
});

nav.addEventListener("click", (e) => {
  toggleMenu();
});

menu.forEach((list) => {
  list.addEventListener("click", (e) => {
    const id = e.target.id;
    toggleMenu();
    selectRemove();
    switch (id) {
      case "home":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        break;
      case "reserve":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
      case "info":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        break;
      case "convenience":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        break;
      case "service":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        break;
      default:
        break;
    }
  });
});

// Floor Info
function checkedtRemove() {
  floorList.forEach((e) => {
    e.classList.remove("floor-checked");
  });
  console.log("checked class was removed");
}

function floorSectionVisible(id) {
  const floorSectionList = document.querySelectorAll(".floor-section");
  floorSectionList.forEach((e) => {
    e.style.display = "none";
    if (e.id == "section-" + id) {
      e.style.display = "";
    }
  });
}

floorList.forEach((list) => {
  list.addEventListener("click", (e) => {
    const id = e.target.id;
    checkedtRemove(); // 리스트 활성화 클래스 제거
    mainInfoSection.style.display = "none"; // 본관 섹션 비활성화
    switch (id) {
      case "floor-b1":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("floor-checked");
        // 섹션 활성화
        floorSectionVisible(id);
        break;
      case "floor-1":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("floor-checked");
        // 섹션 활성화
        floorSectionVisible(id);
      case "floor-2":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("floor-checked");
        // 섹션 활성화
        floorSectionVisible(id);
        break;
      case "floor-3":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("floor-checked");
        // 섹션 활성화
        floorSectionVisible(id);
        break;
      case "floor-4":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("floor-checked");
        // 섹션 활성화
        floorSectionVisible(id);
        break;
      default:
        break;
    }
  });
});

mainInfo.addEventListener("click", (e) => {
  const floorSectionList = document.querySelectorAll(".floor-section");
  // 층 별 리스트, 섹션 비활성화
  floorList.forEach((e) => {
    e.classList.remove("floor-checked");
  });
  floorSectionList.forEach((e) => {
    e.style.display = "none";
  });
  mainInfoSection.style.display = "";
});

//  Floor Slide
var menu_b1 = ["지하 1층 안내도", "지하 1층 복도", "분향실"];
var menu_1 = ["1층 안내도", "안내 데스크", "약국", "식당"];
var menu_2 = ["2층 안내도", "진료실", "일반 병동"];
var menu_3 = ["3층 안내도", "널스 스테이션", "진료실", "일반 병동"];
var menu_4 = [
  "4층 안내도",
  "널스 스테이션",
  "운동 치료실",
  "카페",
  "프리미엄 룸",
];
var floor_b1_Swiper = new Swiper(".floorb1-swiper", {
  pagination: {
    // 페이징 설정
    el: ".swiper-pagination",
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu_b1[index] + "</span>";
    },
  },
  navigation: {
    // 네비게이션 설정
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});

var floor_1_Swiper = new Swiper(".floor1-swiper", {
  pagination: {
    // 페이징 설정
    el: ".swiper-pagination",
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu_1[index] + "</span>";
    },
  },
  navigation: {
    // 네비게이션 설정
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});

var floor_2_Swiper = new Swiper(".floor2-swiper", {
  pagination: {
    // 페이징 설정
    el: ".swiper-pagination",
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu_2[index] + "</span>";
    },
  },
  navigation: {
    // 네비게이션 설정
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});

var floor_3_Swiper = new Swiper(".floor3-swiper", {
  pagination: {
    // 페이징 설정
    el: ".swiper-pagination",
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu_3[index] + "</span>";
    },
  },
  navigation: {
    // 네비게이션 설정
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});

var floor_4_Swiper = new Swiper(".floor4-swiper", {
  pagination: {
    // 페이징 설정
    el: ".swiper-pagination",
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu_4[index] + "</span>";
    },
  },
  navigation: {
    // 네비게이션 설정
    nextEl: ".swiper-button-next", // 다음 버튼 클래스명
    prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
  },
});

// FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
