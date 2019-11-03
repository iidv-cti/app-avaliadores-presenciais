$(function(){
    $("#prog").css("display","none");
});

userDataLoaded = function(){
    var form = new FormData;
    form.append("uid", userData.uid);
    IIDVrouteConnect("carregar_financas", carregarPaineis, form);
}

function carregarPaineis(data){
    var data = JSON.parse(data);
    if(data.status == 1){
        data.registros.forEach(adicionarCard);
    } else {
        document.getElementById("regStatus").innerHTML = data.message;
    }
}

function adicionarCard(data){
    document.getElementById("regStatus").innerHTML += [
      "  <div class=\"row\\>"
      +"  <div class=\"col s12 m6\">"
      +"    <div class=\"card\">"
      +"      <div class=\"card-image\">"
      +"        <img src=\""+data.url+"\">"
      +"        <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">edit</i></a>"
      +"      </div>"
      +"      <div class=\"card-content\">"
      +"        <span class=\"card-title\">"+data.valor+"</span>"
      +"        <p>"+data.descricao+"</p>"
      +"      </div>"
      +"    </div>"
      +"  </div>"
      +"</div>"
    ];
}

