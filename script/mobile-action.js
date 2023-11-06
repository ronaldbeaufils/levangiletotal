if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");


  var gen = document.getElementById('s-general');
  gen.href = "style/general-mobile.css";

  //this function sets the cookie
  function setCookie(cname, cvalue) {
    var cookie = cname + "=" + cvalue;
    document.cookie = cookie;
  }





  //this function gets all the cookies of the browser and sorts them
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }




  //this function changes the color of logo2 (the little)
  //moon in the center of the dark mode button

  function ver() {
  var d = document.getElementById('cro').checked;
  if (d == true) {
    console.log(d);
  document.getElementById('logo2').style.boxShadow = "-8px -0px 0 0 white";
  }
  else {
    console.log(d);
    document.getElementById('logo2').style.boxShadow = "-8px -0px 0 0 lightgray";
  }

  }

  function check() {
    var cookie =  getCookie("theme");
    console.log(cookie + 1);
    if (cookie = null) {
    setCookie("theme", "light");
    console.log(cookie + 2);
    }
    else {
      return " ";
    }
  }


  //this is an event listener for the function that changes the color
  //of logo 2
  document.getElementById('cro').addEventListener("click", ver);

  function checking() {
    var x = getCookie("theme");
    console.log(x + 36);
    if (x == "light") {
      document.body.style.backgroundColor = "white";
      document.getElementById('cro').checked = false;
    }

    else if (x == "dark"){

      var gen = document.getElementById('s-general');
      gen.href = "style/general-mobile-dark.css";
      document.getElementById('cro').checked = true;
    }

    else {

    }
  }


  //this function toggles the dark mode (or white mode) of the page
  function toggle() {
    check();
    var is_checked = document.getElementById('cro').checked;
    document.body.style.transition = "1s";
    if (is_checked == true) {
      var gen = document.getElementById('s-general');
      gen.href = "style/general-mobile-dark.css"
      let x = document.cookie;
      console.log(x)
    }
    else {
      var gen = document.getElementById('s-general');
      gen.href = "style/general-mobile.css"
      document.cookie = "theme=light";
      let x = document.cookie;
      console.log(x);
    }
  }

  //this is the event listener for the funcion that toggles dark and white mode
  document.getElementById('dark-button').addEventListener("click", toggle);

document.body.addEventListener("load", checking());


//for header
const header = document.getElementById('header');

let lastScrollY = window.scrollY;
window.addEventListener("scroll", verify);

function verify() {
  if (lastScrollY < window.scrollY) {
    var hClass = header.classList;
    hClass.add("header--hidden");
  }
  else {
    var hClass = header.classList;
    hClass.remove("header--hidden");
  }

  lastScrollY = window.scrollY;
}
}else{
  // false for not mobile device
  console.log("not mobile device");

  var gen = document.getElementById('s-general');
  gen.href = "style/general.css";

  //this function sets the cookie
  function setCookie(cname, cvalue) {
    var cookie = cname + "=" + cvalue;
    document.cookie = cookie;
  }





  //this function gets all the cookies of the browser and sorts them
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }




  //this function changes the color of logo2 (the little)
  //moon in the center of the dark mode button

  function ver() {
  var d = document.getElementById('cro').checked;
  if (d == true) {
    console.log(d);
  document.getElementById('logo2').style.boxShadow = "-8px -0px 0 0 white";
  }
  else {
    console.log(d);
    document.getElementById('logo2').style.boxShadow = "-8px -0px 0 0 lightgray";
  }

  }

  function check() {
    var cookie =  getCookie("theme");
    console.log(cookie + 1);
    if (cookie = null) {
    setCookie("theme", "light");
    console.log(cookie + 2);
    }
    else {
      return " ";
    }
  }


  //this is an event listener for the function that changes the color
  //of logo 2
  document.getElementById('cro').addEventListener("click", ver);

  function checking() {
    var x = getCookie("theme");
    console.log(x + 36);
    if (x == "light") {
      var gen = document.getElementById('s-general');
      gen.href = "style/general.css";
      document.getElementById('cro').checked = false;
    }

    else if (x == "dark"){
      var gen = document.getElementById('s-general');
      gen.href = "style/general-dark.css";
      document.getElementById('cro').checked = true;
    }

    else {

    }
  }


  //this function toggles the dark mode (or white mode) of the page
  function toggle() {
    check();
    var is_checked = document.getElementById('cro').checked;
    document.body.style.transition = "1s";
    if (is_checked == true) {
      var gen = document.getElementById('s-general');
      gen.href = "style/general-dark.css";
      document.cookie = "theme=dark";
      let x = document.cookie;
      console.log(x)
    }
    else {
      var gen = document.getElementById('s-general');
      gen.href = "style/general.css";
      document.cookie = "theme=light";
      let x = document.cookie;
      console.log(x);
    }
  }

  //this is the event listener for the funcion that toggles dark and white mode
  document.getElementById('dark-button').addEventListener("click", toggle);

  document.body.addEventListener("load", checking());

  //for header
  const header = document.getElementById('header');

  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", verify);

  function verify() {
    if (lastScrollY < window.scrollY) {
      var hClass = header.classList;
      hClass.add("header--hidden");
    }
    else {
      var hClass = header.classList;
      hClass.remove("header--hidden");
    }

    lastScrollY = window.scrollY;
  }
}
