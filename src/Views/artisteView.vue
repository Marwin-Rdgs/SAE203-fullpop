<template>

<div class="grid lg:grid-cols-2 mb-44 mt-20 gap-x-10">
    <profil 
    :nom="artiste.nom_artiste"
    :genre="artiste.genre_artiste" 
    :portrait="artiste.img_artiste"
    
    :instagram="artiste.instagram_artiste"
    :facebook="artiste.facebook_artiste"
    :youtube="artiste.youtube"/>
    <div>
        <h1>{{ artiste.nom_artiste }}</h1>
        <p>{{ artiste.bio_artiste }}<br>
            <a :href="artiste.wiki_artiste"> <span class="text-Violet text-sm"> Voir Plus... </span> </a>
        </p>
    </div>

</div>

</template>

<script>
import profil from "../components/profilartiste.vue"

import {
    getFirestore,   // Obtenir le Firestore
    collection,     // Utiliser une collection de documents
    doc,            // Obtenir un document par son id
    getDocs,        // Obtenir la liste des documents d'une collection
    getDoc,
    
    addDoc,         // Ajouter un document à une collection
    updateDoc,      // Mettre à jour un document dans une collection
    deleteDoc,      // Supprimer un document d'une collection
    onSnapshot,     // Demander une liste de documents d'une collection, en les synchronisant
    query,          // Permet d'effectuer des requêtes sur Firestore
    orderBy         // Permet de demander le tri d'une requête query
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'

export default {

   data(){
      return{
        artiste:{
            nom_artiste:null,
            bio_artiste:null,
            img_artiste:null,
            wik_artiste:null,
            instagram_artiste:null,
            facebook_artiste:null,
            youtube_artiste:null,
            genre_artiste: null,
        },
        refArtist:null,
      }
    },
    mounted(){
        console.log
      this.getartiste(this.$route.params.id);
    },
    methods:{
      async getArtiste(id_artiste){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artiste", artiste.id);
          this.refArtist = await getDoc(docRef);
          if(this.refArtist.exists()){
              this.artiste = this.refArtist.data();
              this.photoActuelle = this.artiste.img;
          }else{
              //this.console.log("artiste inexistant");
          }
      },
    },

    components:{ profil }
};

</script>