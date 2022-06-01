<template>
<div class="grid grid-cols-2 w-1/2">
        <div class="grid -mr-96">
            <a :href="instagram"> <img src="./icones/instagram.png" alt="" class="w-1/12"></a>
            <a :href="facebook"> <img src="./icones/facebook.png" alt="" class="w-1/12"></a>
            <a :href="youtube"> <img src="./icones/youtube.png" alt="" class="w-1/12"></a> 
        </div>

        <div>
            <img :src="portrait" alt="" class="border-r-8 border border-b-8 border-jaune2 ">
            <div class="flex justify-center">
                <h1 class="font-mono font-semibold">{{ nom }}</h1>
            </div>
            <div class="flex justify-center">
                <micro class="w-1/5"/>
                <p class="text-center font-serif">{{ genre }}</p>
            </div>
        </div>
</div>
</template>

<script>
import micro from "./icones/micro.vue"

export default {
    components:{ micro },

    props:{
        nom:{
            type: String,
        },

        portrait:{
            type: String,
        },

        genre:{
            type: String,
        },

        instagram:{
            type: String,
        },

        facebook:{
            type: String,
        },

        youtube:{
            type: String,
        },
    }
};

</script>