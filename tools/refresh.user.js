// ==UserScript==
// @name         refresh-kankan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      http://cdn.bootcss.com/crypto-js/3.1.2/rollups/sha1.js
// @match        http://m.kankan.com/v/*
// @match        http://127.0.0.1:8080/index.html
// @grant        GM_xmlhttpRequest
// ==/UserScript==
/* eslint-disable */
(function (){
  'use strict';
  var s = document.createElement('script');
  s.src = 'http://127.0.0.1:8080/index.js';
  s.async = true;
  document.body.appendChild(s);


  setInterval(()=>{
    GM_xmlhttpRequest({
      method: "GET",
      url: s.src + "?" + Math.random(),
      onload: function (response){
        var last = localStorage.getItem('lastscript');
        var str = response.responseText;
        var sha = CryptoJS.SHA1(str).toString();
        console.log(sha);
        localStorage.setItem('lastscript', sha + '');
        if( last != sha )
          window.location.reload();
      }
    });
  }, 3000);
})();
