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
  <hr class="bg-black"/>
</div>

<homecard
img="/public/img/home_img1.png"
title="Pop Française"
txt="2h"
url="#"
date="12/09/2022"
chanteurs="Angèle, Callogero, ..."
place="2000"/>

<h1>Bienvenue sur FullPop.fr</h1>

</template>

<script>
import arrowdown from "../components/icones/arrowdown.vue"
import homecard from "../components/homecard.vue"

export default {
    components:{ arrowdown, homecard }
};
</script>
