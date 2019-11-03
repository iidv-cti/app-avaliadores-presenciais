$(function(){
    $("#prog").css("display","none");

    $("#form").submit(function(e){
        
        e.preventDefault();
        $("#prog").css("display","block");
        autoRedirect = 0;

        firebase
        .database()
        .ref("users/"+$("#username").val()+"/data")
        .once("value")
        .then((a)=>{
            if(a.val() == null){
                firebase
        .auth()
        .createUserWithEmailAndPassword(
            $("#email").val(),
            $("#password").val())
            .then(function(user) {
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: $("#username").val()
                });

                firebase
                .database()
                .ref("users/"+$("#username").val()+"/data")
                .set({
                    username: $("#username").val(),
                    email: $("#email").val(),
                    password: $("#password").val()
                }).then(function(){
                    $("#prog").css("display","none");
                    window.location = "painel.html";
                })
                
            }, function(error) {
                $("#prog").css("display","none");
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(error.message);
            });
            } else {
                alert("Já existe uma conta com esse nome de usuário, por favor escolha outro.");
            }
        })
    });
});