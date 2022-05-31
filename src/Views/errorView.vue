<template>
    
    <div class="flex justify-center mt-10">
        <logo/>
    </div>

<div class="flex justify-center">

    <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-4 gap-y-4 text-center">
        <bouton
        txt="Le Festival" 
        url="#"/>

        <bouton
        txt="Programmation" 
        url="#"/>

        <bouton
        txt="Nos artistes" 
        url="#"/>

        <bouton
        txt="Commander" 
        url="#"/>

        <bouton
        txt="Contact" 
        url="#"/>

        <bouton
        txt="Mentions Légales" 
        url="#"/>

    </div>
</div>

    <form action="https://google.com/" method="GET" class="flex flex-col bg-Default/me/Gris p-6 my-10   "
            x-data="{ q:'', }" 
            x-on:submit="q = q + ' site:mmimontbeliard.com'">
        <input type="text" class="border bg-white border-Default/me/Noir shadow-contact" placeholder="Rechercher" id="q" name="q" x-model="q">
        <button type="submit" class="bg-jaune2 hover:bg-violet2 hover:text-white rounded-full px-8 py-4 my-5">Rechercher</button>
    </form>
    
    <hr class="py-4"/>


</template>

<script>
import logo from "../components/icones/logo_bug.vue"
import bouton from "../components/bouton.vue"

export default {
  components:{ logo, bouton }
};

</script>
