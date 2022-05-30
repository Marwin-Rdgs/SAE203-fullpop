<template>

<div class="w-full bg-violet2 border-b-8 border-jaune2">
    <div class="flex">
        <div class="lg:hidden">
          <MenuIcon class="w-8 cursor-pointer fill-jaune2" @click="MenuOpen = !MenuOpen" />
        </div>
        <RouterLink to="/"> <logo class="lg:scale-75 scale-50"/> </RouterLink>

        <div class="lg:hidden">
        <nav class="absolute left-0 top-16 w-full -translate-y-[200%] bg-vert pl-2 text-lg lg:relative lg:top-0 lg:w-fit lg:translate-y-0 lg:bg-transparent"
          :class="MenuOpen && 'translate-y-0'">

          <ul class="flex flex-col gap-8 py-4 font-bold uppercase text-blanc lg:flex-row">
            <RouterLink to="/lesartistes">Artistes</RouterLink>
            <RouterLink to="/programmation">programmation</RouterLink>
          </ul>
        </nav>
        </div>


        <div class="">
        <div class="flex ml-auto mr-auto gap-16 my-6">
        <RouterLink to="/programmation"> <p class="lg:text-3xl text-sm text-center text-jaune2 hover:text-white font-mono">Programme</p> </RouterLink>
        <p class="text-white text-3xl"> | </p>
        <RouterLink to="/lesartistes"> <p class="lg:text-3xl text-sm text-center text-jaune2 hover:text-white font-mono">Artistes</p> </RouterLink>
        </div></div>
        <bouton class="ml-auto my-6"
        txt="Commander un billet"
        /> 
    </div>
</div>

</template>

<script>
import logo from "./icones/logo_grand.vue"
import bouton from "./bouton.vue"
import { MenuIcon } from "@heroicons/vue/outline";

import { RouterLink, RouterView } from "vue-router";

export default {
  components:{ logo, bouton, MenuIcon },
  
  data() {
    return {
      MenuOpen: false,
    };
  },
};

</script>