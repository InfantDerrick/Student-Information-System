firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      user.updateProfile({
        displayName: document.getElementById("name").value;
      }).then(function(){
        window.open('./index.html', '_self');
      }).catch(function(error){
        alert(error);
      });
    }
  });
function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
  window.alert(error);
});
}
