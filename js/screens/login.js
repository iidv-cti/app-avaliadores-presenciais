$(function(){
    $("[data-cpf]").mask("000.000.000-00", {reverse: 0});
    
    $("#prog").css("display","none");

    COINTER = $("#COINTER").val();
    localStorage.setItem("COINTER", COINTER);

    $("#COINTER").on("change", function(){
        COINTER = $("#COINTER").val();
        localStorage.setItem("COINTER", COINTER);
    })

    $("#form").submit(function(e){
        e.preventDefault();

        IIDVuserLogin(
            $("#cpf").val(),
            $("#password").val(),
            function(user) {
                $("#prog").css("display","none");
                window.location = "painel.html";
            }, function(error) {
                $("#prog").css("display","none");
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error.message);
            });
    });
});