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
        

      let recalculate = function(){
        $("#APT").html(
            Number($("#AP0").val())+
            Number($("#AP1").val())+
            Number($("#AP2").val())
        );
      };

      let avaliacaoSubmetida = function(response){
          if(response == 1){
              window.location = "avaliado.html";
          } else {
              alert("Ocorreu um erro ao efetuar a avaliação.");
          }
      }

      let todosTrabalhosPAvaliar = localStorage.getItem('pAvaliar') ? JSON.parse(localStorage.getItem('pAvaliar')) : [];
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
      $("#tituloTrabalho").html(trabalho['titulo']);

      let avaliar = function(){
          try{
            form = {
                "id": findGetParameter("id"),
                "recomendado": ($("#recomendado").val()),
                "AP0": Number($("#AP0").val()),
                "AP1": Number($("#AP1").val()),
                "AP2": Number($("#AP2").val()),
                'comentarios': $("#comentarios").val()
            };

            IIDVrouteConnect({
                method: "POST",
                route: "smart/"+COINTER+"/2019/avaliador/presencial/trabalhos/avaliar", 
                loader: avaliacaoSubmetida
            }, form)
        } catch(e) {
            alert("Ocorreu um erro ao efetuar a avaliação.");
        }
      }

      $("#AP0").on("change", recalculate);
      $("#AP1").on("change", recalculate);
      $("#AP2").on("change", recalculate);
      $("#sub").on("click", avaliar);
  })