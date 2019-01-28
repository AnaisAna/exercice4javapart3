function valider(){
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
// si les deux mp sont correct afficher le input en vert
if (password === confirmPassword) {
  document.getElementById('password').style.border='2px solid green';
  document.getElementById('confirmPassword').style.border='2px solid green';
  //sinon afficher le input en rouge en rouge si il n'est pas correct
}else{
  document.getElementById('password').style.border='2px solid red';
  document.getElementById('confirmPassword').style.border='2px solid red';
}
}
