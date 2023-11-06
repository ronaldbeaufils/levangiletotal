if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var gen = document.getElementById('link-general');
  gen.href = "../style/general-mobile.css";
  var text = document.getElementById('link-text');
  text.href = "../style/textElements/text-mobile.css";
  console.log("yahoo");

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
