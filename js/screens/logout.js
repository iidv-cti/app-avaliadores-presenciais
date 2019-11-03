$(function(){
    $("#prog").css("display","block");

    IIDVLogOut(function(){
        $("#prog").css("display","none");
        window.location = "login.html";
    });
});