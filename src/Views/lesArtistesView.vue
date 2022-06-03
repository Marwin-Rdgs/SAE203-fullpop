<template>

<blob class="absolute right-0 z-0"/>
    <div class="flex flex-row space-x-2">
        <h1>Nos Artistes :</h1>
        <img src="../components/icones/titleicon.png" alt="flèche vers le bas" class="scale-50 top-0 space-x-1">
    </div>

<!-- Section FR -->
<div class="w-full mt-10" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos artistes de la <span class="text-violet2">Pop française</span></p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center gap-4 z-20">

<card v-for="artistefr in listeartistefr" :key="artistefr.id"
  :minia="artistefr.img_artistefr"

  :title="artistefr.nom_artistefr"
  :url="artistefr.url_artistefr"/>

</div>


<!-- Section JPOP -->
<div class="w-full mt-10" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos artistes de la <span class="text-violet2">Pop Japonaise</span></p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center gap-4">

<card v-for="artistejap in listeartistejap" :key="artistejap.id"
  :minia="artistejap.img_artistejap"
  :title="artistejap.nom_artistejap"
  :url="artistejap.url_artistejap"/>

</div>

<!-- Section KPOP -->
<div class="w-full mt-10" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos artistes de la <span class="text-violet2">Pop Coréenne</span></p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center gap-4 mb-10">

<card v-for="artistekpop in listeartistekpop" :key="artistekpop.id"
  :minia="artistekpop.img_artistekpop"
  :title="artistekpop.nom_artistekpop"
  :url="artistekpop.url_artistekpop"/>

</div>

</template>

<script>
import card from "../components/cardartiste.vue"
import blob from "../components/icones/blob.vue"

import angele from "../assets/img/chanteurs/angele.jpg"
import amir from "../assets/img/chanteurs/amir.jpg"
import lisa from "../assets/img/chanteurs/lisa.jpg"
import akb48 from "../assets/img/chanteurs/AKB48.jpg"
import bts from "../assets/img/chanteurs/BTS.jpg"
import loona from "../assets/img/chanteurs/Loona.jpg"

// Bibliothèque Firestore : Import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'

export default {

  mounted(){
    // Appel de la liste des concerts
    this.getartistefr();
    this.getartistejap();
    this.getartistekpop();
},

methods:{
    async getartistefr(){
        // Obtenir Firestore
        const firestore = getFirestore();
        
        // Base de données (collection) document artistes_fr
        const dbartistefr = collection(firestore, "artistefr");
        
        // Obtenir tous les documents de la collection concert
        // await pour attendre l'obtention des résultats
        const query = await getDocs(dbartistefr);
        query.forEach((doc) => {
            let artistefr = {
                id_artistefr : doc.id,
                nom_artistefr : doc.data().nom_artistefr,
                img_artistefr : doc.data().img_artistefr,
                url_artistefr : doc.data().url_artistefr,
            };
            this.listeartistefr.push(artistefr)
        });
    },


        async getartistejap(){
        // Obtenir Firestore
        const firestore = getFirestore();
        
        // Base de données (collection) document artistes_fr
        const dbartistejap = collection(firestore, "artistejap");
        
        // Obtenir tous les documents de la collection concert
        // await pour attendre l'obtention des résultats
        const query = await getDocs(dbartistejap);
        query.forEach((doc) => {
            let artistejap = {
                id_artistejap : doc.id,
                nom_artistejap : doc.data().nom_artistejap,
                img_artistejap : doc.data().img_artistejap,
                url_artistejap : doc.data().url_artistejap,
            };
            this.listeartistejap.push(artistejap)
        });
    },


        async getartistekpop(){
        // Obtenir Firestore
        const firestore = getFirestore();
        
        // Base de données (collection) document artistes_fr
        const dbartistekpop = collection(firestore, "artistekpop");
        
        // Obtenir tous les documents de la collection concert
        // await pour attendre l'obtention des résultats
        const query = await getDocs(dbartistekpop);
        query.forEach((doc) => {
            let artistekpop = {
                id_artistekpop : doc.id,
                nom_artistekpop : doc.data().nom_artistekpop,
                img_artistekpop : doc.data().img_artistekpop,
                url_artistekpop : doc.data().url_artistekpop,
            };
            this.listeartistekpop.push(artistekpop)
        });
    }
},


  data:function() {
    return {
      angele,
      amir,
      lisa,
      akb48,
      bts,
      loona,
      listeartistefr:[],
      listeartistejap:[],
      listeartistekpop:[]
    }
  },
    components:{ card, blob }
};
</script>
