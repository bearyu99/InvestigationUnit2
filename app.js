const menu = document.querySelectorAll("#menu li");
const home = document.getElementById("home-section");
const reserve = document.getElementById("reserve-section");
const info = document.getElementById("info-section");
const service = document.getElementById("service-section");
const img = "https://hankookhos.site/images/lee_portrait.png";

const ham = document.querySelector(".menu");
ham.addEventListener("click", (e) => {
  ham.classList.toggle("open");
  document.querySelector(".menu-group").classList.toggle("wide");
  document.querySelector("#menu").classList.toggle("visible");
  setTimeout(
    () => document.querySelector("#menu").classList.toggle("fade"),
    100
  );
});

function selectRemove() {
  menu.forEach((e) => {
    e.classList.remove("select");
  });
}

function sectionVisible(id) {
  const sectionList = document.querySelectorAll("section");
  sectionList.forEach((e) => {
    e.style.display = "none";
    if (e.id == id + "-section") {
      e.style.display = "";
    }
  });
}

menu.forEach((list) => {
  list.addEventListener("click", (e) => {
    const id = e.target.id;
    switch (id) {
      case "home":
        console.log("병원소개를 클릭함");
        // Select 클래스 제거 및 추가
        selectRemove();
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        // home.style.display = "";
        // reserve.style.display = "none";
        // info.style.display = "none";
        // service.style.display = "none";
        document.body.style.backgroundImage = "url(" + img + ")";
        break;
      case "reserve":
        console.log("병원예약을 클릭함");
        // Select 클래스 제거 및 추가
        selectRemove();
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        // home.style.display = "none";
        // reserve.style.display = "";
        // info.style.display = "none";
        // service.style.display = "none";
        document.body.style.backgroundImage = "none";
        break;
      case "info":
        console.log("진료안내를 클릭함");
        // Select 클래스 제거 및 추가
        selectRemove();
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        // home.style.display = "none";
        // reserve.style.display = "none";
        // info.style.display = "";
        // service.style.display = "none";
        document.body.style.backgroundImage = "none";
        break;
      case "service":
        console.log("고객센터를 클릭함");
        // Select 클래스 제거 및 추가
        selectRemove();
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        // home.style.display = "none";
        // reserve.style.display = "none";
        // info.style.display = "none";
        // service.style.display = "";
        document.body.style.backgroundImage = "none";
        break;
      default:
        break;
    }
  });
});
