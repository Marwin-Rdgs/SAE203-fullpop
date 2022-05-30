<template>

<div class="w-full bg-violet2 border-b-8 border-jaune2">
    <div class="flex">
        <RouterLink to="/"> <logo class="scale-75"/> </RouterLink>
        <div class="flex ml-auto mr-auto gap-16 my-6">
        <RouterLink to="/programmation"> <p class="text-3xl text-center text-jaune2 hover:text-white font-mono">Programme</p> </RouterLink>
        <p class="text-white text-3xl"> | </p>
        <RouterLink to="/lesartistes"> <p class="text-3xl text-center text-jaune2 hover:text-white font-mono">Artistes</p> </RouterLink>
        </div>
        <bouton class="ml-auto my-6"
        txt="Commander un billet"
        />
    </div>
</div>

</template>

<script>
import logo from "./icones/logo_grand.vue"
import bouton from "./bouton.vue"

import { RouterLink, RouterView } from "vue-router";

export default {
  components:{ logo, bouton }
};

</script>