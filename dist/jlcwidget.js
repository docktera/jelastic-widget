"use strict";!function(){var e=document.getElementsByClassName("jlc-wrapper");function i(e,t,a){var s=document.createElement(e);if(t)for(var r in t){var n=t[r];"className"===r&&(r="class");var l=document.createAttribute(r);l.value=n,s.setAttributeNode(l)}return a&&(s.innerHTML=a),s}function d(){var e=f(this,".jlc-wrapper"),t=e.getElementsByClassName("jlc-cover")[0],a=e.getElementsByClassName("jlc-form")[0];p(t,"is_active");a=window.getComputedStyle(a).getPropertyValue("min-width");0!==parseInt(a)&&(e.style.width=e.style.minWidth=a)}function p(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function u(e,t){e.classList.contains(t)&&e.classList.remove(t)}function o(e){var t=f(e.target,".jlc-wrapper"),a=t.getElementsByClassName("jlc-form")[0],s=a.getElementsByClassName("jlc-input")[0],r=t.getAttribute("data-terms")||!1,e=!1;"false"===r&&!1!==r||(e=t.getElementsByClassName("jlc-terms-checkbox")[0].checked),((s=s.value,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(s).toLowerCase()))&&e?p:u)(a,"jlc-form__valid")}function f(e,t){for(;(e=e.parentElement)&&!(e.matches||e.matchesSelector).call(e,t););return e}function g(e,t,a){t=i("div",{class:"jlc-error "+(2<arguments.length&&void 0!==a?a:"")},t);e.appendChild(t)}function m(e,t){var a="0.5",s="blur(4px)";t&&(a="1",s="none"),e.style.opacity=a,e.style.filter=s}function v(e){e.preventDefault();var t=f(this,".jlc-wrapper"),a=t.getElementsByClassName("jlc-form")[0],s=t.getElementsByClassName("jlc-sbmt")[0],r=t.getElementsByClassName("jlc-input")[0],n=t.getAttribute("data-tx-error")||"An error has occurred, please try again later",l=t.getAttribute("data-tx-exist")||"This email is already registered.<br>Please ",c=t.getAttribute("data-tx-exist-linked")||"sign in to access",i=t.getAttribute("data-tx-success")||"CHECK YOUR EMAIL",d=t.getAttribute("data-key")||"jelastichosting.nl";-1<d.indexOf("app.")&&(d=d.replace("app.","")),p(a,"jlc-form__sending");var o=document.getElementsByClassName("jlc-error")[0];void 0!==o&&null!=o&&t.removeChild(o);var e=encodeURIComponent(r.value),o="https://reg."+d+"/signup",m=new XMLHttpRequest,e="email="+e;m.open("POST",o,!0),m.setRequestHeader("Content-type","application/x-www-form-urlencoded"),m.onload=function(){var e;200<=m.status&&m.status<400?(l+="<a target='_blank' href='https://app."+d+"'>"+c+"</a>.",0===(e=JSON.parse(m.responseText)).result&&(e.response.exist&&e.response.activated?(g(t,l,"user-exist"),u(a,"jlc-form__sending")):(u(a,"jlc-form__sending"),p(a,"jlc-form__succeed"),s.disabled=r.disabled=!0,r.value=i))):(g(t,n),u(a,"jlc-form__sending"))},m.onerror=function(e){g(t,n),u(a,"jlc-form__sending")},m.send(e)}Array.from(e).forEach(function(e){m(e,!1);var t=e.getAttribute("data-text")||"GET STARTED NOW",a=e.getAttribute("data-terms")||!1,s=e.getAttribute("data-terms-link")||"#",r=e.getAttribute("data-privacy-link")||"#",n=i("div",{className:"jlc-cover"});e.appendChild(n);var l=i("button",{className:"jlc-btn"},t);n.appendChild(l);var c=i("form",{className:"jlc-form"});n.appendChild(c);e=i("div",{className:"jlc-input-wrapper"});c.appendChild(e);t=i("input",{className:"jlc-input",placeholder:"your@email.com",type:"email",required:"true"});e.appendChild(t);n=i("button",{className:"jlc-sbmt"});e.appendChild(n),"false"===a&&!1!==a||(n=i("label",{className:"jlc-terms-label"}),c.appendChild(n),a=i("input",{type:"checkbox",name:"accept_terms",className:"jlc-terms-checkbox",required:"required"}),n.appendChild(a),r=i("span",null,'Read and accept <a target="_blank" href="'+s+'">Terms of Use</a> & <a target="_blank" href="'+r+'">Privacy Policy</a>'),n.appendChild(r),a.addEventListener("change",o,!1)),l.addEventListener("click",d),c.addEventListener?c.addEventListener("submit",v,!1):c.attachEvent&&c.attachEvent("onsubmit",v),t.addEventListener("change",o,!1),t.addEventListener("keyup",o,!1)}),document.onreadystatechange=function(){"complete"===document.readyState&&Array.from(e).forEach(function(e){m(e,!0)})}}();