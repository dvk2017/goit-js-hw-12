import{a as u,i as c,S as O}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m=15;async function h(o,e){const r="47762015-3b880641f1939f09591269c8d";u.defaults.baseURL="https://pixabay.com";const i=new URLSearchParams({key:r,q:o,page:e,per_page:m,image_type:"photo",orientation:"horizontal",order:"latest",safesearch:!1});return(await u.get(`/api/?${i}`)).data}function g(o){return o.reduce((e,{webformatURL:r,largeImageURL:i,tags:t,likes:s,views:a,comments:S,downloads:M})=>e+=`
        <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${r}"
      data-source="${i}"
      alt="${t}"
    />
  </a>
  
<diw class="img-prop-wrap">
    <div class="img-prop">
    <h3>Likes</h3>
    <p>${s}</p>
    </div>
  <div class="img-prop">
    <h3>Viewes</h3>
    <p>${a}</p>
    </div>
  <div class="img-prop">
    <h3>Comments</h3>
    <p>${S}</p>
    </div>
  <div class="img-prop">
    <h3>Downloads</h3>
    <p>${M}</p>
    </div>
</diw>
  
</li>
        `,"")}function p(o){o.message==="noImagesMatching"?c.show({messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,maxWidth:"432px",messageSize:"16px",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff",color:"#ef4040",position:"topRight"}):c.show({title:`${o}`,titleColor:"#fff",messageColor:"#fff",message:"Unable loading images",timeout:5e3,maxWidth:"432px",messageSize:"16px",icon:"material-icons",iconText:"highlight_off",iconColor:"#ffffff",color:"#ef4040",position:"topRight"})}function P(){c.info({message:"We're sorry, but you've reached the end of search results.",timeout:5e3,maxWidth:"432px",messageSize:"16px",position:"topRight"})}const l=document.querySelector(".query"),f=document.querySelector(".gallery"),y=document.querySelector(".loading-message");let v=new O(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function w(){y.classList.remove("visually-hidden")}function L(){y.classList.add("visually-hidden")}function b(){d.classList.remove("visually-hidden")}function x(){d.classList.add("visually-hidden")}function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}let n=1;async function $(o){if(o.preventDefault(),l.value.trim()!==""){n=1,f.innerHTML="",x(),w();try{const e=await h(l.value,n);if(e.hits.length===0)throw new Error("noImagesMatching");e.totalHits>e.hits.length&&b();const r=e.hits,i=g(r);f.insertAdjacentHTML("beforeend",i),v.refresh()}catch(e){p(e)}L()}}async function E(){n+=1,x(),w();try{const o=await h(l.value,n),e=o.hits,r=g(e);f.insertAdjacentHTML("beforeend",r),v.refresh(),q(),o.totalHits/m<n?P():b()}catch(o){p(o)}L()}const C=document.querySelector("form"),d=document.querySelector(".load-more-btn");C.addEventListener("submit",$);d.addEventListener("click",E);
//# sourceMappingURL=index.js.map
