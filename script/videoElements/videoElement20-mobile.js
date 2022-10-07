if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var heade = document.getElementById('head');
  heade.innerHTML = "<link rel='stylesheet' href='../style/scrollbar.css'><br><br><link rel='stylesheet' href='../style/general-mobile.css'><br><link rel='stylesheet' href='../style/videoElements/video-mobile.css'><br><link rel='icon' href='../style/images/icon.ico' type='image/icon type'><br><title>La famille et les déviances sociales</title>"
}else{
  // false for not mobile device
  console.log("not mobile device");
}
