<template>
<!-- Harmonie Colorée -->
<h1 class="text-center text-sm font-bold border-b-2 my-4">l'Harmonie Colorée</h1>

<div class="flex mt-10 gap-x-4">
  <div class="hover:bg-violet2 hover:text-white border-violet2 border-2 text-violet2 p-2 rounded-md">
    <p>#BA58CE</p>    
  </div>
    <div class="hover:bg-jaune2 hover:text-white border-jaune2 border-2 text-jaune2 p-2 rounded-md">
    <p>#EBEF34</p>    
  </div>
    <div class="hover:bg-Noir hover:text-white border-Noir border-2 text-Noir p-2 rounded-md">
    <p>#000000</p>    
  </div>
    <div class="hover:bg-Blanc bg-black hover:text-Noir border-Blanc hover:border-Noir border-2 text-Blanc p-2 rounded-md">
    <p>#FFFFFF</p>    
  </div>
</div>



<!-- Police -->
<h1 class="text-center text-sm font-bold border-b-2 my-4">Polices</h1>

<h3 class="font-mono font-bold">Title Font</h3>
<p class="font-serif">Basic Font</p>

<!-- Icônes -->
<h1 class="text-center text-sm font-bold border-b-2 my-4">Les icônes</h1>

<div class="grid grid-cols-3">
  <arrowdown />
  <back />
  <logogrand />
  <logomoyen />
  <logopetit />
  <micro />
  <next />

<img src="../components/icones/calendar.png" alt="Calendrier">
<img src="../components/icones/facebook.png" alt="Facebook">
<img src="../components/icones/instagram.png" alt="Instagram">
<img src="../components/icones/youtube.png" alt="Youtube">
<img src="../components/icones/letter.png" alt="Lettre">
<img src="../components/icones/newsletter_check.png" alt="Check">
<img src="../components/icones/titleicon.png" alt="title icon">

</div>


<!-- COMPOSANTS -->
<h1 class="text-center text-sm font-bold border-b-2 mb-4">les composants</h1>

<div class="mb-96">

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">
  <!-- Home Card - Concert & Chanteur -->
  <homecard class="mb-10"
  :minia="bts"
  title="Genre musique"
  txt="texte (duree)"
  url="#"
  date="14/09/2022"
  chanteurs="Chanteur 1, Chanteur 2,  ..."
  place="X"/>

  <homecard class="mb-10"
  :minia="akb48"
  title="Chanteur X"
  url="#"
  chanteurs="Genre de musique du chanteur"/>

</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center mt-12 gap-5">

<artistecard 
  :minia="amir"
  title="Amir"
/>

<artistecard 
  :minia="lisa"
  title="Chanteur 2"
/>

<artistecard 
  :minia="loona"
  title="Chanteur 3"
/>

</div>


<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center mt-12 gap-5">

    <profil 
    nom="Angèle"
    genre="Pop Française"
    :portrait="angele"
    
    instagram="#"
    facebook="#"
    youtube="#"/>


        <profil 
    nom="Amir"
    genre="Pop Française"
    :portrait="amir"
    
    instagram="#"
    facebook="#"
    youtube="#"/>


        <profil 
    nom="Lisa"
    genre="Pop Japonaise"
    :portrait="lisa"
    
    instagram="#"
    facebook="#"
    youtube="#"/>

</div>

<div class="flex justify-center">

   <!-- Bouton Paramétrable - hover violet -->
  <bouton class="mb-10 mt-10" 
  txt="texte exemple"
  url="#"/>

</div>


</div>

</template>

<script>
import homecard from "../components/homecard.vue"
import bouton from "../components/bouton.vue"
import artistecard from "../components/cardartiste.vue"
import profil from "../components/profilartiste.vue"

import arrowdown from "../components/icones/arrowdown.vue"
import back from "../components/icones/back.vue"
import logogrand from "../components/icones/logo_grand.vue" 
import logomoyen from "../components/icones/logo_moyen.vue" 
import logopetit from "../components/icones/logo_petit.vue"
import micro from "../components/icones/micro.vue"
import next from "../components/icones/next.vue"

import angele from "../assets/img/chanteurs/angele.jpg"
import amir from "../assets/img/chanteurs/amir.jpg"
import lisa from "../assets/img/chanteurs/lisa.jpg"
import akb48 from "../assets/img/chanteurs/AKB48.jpg"
import bts from "../assets/img/chanteurs/BTS.jpg"
import loona from "../assets/img/chanteurs/Loona.jpg"

export default {
  name: "componentsView",

  data:function() {
    return {
      angele,
      amir,
      lisa,
      akb48,
      bts,
      loona,
    }
  },
      components:{ homecard, bouton, artistecard, profil, arrowdown, back, logogrand, logomoyen, logopetit, micro, next }
};
</script>