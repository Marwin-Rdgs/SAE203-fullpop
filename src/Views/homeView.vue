<template>

<div class="grid lg:grid-cols-2 grid-cols-1 my-10">

  <img src="../assets/img/home_img1.png" alt="Image Accueil 1">
  <p class="font-serif lg:mt-72">Un <span class="text-violet2">Festival</span> qui va éblouir <br/> vos <span class="text-jaune2">journées</span></p>

  <p class="font-serif lg:mt-72 lg:ml-auto">Un Week-end de<span class="text-violet2">Fun</span> autour de la <span class="text-jaune2">pop</span></p>
  <img src="../assets/img/home_img2.png" alt="Image Accueil 2">

</div>

<a href="#down"><arrowdown class="scale-50 ml-auto mr-auto"/></a>

<!-- Section Concerts -->
<div class="w-full" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos concerts</p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">


  <homecard  class="mb-10"
  :minia="miniaPopFr"
  title="Pop Française"
  txt="2h"
  url="#"
  date="12/09/2022"
  chanteurs="Angèle, Callogero, ..."
  place="2000"/>

    <homecard class="mb-10"
  :minia="miniaPopJp"
  title="Pop Japonaise"
  txt="3h"
  url="#"
  date="13/09/2022"
  chanteurs="Lisa, ..."
  place="4500"/>

    <homecard class="mb-10"
  :minia="miniaPopKp"
  title="Pop Coréenne"
  txt="4h"
  url="#"
  date="14/09/2022"
  chanteurs="Loona, BTS,  ..."
  place="4500"/>

</div>

<!-- Section Artistes -->
<div class="w-full mt-10" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos artistes</p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">


  <homecard class="mb-10"
  :minia="angele"
  title="Angèle"
  url="#"
  chanteurs="Chanteuse Pop française"/>

    <homecard class="mb-10"
  :minia="amir"
  title="Amir"
  url="#"
  chanteurs="Chanteur Pop française"/>

    <homecard class="mb-10"
  :minia="bts"
  title="BTS"
  url="#"
  chanteurs="Groupe de K-POP"/>

    <homecard class="mb-10"
  :minia="loona"
  title="Loona"
  url="#"
  chanteurs="Groupe de K-POP"/>

    <homecard class="mb-10"
  :minia="lisa"
  title="Lisa"
  url="#"
  chanteurs="Chanteuse Pop Japonaise"/>

  <bouton class="col-span-full ml-auto mr-auto mb-10"
  txt="Voir le programme"
  url="/programmation"/>

</div>

</template>

<script>
import arrowdown from "../components/icones/arrowdown.vue"
import homecard from "../components/homecard.vue"
import bouton from "../components/bouton.vue"

import miniaPopFr from "../assets/img/popfr_minia.jpg"
import miniaPopJp from "../assets/img/popjap_minia.jpg"
import miniaPopKp from "../assets/img/popk_minia.jpg"

import angele from "../assets/img/chanteurs/angele.jpg"
import amir from "../assets/img/chanteurs/amir.jpg"
import lisa from "../assets/img/chanteurs/lisa.jpg"
import akb48 from "../assets/img/chanteurs/AKB48.jpg"
import bts from "../assets/img/chanteurs/BTS.jpg"
import loona from "../assets/img/chanteurs/Loona.jpg"

export default {
  data: function() {
    return {
    miniaPopFr,
    miniaPopJp,
    miniaPopKp,

    angele,
    amir,
    lisa,
    akb48,
    bts,
    loona,
    }
  },
    components:{ arrowdown, homecard, bouton }
};
</script>
