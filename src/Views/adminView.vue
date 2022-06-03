    <template>
            <h5 class="border-b-4 text-center text-xl mb-10">Liste des Concerts</h5>

<!-- Partie Ajouter -->
    <div class="border-2 border-violet2">   
        <form>
          <h6 class="text-sm">Nouveau concert</h6>
           <div class="lg:flex lg:gap-x-4">

            <div class="flex gap-x-2 mb-2">
              <span>Id</span>
                <input type="number" class="border-2" v-model='id_concert' required />
            </div>

            <div class="flex gap-x-2 mb-2">
              <span>Nom</span>
                <input type="text" class="border-2" v-model='nom_concert' required/>
            </div>
            <div class="flex gap-x-2 mb-2">
              <span>Bio</span>
                <input type="text" class="border-2" v-model='bio_concert' required />
            </div>

            <div class="flex gap-x-2 mb-2">
              <span>Nombre de place</span>
                <input type="number" class="border-2" v-model='nb_place' required />
            </div>

            <div class="flex gap-x-2 mb-2">
              <span>Statut (assis ?)</span>
                <input type="checkbox" class="border-2" v-model='statut' required />
            </div>
            </div>

            <button type="button" @click='createconcert()' title="Création" class="border-2 border-violet2 rounded-full mb-2">
                 <add class="scale-50" />
            </button>    
        </form>

</div>

<!-- Partie Actuel (Modification / Suppression & Filtrage) -->

<div class="border-2 border-violet2 mt-10 mb-64">
            <table>
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="flex gap-x-10 mb-4 border-b-2 border-r-2 border-violet2">
                              <h6 class="text-sm">Liste des Concerts actuels</h6>                         
                          <span class="flex gap-x-2">
                                  <span>Filtrage</span>
                                    <input type="text" class="border-2" v-model="filter" />

                                <button type="button"  title="Filtrage">
                                  Filtrer
                                </button>
                          </span>
                          </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          <form 
                            v-for="concert in filterByName" :key="concert.nom_concert" class="border-b-2 flex gap-x-4"> 

                                <span class="input-group-text">Nom</span>
                              <input type="text" class="border-2" v-model='concert.nom_concert' required />

                                <!-- Ne Marche pas -->
                              <button type="button"  @click="updateconcert(concert)" title="Modification">
                                Modification
                              </button>


                                <!-- Ne marche pas -->
                              <button class="btn btn-light" type="button" @click="deleteconcert(concert)" title="Suppression">
                                Supprimer
                              </button>

                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
</div>

<!-- Ajouter les artistes ? -->

</template>

<script>
// Les icônes
import add from "../components/icones/add.vue"

// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot 
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'


export default {
  data() {
    return {
      listeconcert:[],  // Liste des pays - collection pays Firebase
      nom:null, // Pour la création d'un nouveau pays
      filter:''
    }
  },
  
  computed:{
    // Tri des pays par nom en ordre croissant
    orderByName:function(){
      // Parcours et tri des pays 2 à 2
      return this.listeconcert.sort(function(a,b){
        // Si le nom du pays est avant on retourne -1
        if(a.nom_concert < b.nom_concert) return -1;
        // Si le nom du pays est après on retourne 1
        if(a.nom_concert > b.nom_concert) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName:function(){
      // On effectue le fitrage seulement si le filtre est rnseigné
      if(this.filter.length > 0){
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function(concert){
          // On ne renvoie que les pays dont le nom contient 
          // la chaine de caractère du filtre
          return concert.nom_concert.toLowerCase().includes(filter);
        })
      }else{
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    }
  },
  mounted(){ // Montage de la vue
    // Appel de la liste des pays synchronisée
    this.getconcert();
  },
  methods: {
    async getconcert(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbconcert= collection(firestore, "concert");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbconcert, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeconcert = snapshot.docs.map(doc => ({id_concert:doc.id_concert, ...doc.data()}));
        console.log('listeconcert', this.listeconcert);
      })      
    },

    async createconcert(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbconcert= collection(firestore, "concert");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbconcert,{
          nom_concert: this.nom_concert,
          bio_concert: this.bio_concert,
          nb_place: this.nb_place,
          statut: this.statut,
          id_concert : this.id_concert,
          
      })
      console.log('document créé avec le id : ', docRef.id_concert);
    },

    async updateconcert(concert){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "concert", concert.nom_concert);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            nom_concert: concert.nom_concert
        }) 
      },

      async deleteconcert(concert){
          // Obtenir Firestore
          const firestore = getFirestore();
          // Base de données (collection)  document pays
          // Reference du pays à supprimer
          const docRef = doc(firestore, "concert", concert.nom_concert);
          // Suppression du pays référencé
          await deleteDoc(docRef);
        },

  },

    components: { add }
}
</script>