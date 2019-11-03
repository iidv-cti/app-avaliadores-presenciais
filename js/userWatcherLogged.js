
var userDataLoaded = () => {};
var debug = 0;
if(debug){
$(function(){
  M.AutoInit();
})
} else{
$(function(){
  $("body *").css("opacity", 0);
  document.body.innerHTML = [
      "<div class=\"preloader-wrapper small active\" id='loader'>"+
      "   <div class=\"spinner-layer spinner-green-only\">"+
      "    <div class=\"circle-clipper left\">"+
      "        <div class=\"circle\"></div>"+
      "    </div><div class=\"gap-patch\">"+
      "        <div class=\"circle\"></div>"+
      "    </div><div class=\"circle-clipper right\">"+
      "        <div class=\"circle\"></div>"+
      "    </div>"+
      "    </div>"+
      "</div>"+document.body.innerHTML];

  $("#loader").css({
      "position": "fixed",
      "left": (window.innerWidth/2)-$("#loader").width(),
      "top": (window.innerHeight/2)-$("#loader").height(),
  })
})
}

var userData;

IIDVuserStatus(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var uid = user.uid;
    userData = user;
    $("#loader").animate({
        opacity: 0
    }, function(){
      $("#loader").css("display","none");
      $("body *").not("#loader").animate({
          opacity: 1
      })
      userDataLoaded();
      M.AutoInit();
    });
    // ...
  } else {
    // User is signed out.
    // ...
      $("#loader").animate({
          opacity: 0
      }, function(){
          $("#loader").css("display","none");
          $("body *").not("#loader").animate({
              opacity: 1
          })
      });
      window.location = "login.html";
  }
});