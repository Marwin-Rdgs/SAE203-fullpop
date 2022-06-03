<template>
<note class="absolute w-80 left-1/2"/>

    <div class="grid lg:grid-cols-3 grid-cols-2 mt-4">
        <frise class="lg:ml-2 lg:h-1/3 h-1/2"/>
        <ul>
            <!-- Section Pop Française -->
            <li v-for="concert in listeconcert" :key="concert.id" 
            class="mb-16"> <div class="group hover:shadow-2xl hover:scale-105 ml-auto mr-auto">
                <div class="bg-opacity-40 bg-Jaune p-11">
                    <h2 class="z-2 flex-grow-0 flex-shrink-0 mb-4">{{ concert.nom_concert }}</h2>
                    <p class="z-2 text-xs">{{ concert.bio_concert }}</p>
                    <RouterLink :to="{name:'concertView', params: {id}}" :id="concert.id_concert">
                        <button class="ml-auto border-2 py-2 px-4 rounded-full border-violet2 text-violet2 mt-2">Voir plus</button>
                    </RouterLink>
                </div>
            </div> </li>

<note class="absolute w-80 -left-0 lg:top-10 -top-32"/>      

<note class="absolute w-80 left-96"/>

        </ul>     
    </div>
</template>

<script>
import frise from "../components/icones/frise.vue"
import fond from "../components/icones/fondprog.vue"
import note from "../components/icones/notemusic.vue"

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

data(){ // Données de la vue
return{
    listeconcert:[]
    }
},

mounted(){
    // Appel de la liste des concerts
    this.getconcert();
},

methods:{
    async getconcert(){
        // Obtenir Firestore
        const firestore = getFirestore();
        
        // Base de données (collection) document concert
        const dbconcert = collection(firestore, "concert");
        
        // Obtenir tous les documents de la collection concert
        // await pour attendre l'obtention des résultats
        const query = await getDocs(dbconcert);
        query.forEach((doc) => {
            let concert = {
                id_concert : doc.id,
                nom_concert : doc.data().nom_concert,
                bio_concert : doc.data().bio_concert,
            }
            this.listeconcert.push(concert);
        });
    }
},

    components:{ frise, fond, note },

    props:{
        id: {
            type : String,
        }
    },
};
</script>