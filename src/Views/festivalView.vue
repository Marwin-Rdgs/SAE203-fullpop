<template>

<img src="../assets/img/festival.jpg" alt="Miniature Festival" class="w-full">

<div class="bg-gray-400 bg-opacity-30 w-1/2 ml-auto mr-auto my-20 rounded-lg">
  <h2 class="text-center text-lg ml-auto mr-auto">FullPop</h2>
  <div class="grid lg:grid-cols-2 mt-10">
      <logo />
      <p class="text-xs mb-10 mt-4">Full Pop est un festival exclusivement autour de l’entièreté du monde de la pop culture, Dans ce dernier vous trouverez aussi bien de la pop française mais également de la JPop où encore de la KPop pour la musique pop provenant des pays de l’est qui reviennnent à la  mode de nos jours via la propagation de manga, d’animes où encore  de série autour de ces traditions. <br> <br>
        Notre festival n’a pas  de clientèle précise mais est là pour satisfaire tout type de  client,et donc les satisfaire et éboulir leurs journées !</p>
  </div>
  <div class="flex justify-center gap-10">
      <img src="../components/icones/instagram.png" alt="Logo Instagram" class="w-1/12">
      <img src="../components/icones/youtube.png" alt="Logo Youtube" class="w-1/12">
   </div>
</div>

<div class="flex justify-center mb-20">
<bouton 
  txt="Nous contacter"
  url="/contact"/>
</div>

</template>


<script>
import logo from "../components/icones/logo_moyen.vue"
import bouton from "../components/bouton.vue"

export default {
  name: "aproposView",

  components: { logo, bouton }
  };
</script>