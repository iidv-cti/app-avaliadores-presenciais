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
    document.getElementById("regAvaliados").innerHTML += cardHTML(data.titulo, data.id, data.AP0, data.AP1, data.AP2);
}

function adicionarCardPAvaliar(data){
    document.getElementById("regPAvaliar").innerHTML += cardHTML(data.titulo, data.id, data.AP0, data.AP1, data.AP2);
}
  
function Id(num){
  let cn = 100;
  let cp = 5;
  return cn + (num*cp);
}

function cardHTML(title, id, n0, n1, n2){
    return [
        "  <div class=\"row \">"
        +"  <div class=\"col s12\">"
        +"    <div class=\"card \">"
        +"      <div class=\"card-content\">"
        +"        <span class=\"card-title\">"+title+"</span>"
        +"      </div>"
        +"<ul class=\"collection\">"
        +"    <li class=\"collection-item\"><div>ID<a href=\"#!\" class=\"secondary-content\">#"+Id(id)+"</a></div></li>"
        +"    <li class=\"collection-item\"><div>N0<a href=\"#!\" class=\"secondary-content\">"+n0+"</a></div></li>"
        +"    <li class=\"collection-item\"><div>N1<a href=\"#!\" class=\"secondary-content\">"+n1+"</a></div></li>"
        +"    <li class=\"collection-item\"><div>N2<a href=\"#!\" class=\"secondary-content\">"+n2+"</a></div></li>"
        +"</ul>"
        +"      <div class=\"card-content\">"
        +"        <a href=\"article.html?id="+id+"\">Ver artigo</a>"
        +"      </div>"
        +"    </div>"
        +"  </div>"
        +"</div>"
      ];
}
