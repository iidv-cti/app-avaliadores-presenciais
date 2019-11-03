$(function(){
    $("#prog").css("display","none");
});

userDataLoaded = function(){
    var form = new FormData;
    form.append("uid", userData.uid);

    IIDVrouteConnect({
        method: "GET",
        route: "smart/pdvagro/2019/avaliador/presencial/trabalhos/avaliados", 
        loader: carregarPaineisAvaliados, 
        data: form
    });
    
    IIDVrouteConnect({
        method: "GET",
        route: "smart/pdvagro/2019/avaliador/presencial/trabalhos/disponiveis", 
        loader: carregarPaineisPAvaliar, 
        data: form
    });
}

function carregarPaineisAvaliados(data){
    localStorage.setItem('avaliados', JSON.stringify(data));
    if(data.data.length > 0) data.data.forEach(adicionarCardAvaliados);
    else document.getElementById("regPAvaliar").innerHTML = 'Nenhum trabalho avaliado.';
}


function carregarPaineisPAvaliar(data){
    localStorage.setItem('pAvaliar', JSON.stringify(data));
    if(data.data.length > 0) data.data.forEach(adicionarCardPAvaliar);
    else document.getElementById("regPAvaliar").innerHTML = 'Nenhum trabalho para avaliar.';
}

function adicionarCardAvaliados(data){
    document.getElementById("regAvaliados").innerHTML += cardHTML(data.titulo, data.id);
}

function adicionarCardPAvaliar(data){
    document.getElementById("regPAvaliar").innerHTML += cardHTML(data.titulo, data.id);
}

function cardHTML(title, id){
    return [
        "  <div class=\"row \">"
        +"  <div class=\"col s12\">"
        +"    <div class=\"card \">"
        +"      <div class=\"card-content\">"
        +"        <span class=\"card-title\">"+title+"</span>"
        +"      </div>"
        +"      <div class=\"card-action\">"
        +"        <a href=\"article.html?id="+id+"\">Ver artigo</a>"
        +"      </div>"
        +"    </div>"
        +"  </div>"
        +"</div>"
      ];
}
