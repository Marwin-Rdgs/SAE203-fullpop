<template>

    <div class="flex flex-row space-x-2">
        <h1>Nos Artistes :</h1>
        <img src="../components/icones/titleicon.png" alt="flèche vers le bas" class="scale-50 top-0 space-x-1">
    </div>

<!-- Section FR -->
<div v-for="(listeartiste, genre) in listeartisteParGenre" :key="genre">
  <div class="w-full mt-10" id="down">
    <p class="font-mono font-semibold lg:text-lg">Nos artistes de la <span class="text-violet2">{{genre}}</span></p>
    <hr class="bg-black mb-4"/>
  </div>
  
  <div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center gap-4 z-20">
  
  <card v-for="artiste in listeartiste" :key="artiste.id"
    :minia="artiste.img_artiste"
  
    :title="artiste.nom_artiste"
    :id="artiste.id_artiste"
    />
  
  </div>
</div>

</template>

<script>
import { groupBy } from "lodash";
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
    this.getartiste();
},
computed: {
  listeartisteParGenre() {
    return groupBy(this.listeartiste,"genre_artiste");
  }
},

methods:{
    async getartiste(){
        // Obtenir Firestore
        const firestore = getFirestore();
        
        // Base de données (collection) document artistes_fr
        const dbartiste = collection(firestore, "artiste");
        
        // Obtenir tous les documents de la collection concert
        // await pour attendre l'obtention des résultats
        const query = await getDocs(dbartiste);
        query.forEach((doc) => {
            let artiste = {
                id_artiste : doc.id,
                nom_artiste : doc.data().nom_artiste,
                img_artiste : doc.data().img_artiste,
                genre_artiste : doc.data().genre_artiste
            };
            this.listeartiste.push(artiste)
        });
    },
},


  data:function() {
    return {
      angele,
      amir,
      lisa,
      akb48,
      bts,
      loona,
      listeartiste:[],
    }
  },
    components:{ card, blob }
};
</script>
