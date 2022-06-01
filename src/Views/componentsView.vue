<template>
<h1>les composants</h1>

<div class="mb-96">

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center">
  <!-- Home Card - Concert & Chanteur -->
  <homecard class="mb-10"
  img="../assets/img/popk_minia.jpg"
  title="Genre musique"
  txt="texte (duree)"
  url="#"
  date="14/09/2022"
  chanteurs="Chanteur 1, Chanteur 2,  ..."
  place="X"/>

  <homecard class="mb-10"
  img="/public/img/popfr_minia.jpg"
  title="Chanteur X"
  url="#"
  chanteurs="Genre de musique du chanteur"/>

</div>

<!-- Bouton Paramétrable - hover violet -->
  <bouton class="mb-10" 
  txt="texte exemple"
  url="#"/>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center mt-12 gap-5">

<artistecard 
  img="/public/img/popfr_minia.jpg"
  title="Amir"
/>

<artistecard 
  img="/public/img/popjap_minia.jpg"
  title="Chanteur 2"
/>

<artistecard 
  img="/public/img/popk_minia.jpg"
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



</div>

</template>

<script>
import homecard from "../components/homecard.vue"
import bouton from "../components/bouton.vue"
import artistecard from "../components/cardartiste.vue"
import profil from "../components/profilartiste.vue"

export default {
  name: "componentsView",

      components:{ homecard, bouton, artistecard, profil }
};
</script>