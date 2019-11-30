$(function(){
    $("#prog").css("display","none");
    // $("#pesquisarTrabalho").on("click", pesquisarTrabalho);
});

// userDataLoaded = function(){
//     var form = new FormData;
//     form.append("uid", userData.uid);

//     IIDVrouteConnect({
//         method: "GET",
//         route: "smart/"+COINTER+"/2019/avaliador/presencial/trabalhos/avaliados", 
//         loader: carregarPaineisAvaliados, 
//         data: form
//     });
    
//     IIDVrouteConnect({
//         method: "GET",
//         route: "smart/"+COINTER+"/2019/avaliador/presencial/trabalhos/disponiveis", 
//         loader: carregarPaineisPAvaliar, 
//         data: form
//     });
// }

// function pesquisarTrabalho(){
//     let id = toId(Number($("#idTrabalho").val()));

//     IIDVrouteConnect({
//         method: "GET",
//         route: "smart/"+COINTER+"/2019/avaliador/presencial/trabalhos/pesquisar?trabalhoId="+id, 
//         loader: carregarTPesquisar
//     });
// }


// function carregarTPesquisar(data){
//     localStorage.setItem('pesquisa', JSON.stringify(data));
//     document.getElementById("regTPesquisa").innerHTML = '';
//     if(data.length > 0) data.forEach(adicionarCardTPesquisar);
//     else document.getElementById("regTPesquisa").innerHTML = 'Nenhum trabalho localizado.';
// }

// function carregarPaineisAvaliados(data){
//     localStorage.setItem('avaliados', JSON.stringify(data));
//     if(data.length > 0) data.forEach(adicionarCardAvaliados);
//     else document.getElementById("regAvaliados").innerHTML = 'Nenhum trabalho avaliado.';
// }


// function carregarPaineisPAvaliar(data){
//     localStorage.setItem('pAvaliar', JSON.stringify(data));
//     if(data.length > 0) data.forEach(adicionarCardPAvaliar);
//     else document.getElementById("regPAvaliar").innerHTML = 'Nenhum trabalho para avaliar.';
// }

// function adicionarCardTPesquisar(data){
//     document.getElementById("regTPesquisa").innerHTML += cardHTML(data.titulo, data.id, data.AP0, data.AP1, data.AP2);
// }

// function adicionarCardAvaliados(data){
//     document.getElementById("regAvaliados").innerHTML += cardHTML(data.titulo, data.id, data.AP0, data.AP1, data.AP2);
// }

// function adicionarCardPAvaliar(data){
//     document.getElementById("regPAvaliar").innerHTML += cardHTML(data.titulo, data.id, data.AP0, data.AP1, data.AP2);
// }

function Id(num){
  let cn = 100;
  let cp = 5;
  return cn + (num*cp);
}

function toId(num){
    let cn = 100;
    let cp = 5;
    return (num - cn)/cp;
  }

function cardHTML(title, id, n0, n1, n2, categoria){
    return [
        "  <div class=\"row \">"
        +"  <div class=\"col s12\">"
        +"    <div class=\"card \">"
        +"      <div class=\"card-content\">"
        +"        <span class=\"card-title\">"+title+"</span>"
        +"      </div>"
        +"<ul class=\"collection\">"
        +"    <li class=\"collection-item\"><div>ID<a href=\"#!\" class=\"secondary-content\">#"+Id(id)+"</a></div></li>"
        +"    <li class=\"collection-item\"><div>CRITÉRIO 1<a href=\"#!\" class=\"secondary-content\">"+n0+"</a></div></li>"
        +"    <li class=\"collection-item\"><div>CRITÉRIO 2<a href=\"#!\" class=\"secondary-content\">"+n1+"</a></div></li>"
        +"    <li class=\"collection-item\"><div>CRITÉRIO 3<a href=\"#!\" class=\"secondary-content\">"+n2+"</a></div></li>"
        +"    <li class=\"collection-item\"><div>Categoria<a href=\"#!\" class=\"secondary-content\">"+categoria+"</a></div></li>"
        +"</ul>"
        +"      <div class=\"card-content\">"
        +"        <a href=\"article.html?id="+id+"\">Ver artigo</a>"
        +"      </div>"
        +"    </div>"
        +"  </div>"
        +"</div>"
      ];
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
  }