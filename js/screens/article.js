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

function Id(num){
  let cn = 100;
  let cp = 5;
  return cn + (num*cp);
}

$(function(){
  
  let todosTrabalhosPAvaliar = localStorage.getItem('pAvaliar') ? JSON.parse(localStorage.getItem('pAvaliar')) : [];
  let todosTrabalhosAvaliados = localStorage.getItem('avaliados') ? JSON.parse(localStorage.getItem('avaliados')) : [];
  let idTrabalho = findGetParameter('id');

  let trabalho = todosTrabalhosPAvaliar.find((el) => {
    return el.id == idTrabalho;
  });

  if(!trabalho){
    trabalho = todosTrabalhosAvaliados.find((el) => {
      return el.id == idTrabalho;
    });
  }
  //$('[data-var="pdf"]').attr('data-href', UploadHost + trabalho['arquivoPDF']);

  localStorage.setItem('PDF', "https://docs.google.com/viewer?url="+UploadHost + trabalho['arquivoPDF']+"&embedded=true");
  $('[data-avaliar]').attr('href', $('[data-avaliar]').attr('href') + '?id=' + idTrabalho);
  $('[data-checkin]').attr('href', $('[data-checkin]').attr('href') + '?trabalhoId=' + idTrabalho);
  $('[data-var="id"]').text(Id(Number(idTrabalho)));
  $('[data-var="title"]').text(trabalho['titulo']);
  $('[data-var="autores"]').text(trabalho['autores']);
  $('[data-var="tipo"]').text(trabalho['categoria']);
  
  if(
    (trabalho['categoria'].toUpperCase() == 'POSTER')||
    (trabalho['categoria'].toUpperCase() == 'PÔSTER')){
    $('[data-var="poster"]').css('display', 'inline-block');
  } 

  if(trabalho['categoria'].toUpperCase() == 'COMUNICAÇÃO ORAL'){
    $('[data-var="comunicacao_oral"]').css('display', 'inline-block');
  } 
  
  if(trabalho['categoria'].toUpperCase() == 'RELATO DE EXPERIÊNCIA'){
    $('[data-var="relato_experiencia"]').css('display', 'inline-block');
  }
})