<template>

<img src="../assets/img/popfr_minia.jpg" alt="" class="w-full opacity-75">

<div class="flex justify-center mb-10">
    <h1>Concer exclusivement <br> <span class="text-violet2 border-b-2 border-jaune2 text-center"> Pop Française </span> </h1>
</div>

<div class="grid lg:grid-cols-2 mb-10">
    <div class="flex justify-center lg:ml-auto gap-x-4">
        <p>date <br> heure </p>
        <img src="../components/icones/calendar.png" alt="" class="w-1/4">
    </div>
    <p>Concert de plusieurs heures avec nos plus grands artistes de la pop française tels que Angèle, Amir, Calogero, ... et bien plus encore vous attendent dans ce concert exclusivement assis le vendredi 17 juin 2022 de 19h00 à 23h00.</p>
</div>

<div class="flex justify-center mb-20">
    <bouton 
    txt="Réserver un ticket"
    url="/"/>
</div>

<div class="grid grid-cols-2 overflow-x-hidden">
    <div class="flex">
        <RouterLink to="/"> <back /> </RouterLink>
        <p class="mt-10">Korean Pop <br> Dimanche</p>
    </div>

    <div class="flex ml-auto">
        <p class="lg:mt-10">Pop Japonaise <br> Samedi</p>
        <RouterLink to="/"> <next /> </RouterLink>
    </div>
</div>
    
</template>

<script>
import bouton from "../components/bouton.vue"

import next from "../components/icones/next.vue"
import back from "../components/icones/back.vue"

export default {
    components:{ bouton, next, back }
};
</script>