"use strict";!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery||Zepto)}(function(t){var a=function(a,e,n){var r={invalid:[],getCaret:function(){try{var t,e=0,n=a.get(0),s=document.selection,o=n.selectionStart;return s&&-1===navigator.appVersion.indexOf("MSIE 10")?((t=s.createRange()).moveStart("character",-r.val().length),e=t.text.length):(o||"0"===o)&&(e=o),e}catch(t){}},setCaret:function(t){try{if(a.is(":focus")){var e,n=a.get(0);n.setSelectionRange?(n.focus(),n.setSelectionRange(t,t)):((e=n.createTextRange()).collapse(!0),e.moveEnd("character",t),e.moveStart("character",t),e.select())}}catch(t){}},events:function(){a.on("keydown.mask",function(t){a.data("mask-keycode",t.keyCode||t.which)}).on(t.jMaskGlobals.useInput?"input.mask":"keyup.mask",r.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){c===r.val()||a.data("changed")||a.trigger("change"),a.data("changed",!1)}).on("blur.mask",function(){c=r.val()}).on("focus.mask",function(a){!0===n.selectOnFocus&&t(a.target).select()}).on("focusout.mask",function(){n.clearIfNotMatch&&!s.test(r.val())&&r.val("")})},getRegexMask:function(){for(var t,a,n,r,s,c,i=[],l=0;l<e.length;l++)(t=o.translation[e.charAt(l)])?(a=t.pattern.toString().replace(/.{1}$|^.{1}/g,""),n=t.optional,(r=t.recursive)?(i.push(e.charAt(l)),s={digit:e.charAt(l),pattern:a}):i.push(n||r?a+"?":a)):i.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return c=i.join(""),s&&(c=c.replace(new RegExp("("+s.digit+"(.*"+s.digit+")?)"),"($1)?").replace(new RegExp(s.digit,"g"),s.pattern)),new RegExp(c)},destroyEvents:function(){a.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(t){var e,n=a.is("input")?"val":"text";return arguments.length>0?(a[n]()!==t&&a[n](t),e=a):e=a[n](),e},getMCharsBeforeCount:function(t,a){for(var n=0,r=0,s=e.length;r<s&&r<t;r++)o.translation[e.charAt(r)]||(t=a?t+1:t,n++);return n},caretPos:function(t,a,n,s){return o.translation[e.charAt(Math.min(t-1,e.length-1))]?Math.min(t+n-a-s,n):r.caretPos(t+1,a,n,s)},behaviour:function(e){e=e||window.event,r.invalid=[];var n=a.data("mask-keycode");if(-1===t.inArray(n,o.byPassKeys)){var s=r.getCaret(),c=r.val().length,i=r.getMasked(),l=i.length,u=r.getMCharsBeforeCount(l-1)-r.getMCharsBeforeCount(c-1),f=s<c;return r.val(i),f&&(8!==n&&46!==n&&(s=r.caretPos(s,c,l,u)),r.setCaret(s)),r.callbacks(e)}},getMasked:function(t,a){var s,c,i=[],l=void 0===a?r.val():a+"",u=0,f=e.length,h=0,k=l.length,d=1,v="push",p=-1;for(n.reverse?(v="unshift",d=-1,s=0,u=f-1,h=k-1,c=function(){return u>-1&&h>-1}):(s=f-1,c=function(){return u<f&&h<k});c();){var g=e.charAt(u),m=l.charAt(h),M=o.translation[g];M?(m.match(M.pattern)?(i[v](m),M.recursive&&(-1===p?p=u:u===s&&(u=p-d),s===p&&(u-=d)),u+=d):M.optional?(u+=d,h-=d):M.fallback?(i[v](M.fallback),u+=d,h-=d):r.invalid.push({p:h,v:m,e:M.pattern}),h+=d):(t||i[v](g),m===g&&(h+=d),u+=d)}var y=e.charAt(s);return f!==k+1||o.translation[y]||i.push(y),i.join("")},callbacks:function(t){var s=r.val(),o=s!==c,i=[s,t,a,n],l=function(t,a,e){"function"==typeof n[t]&&a&&n[t].apply(this,e)};l("onChange",!0===o,i),l("onKeyPress",!0===o,i),l("onComplete",s.length===e.length,i),l("onInvalid",r.invalid.length>0,[s,t,a,r.invalid,n])}};a=t(a);var s,o=this,c=r.val();e="function"==typeof e?e(r.val(),void 0,a,n):e,o.mask=e,o.options=n,o.remove=function(){var t=r.getCaret();return r.destroyEvents(),r.val(o.getCleanVal()),r.setCaret(t-r.getMCharsBeforeCount(t)),a},o.getCleanVal=function(){return r.getMasked(!0)},o.getMaskedVal=function(t){return r.getMasked(!1,t)},o.init=function(e){if(e=e||!1,n=n||{},o.clearIfNotMatch=t.jMaskGlobals.clearIfNotMatch,o.byPassKeys=t.jMaskGlobals.byPassKeys,o.translation=t.extend({},t.jMaskGlobals.translation,n.translation),o=t.extend(!0,{},o,n),s=r.getRegexMask(),!1===e){n.placeholder&&a.attr("placeholder",n.placeholder),a.data("mask")&&a.attr("autocomplete","off"),r.destroyEvents(),r.events();var c=r.getCaret();r.val(r.getMasked()),r.setCaret(c+r.getMCharsBeforeCount(c,!0))}else r.events(),r.val(r.getMasked())},o.init(!a.is("input"))};t.maskWatchers={};var e=function(){var e=t(this),r={},s="data-mask-",o=e.attr("data-mask");if(e.attr(s+"reverse")&&(r.reverse=!0),e.attr(s+"clearifnotmatch")&&(r.clearIfNotMatch=!0),"true"===e.attr(s+"selectonfocus")&&(r.selectOnFocus=!0),n(e,o,r))return e.data("mask",new a(this,o,r))},n=function(a,e,n){n=n||{};var r=t(a).data("mask"),s=JSON.stringify,o=t(a).val()||t(a).text();try{return"function"==typeof e&&(e=e(o)),"object"!=typeof r||s(r.options)!==s(n)||r.mask!==e}catch(t){}};t.fn.mask=function(e,r){r=r||{};var s=this.selector,o=t.jMaskGlobals,c=o.watchInterval,i=r.watchInputs||o.watchInputs,l=function(){if(n(this,e,r))return t(this).data("mask",new a(this,e,r))};return t(this).each(l),s&&""!==s&&i&&(clearInterval(t.maskWatchers[s]),t.maskWatchers[s]=setInterval(function(){t(document).find(s).each(l)},c)),this},t.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},t.fn.unmask=function(){return clearInterval(t.maskWatchers[this.selector]),delete t.maskWatchers[this.selector],this.each(function(){var a=t(this).data("mask");a&&a.remove().removeData("mask")})},t.fn.cleanVal=function(){return this.data("mask").getCleanVal()},t.applyDataMask=function(a){((a=a||t.jMaskGlobals.maskElements)instanceof t?a:t(a)).filter(t.jMaskGlobals.dataMaskAttr).each(e)};var r,s,o,c={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:(r="input",o=document.createElement("div"),(s=(r="on"+r)in o)||(o.setAttribute(r,"return;"),s="function"==typeof o[r]),o=null,s),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};t.jMaskGlobals=t.jMaskGlobals||{},(c=t.jMaskGlobals=t.extend(!0,{},c,t.jMaskGlobals)).dataMask&&t.applyDataMask(),setInterval(function(){t.jMaskGlobals.watchDataMask&&t.applyDataMask()},c.watchInterval)});

