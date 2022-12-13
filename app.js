const menu = document.querySelectorAll("#menu li");
const img = "https://hankookhos.site/images/lee_portrait.png";
const ham = document.querySelector(".menu");
const bg = document.querySelector(".bg-portrait > img");
const nav = document.querySelector(".nav-btn-group");
let menuWide = false;

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
  const sectionList = document.querySelectorAll("section");
  sectionList.forEach((e) => {
    e.style.display = "none";
    if (e.id == id + "-section") {
      e.style.display = "";
      if (e.id == "home-section") {
        bg.style.visibility = "";
        bg.src = "/images/portrait.png";
      } else {
        bg.style.visibility = "hidden";
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
