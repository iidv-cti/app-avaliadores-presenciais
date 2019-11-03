var file = [];
var formData;

$(function(){
    $("#prog").css("display", "none");

    $("#img").change(function(e){
        $("#prog").css("display", "block");
        $("#sub").addClass("disabled").attr("disabled", true);

        IIDVrouteConnect("carregar_imagem",function(data){
                var data = JSON.parse(data);
                $("#prog").css("display", "none");
                $("#arquivo").val(data.data);
                var image = $("#prev");
                var container = $("#prevContainer");
                container.fadeOut('fast', function () {
                    image.attr('src', $("#arquivo").val())
                    .one("load", function(){
                        container.fadeIn('fast');
                        $("#sub").removeClass("disabled").removeAttr("disabled");
                    });
                });
                
            }, new FormData($("#uploadForm")[0]));
    });

    $("#registro, #upload").submit(sendFinanca);
    $("#sub").click(sendFinanca);
})

function sendFinanca(e){
    e.preventDefault();
    
    var form = new FormData();
    form.append("valor", $("#valor").val());
    form.append("descricao", $("#descricao").val());
    form.append("arquivo", $("#arquivo").val());
    form.append("local", $("#local").val());
    form.append("para", $("#para").val());
    form.append("uid", userData.uid);

    IIDVrouteConnect("registrar_financa",function(data){
        data= JSON.parse(data);
        if(data.status == 1){
            window.location = "painel.html";
        } else {
            alert(data.message);
        }
    }, form);
}