import{a as u}from"./vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";const f="19823143-e5d054b038f568b2343c680be",p=async(r,o)=>{const n={q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40,key:f};try{const{data:s}=await u("https://pixabay.com/api/",{params:n});return s}catch{}},d=({webformatURL:r,largeImageURL:o,tags:n,likes:s,views:e,comments:t,downloads:i})=>`<a href="${o}" class="photo-card" >
  <img src="${r}" alt="${n}" loading="lazy" class="photo"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${s}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${e}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${t}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${i}
    </p>
  </div>
</a>`,m=document.querySelector(".search-form"),a=document.querySelector(".gallery");m.addEventListener("submit",y);a.addEventListener("click",r=>r.preventDefault());let c=1,l="";console.log(a);function y(r){r.preventDefault(),c=1,l=r.currentTarget.searchQuery.value,p(l,c).then(o=>{console.log(o),a.insertAdjacentHTML("beforeend",o.hits.map(d).join("")),localStorage.setItem("data",JSON.stringify(o.hits))})}
//# sourceMappingURL=intersection-b977d257.js.map
