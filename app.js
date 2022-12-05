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
  console.log("select class was removed");
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
    selectRemove();
    switch (id) {
      case "home":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        document.body.style.backgroundImage = "url(" + img + ")";
        break;
      case "reserve":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        document.body.style.backgroundImage = "none";
        break;
      case "info":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        document.body.style.backgroundImage = "none";
        break;
      case "service":
        console.log("You clicked " + id);
        // Select 클래스 추가
        e.target.classList.add("select");
        // 섹션 활성화
        sectionVisible(id);
        document.body.style.backgroundImage = "none";
        break;
      default:
        break;
    }
  });
});
