if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");
  var heade = document.getElementById('head');
  heade.innerHTML = "<link rel='stylesheet' href='../style/scrollbar.css'><br><br><link rel='stylesheet' href='../style/general-mobile.css'><br><link rel='stylesheet' href='../style/textElements/text-mobile.css'><br><link rel='icon' href='../style/images/icon.ico' type='image/icon type'><br><title>Quelle doit-etre l'Ethique du chrétien authentique?</title>"
}else{
  // false for not mobile device
  console.log("not mobile device");
}
