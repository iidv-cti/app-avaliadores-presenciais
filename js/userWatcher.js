IIDVConfig({
    system: "70737865786769738279"
})

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEpOlE1aHXNm64pQtz0RPpBCFLsg_ydho",
    authDomain: "fetch-db90e.firebaseapp.com",
    databaseURL: "https://fetch-db90e.firebaseio.com",
    projectId: "fetch-db90e",
    storageBucket: "fetch-db90e.appspot.com",
    messagingSenderId: "611103401822"
};

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

var autoRedirect = 1;
IIDVuserStatus(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;

      userData = user;
      $("#loader").animate({
          opacity: 0
      }, function(){
        $("#loader").css("display","none");
        $("body *").not("#loader").animate({
            opacity: 1
        })
        if(autoRedirect) window.location = "painel.html";
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
            M.AutoInit();
        });
    }
});