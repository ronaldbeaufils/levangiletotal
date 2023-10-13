if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var gen = document.getElementById('s-general');
  gen.href = "style/general-mobile.css";
  var con = document.getElementById('s-contact');
  con.href = "style/contact-mobile.css"

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
     document.getElementById('header').style.backgroundColor = "gray";
    }
    else if (theme!= "" && theme != null && theme != "dark") {
      document.getElementById('header').style.backgroundColor = "#031643";
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
     document.getElementById('header').style.backgroundColor = "gray";
    }
    else if (theme!= "" && theme != null && theme != "dark") {
      document.getElementById('header').style.backgroundColor = "#031643";
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
  document.getElementById('s-general').href = "style/general.css";
}

else {
  console.log(1);
  document.getElementById('s-general').href = "style/general-dark.css";
}
}
document.getElementById('inp').addEventListener("click", topping);
}
