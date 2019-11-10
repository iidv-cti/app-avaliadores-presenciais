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

function onDeviceReady(){
  $('a').click(function () {
    url = $(this).attr("href");
    if (typeof cordova !== "undefined" && cordova.InAppBrowser) {
        cordova.InAppBrowser.open(url, '_system');
    } else if (typeof navigator !== "undefined" && navigator.app) {
        // Mobile device.
        navigator.app.loadUrl(url, { openExternal: true });
    } else {
        // Possible web browser
        window.open('https://docs.google.com/viewer?url='+url+'&embedded=true', "_blank", 'location=yes');
    }
    return false;
});
}

document.addEventListener("deviceready", onDeviceReady, false);


$(function(){
  let todosTrabalhosPAvaliar = JSON.parse(localStorage.getItem('pAvaliar'));
  let todosTrabalhosAvaliados = JSON.parse(localStorage.getItem('avaliados'));
  let idTrabalho = findGetParameter('id');

  let trabalho = todosTrabalhosPAvaliar.find((el) => {
    return el.id == idTrabalho;
  });

  if(!trabalho){
    trabalho = todosTrabalhosAvaliados.find((el) => {
      return el.id == idTrabalho;
    });
  }

  $('[data-var="pdf"]').attr('href', UploadHost + trabalho['arquivoPDF']);
  $('[data-avaliar]').attr('href', $('[data-avaliar]').attr('href') + '?id=' + idTrabalho);
  $('[data-var="id"]').text(Id(Number(idTrabalho)));
  $('[data-var="title"]').text(trabalho['titulo']);
})