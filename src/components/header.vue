<template>

  <nav>
      <!-- Menu bureau -->
      <div class="bg-violet2 border-b-8 border-jaune2">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between">
                <!-- Bouton menu -->
                <div class="ipad_pro:hidden flex items-center">
                    <button @click="menuVisible = !menuVisible" class=" py-5 px-2 "> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-jaune2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <!-- Menu -->
                <div class="flex space-x-4">
                    <!-- Logo -->
                    <div class="flex">
                        <RouterLink to="/"><logo class="w-1/2"/></RouterLink>
                    </div>
                    <!-- Menu -->
                    <div class="hidden text-white ipad_pro:flex items-center space-x-20">
                        <RouterLink class="py-5 px-2 hover:text-white text-jaune2 text-sm" to="/programmation">Programme</RouterLink>
                        <p>|</p>
                        <RouterLink class="py-5 px-2 hover:text-white text-jaune2 text-sm" to="/lesartistes">Artistes</RouterLink>
                    </div>
                </div>
                <div class="hidden text-white ipad_pro:flex items-center space-x-1">
                    <RouterLink to="/"> 
                    <bouton 
                    txt="Commander un ticket"
                    url="#"/>
                    </RouterLink>
                </div>


                
            </div>
        </div>
      </div>
      <!-- Menu mobile -->
      <div class="text-white bg-violet2 border-b-8 border-jaune2 ipad_pro:hidden" :class="{hidden: menuVisible}">
        <RouterLink class="block py-2 px-4 hover:text-white" to="/programmation" @click="menuVisible = !menuVisible">Programme</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-white" to="/lesartistes" @click="menuVisible = !menuVisible">Artistes</RouterLink>
        <div class="mb-4"><RouterLink to="/"> <bouton txt="Commander un ticket" url="#" @click="menuVisible = !menuVisible"/> </RouterLink></div>
      </div>
  </nav>

</template>

<script>
import logo from "./icones/logo_grand.vue"
import bouton from "./bouton.vue"

import { RouterLink, RouterView } from "vue-router";

export default {
  components:{ logo, bouton},
};
</script>

<script setup>
import {ref} from 'vue';
const menuVisible = ref(true);
</script>