let trava = false;
const appHeader = '';
const ATUALHost = 'https://testeemerson.institutoidv.org'
let appStore = {};
let COINTER = localStorage.getItem("COINTER");
let UploadHost = 'https://cointer.institutoidv.org/inscricao/'+COINTER+'/uploads/';
let UserData = {};

$(function(){
  $('[data-headerTitle]').text(appHeader);
  $('[data-cointer]').text(COINTER);
});

function get(parameterName) {
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

function IIDVrouteConnect(data, formData={}){
    $.ajax({
        url:ATUALHost + "/"+data.route,
        type:data.method,
        data: JSON.stringify(formData),
        dataType: 'json',
        contentType: 'application/json',
        headers: {
          'Content-Type' : 'application/json; charset=UTF-8',
          'Authorization' : 'Bearer '+localStorage.getItem("token")
        },
        success(response){
            data.loader(response);
        },
        error(){
          if(trava){
            alert('Ocorreu um erro ao executar o pedido. Por favor tente novamente daqui a alguns minutos.');
            trava = false;
          }
        }
    
      });
}

function IIDVuserStatus(fn){
    $.ajax({
        url:ATUALHost + "/smart/usuario?cointer="+COINTER,
        type:"GET",
        dataType:"html",
        headers: {
          'Content-Type' : 'application/json; charset=UTF-8',
          'Authorization' : 'Bearer '+localStorage.getItem("token")
        },
        success(data){
            //console.log(data);
            var dados=JSON.parse(data)

            if(dados.status){
              appStore.user = dados.data;
              $('[data-user-username]').text(appStore.user.name);
              $('[data-user-cpf]').text(appStore.user.cpf);
              painel();
              fn(dados);
            } else {
              fn()
            }
        }, error(){
          alert('Erro interno no servidor... Por favor aguarde alguns minutos e tente novamente.');
        }
      })
}

function painel(){
  
  switch(appStore.user.categoria){
    case 'monitor':
        $("#apenasMonitor").css('display', 'block');
        break;
  }

  switch(appStore.user.tipo){
    
    case 'avaliador':
      $("#apenasAvaliador").css('display', 'block');
      break;

    case 'organizador':
      $("#apenasComissao").css('display', 'block');
      break;
  }

  if(appStore.user.superuser == 1){
    $("#apenasMonitor").css('display', 'block');
    $("#apenasAvaliador").css('display', 'block');
    $("#apenasConselho").css('display', 'block');
  }
}

function IIDVuserLogin(user, password, fn){
    $.ajax({
        url:ATUALHost + "/smart/"+COINTER+"/2019/entrar",
        type:"post",
        dataType:"html",
        data:{
            cpf: user,
            senha: password
        }, success(data){
            var dados=JSON.parse(data)
            if(dados.id){
              localStorage.setItem("token",dados.api_token)
              fn()
            } else {
              alert('Ocorreu um erro na requisição.');
            }
        }, error(){
          alert('CPF ou senha incorretos');
        }
      })
}

function IIDVConfig(config){
  localStorage.setItem("system", config.system);
}

function IIDVLogOut(fn){
  $.ajax({
    url:ATUALHost + "/smart/sair",
    type:"get",
    dataType:"html",
    headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization' : 'Bearer '+localStorage.getItem("token")
    }, success(data){
        data = JSON.parse(data);
        if(data.status==0){
          localStorage.setItem("uid","")
          localStorage.setItem("token","")
          fn(0)
        } else if(data.status==1){
          localStorage.setItem("uid","")
          localStorage.setItem("token","")
          fn(1)
        } else {
          alert("Oops");
        }
    }
  })
}