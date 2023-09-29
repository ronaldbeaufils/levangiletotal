if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var gen = document.getElementById('link-general');
  gen.href = "../style/general-mobile.css";
  var vid = document.getElementById('link-video');
  vid.href = "../style/videoElements/video-mobile.css"
}else{
  // false for not mobile device
  console.log("not mobile device");
}
