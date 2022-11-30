const menu = document.querySelectorAll("#menu li");
const home = document.getElementById("home-section");
const reserve = document.getElementById("reserve-section");
const info = document.getElementById("info-section");
const service = document.getElementById("service-section");
const img = "https://hankookhos.site/images/lee_portrait.png";

menu.forEach((list) => {
  list.addEventListener("click", (e) => {
    const id = e.target.id;
    switch (id) {
      case "home":
        console.log("병원소개를 클릭함");
        home.style.display = "";
        reserve.style.display = "none";
        info.style.display = "none";
        service.style.display = "none";
        document.body.style.backgroundImage = "url(" + img + ")";
        break;
      case "reserve":
        console.log("병원예약을 클릭함");
        home.style.display = "none";
        reserve.style.display = "";
        info.style.display = "none";
        service.style.display = "none";
        document.body.style.backgroundImage = "none";
        break;
      case "info":
        console.log("진료안내를 클릭함");
        home.style.display = "none";
        reserve.style.display = "none";
        info.style.display = "";
        service.style.display = "none";
        document.body.style.backgroundImage = "none";
        break;
      case "service":
        console.log("고객센터를 클릭함");
        home.style.display = "none";
        reserve.style.display = "none";
        info.style.display = "none";
        service.style.display = "";
        document.body.style.backgroundImage = "none";
        break;
      default:
        break;
    }
  });
});
