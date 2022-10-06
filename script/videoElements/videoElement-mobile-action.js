if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var heade = document.getElementById('head');
  heade.innerHTML = "<link rel='stylesheet' href='style/scrollbar.css'><br><br><link rel='stylesheet' href='style/general-mobile.css'><br><title>Accueil</title>"
}else{
  // false for not mobile device
  console.log("not mobile device");
}
