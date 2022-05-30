<template>

<div class="grid lg:grid-cols-2 grid-cols-1 my-10">

  <img src="/public/img/home_img1.png" alt="Image Accueil 1">
  <p class="font-serif lg:mt-72">Un <span class="text-violet2">Festival</span> qui va éblouir <br/> vos <span class="text-jaune2">journées</span></p>

  <p class="font-serif lg:mt-72 lg:ml-auto">Un Week-end de<span class="text-violet2">Fun</span> autour de la <span class="text-jaune2">pop</span></p>
  <img src="/public/img/home_img2.png" alt="Image Accueil 2">

</div>

<a href="#"><arrowdown class="scale-50 ml-auto mr-auto"/></a>

<div class="w-full">
  <p class="font-mono font-semibold lg:text-lg">Nos concerts</p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">


  <homecard class="lg:mb-0 mb-10"
  img="/public/img/popfr_minia.jpg"
  title="Pop Française"
  txt="2h"
  url="#"
  date="12/09/2022"
  chanteurs="Angèle, Callogero, ..."
  place="2000"/>

    <homecard class="lg:mb-0 mb-10"
  img="/public/img/popjap_minia.jpg"
  title="Pop Japonaise"
  txt="3h"
  url="#"
  date="13/09/2022"
  chanteurs="Lisa, ..."
  place="4500"/>

    <homecard class="lg:mb-0 mb-10"
  img="/public/img/popk_minia.jpg"
  title="Pop Coréenne"
  txt="4h"
  url="#"
  date="14/09/2022"
  chanteurs="Loona, BTS,  ..."
  place="4500"/>

</div>

</template>

<script>
import arrowdown from "../components/icones/arrowdown.vue"
import homecard from "../components/homecard.vue"

export default {
    components:{ arrowdown, homecard }
};
</script>
