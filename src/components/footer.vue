<template>
<div class="w-full bg-violet2 border-t-8 border-jaune2">
    <div class="flex gap-12">
        <nav>
            <ul>
                <RouterLink to="/festival"> <li class="text-white">A propos</li> </RouterLink>
                <RouterLink to="/contact"> <li class="text-white">Contact</li> </RouterLink>
            </ul>
        </nav>
        <div> 
            <h2 class="text-white text-center">Newsletter</h2>

            <form action="" class="bg-jaune2 p-2 rounded-3xl">
                <input type="mail" class="w-full rounded-xl" placeholder="Adresse mail">
                <RouterLink to="/newsletterpopup">
                <button class="bg-[#C3FFAE] rounded-xl mt-2 group">
                    <div class="flex">
                    M'inscrire 
                    <img src="./icones/newsletter_check.png" class="w-1/5">
                    </div>
                </button>
                </RouterLink>
            </form>
        </div>
        <div class="ml-auto">
            <h2 class="text-white">Réseaux sociaux</h2>
            <div class="flex gap-2">
                <img src="./icones/instagram.png" alt="Logo Instagram" class="w-1/3 lg:scale-50">
                <img src="./icones/youtube.png" alt="Logo Youtube" class="w-1/3 lg:scale-50">
                <img src="./icones/facebook.png" alt="Logo Facebook" class="w-1/3 lg:scale-50">
            </div>
        </div>
    </div>

   <RouterLink to="/mentionslegales"> <p class="text-white text-center">Termes et conditions | Politique de confidentialité | Politique de cookies</p> </RouterLink>
</div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>
