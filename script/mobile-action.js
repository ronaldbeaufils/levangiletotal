if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
<<<<<<< HEAD
  document.body.onload = themeCheck();
  var gen = document.getElementById('s-general');
  gen.href = "style/general-mobile.css";

  function setCookie(cname) {
    document.cookie = "theme=" + cname;
    let x = document.cookie;
    console.log(x);
  }


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


  function checkCookie() {
    let theme = getCookie("theme");
    if (theme != "" && theme != null && theme != "light") {
     setCookie("light")
     document.getElementById('header').style.backgroundColor = "#031643";
    }
    else if (theme!= "" && theme != null && theme != "dark") {
      setCookie("dark");
      document.getElementById('header').style.backgroundColor = "gray";
    }
    else {
      setCookie("light");
    }

  }

  function themeCheck() {
    let theme = getCookie("theme");
    if (theme != "" && theme != null && theme != "light") {
     console.log(theme);
    }
    else if (theme!= "" && theme != null && theme != "dark") {
      console.log(theme);
    }
    else {
      setCookie("light");
    }
  }

  function topping() {
  var inpc = document.getElementById('inp').checked;
console.log(inpc);
if (inpc != true) {
  console.log(2);
  document.getElementById('s-general').href = "style/general-mobile.css";
}

else {
  console.log(1);
  document.getElementById('s-general').href = "style/general-mobile-dark.css";
}
}
document.getElementById('inp').addEventListener("click", topping);

}else{
  // false for not mobile device
  console.log("not mobile device");

  function setCookie(cname) {
    document.cookie = "theme=" + cname;
    let x = document.cookie;
    console.log(x);
  }


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


  function checkCookie() {
    let theme = getCookie("theme");
    if (theme != "" && theme != null && theme != "light") {
     setCookie("light")
     document.getElementById('header').style.backgroundColor = "#031643";
    }
    else if (theme!= "" && theme != null && theme != "dark") {
      setCookie("dark");
      document.getElementById('header').style.backgroundColor = "gray";
    }
    else {
      setCookie("light");
    }

  }

  function themeCheck() {
    let theme = getCookie("theme");
    if (theme != "" && theme != null && theme != "light") {
     document.getElementById('header').style.backgroundColor = "black";
    }
    else{
      document.getElementById('header').style.backgroundColor = "#031643";
    }

  function topping() {
  var inpc = document.getElementById('inp').checked;
console.log(inpc);
if (inpc != true) {
  console.log(2);
  document.getElementById('s-general').href = "style/general.css";
}

else {
  console.log(1);
  document.getElementById('s-general').href = "style/general-dark.css";
}
}
document.getElementById('inp').addEventListener("click", topping);
=======
  var heade = document.getElementById('head');
  heade.innerHTML = "<link rel='stylesheet' href='style/scrollbar.css'><br><link rel='stylesheet' href='style/texte-mobile.css'><br><link rel='stylesheet' href='style/general-mobile.css'><br><title>Accueil</title>"
}else{
  // false for not mobile device
  console.log("not mobile device");
>>>>>>> parent of c4c8ed0 (trying dark mode)
}
