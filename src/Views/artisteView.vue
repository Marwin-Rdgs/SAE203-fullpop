<template>

<!-- Paramétrable avec Deleteview / ListeView (router.js) -> /deleteparticipants/:id -->
<!-- = Contenu paramétrable selon l'id -->

<div class="grid lg:grid-cols-2 mb-44 mt-20 gap-x-10">
    <profil 
    :nom="artiste.nom_artiste"
    genre="Pop Française"
    :portrait="artiste.img_artiste"
    
    instagram="#"
    facebook="#"
    youtube="#"/>
    <div>
        <h1>Angèle</h1>
        <p>Angèle Van Laeken naît le 3 décembre 1995 à Uccle en Belgique, commune bourgeoise du sud de la région de Bruxelles-Capitale. Elle est la fille du chanteur Marka et de la comédienne Laurence Bibot (fondateurs du duo pop-rock-électro Monsieur et Madame), et la sœur du rappeur Roméo Elvis... <br>
            <a href="#"> <span class="text-Violet text-sm"> Voir Plus... </span> </a>
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

    import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    deleteObject,
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'

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
        },
        refArtist:null,
      }
    },
    mounted(){
      this.getartiste(this.$route.params.id);
    },
    methods:{
      async getArtiste(id_artiste){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artiste", artiste.id_artiste);
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