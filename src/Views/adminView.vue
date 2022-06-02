<template>
    <template>
            <h5>Liste des Concerts</h5>
        <hr/>
        <form>
          <h6>Nouveau concert</h6>

              <span>Nom</span>
                <input type="text" class="form-control" v-model='nom' required />

              <span>Bio</span>
                <input type="text" class="form-control" v-model='bio' required />

              <span>Nombre de place</span>
                <input type="text" class="form-control" v-model='nb_place' required />

              <span>Statut (assis ?)</span>
                <input type="text" class="form-control" v-model='statut' required />

            <button type="button" @click='createPays()' title="Création">
                
              <i class="fa fa-save fa-lg"></i>
            </button>
          
        </form>

        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="float-left">Liste des Pays actuels</div>                          
                          <span class="float-right">
                            <div class="input-group" >
                                <div class="input-group-prepend">
                                  <span class="input-group-text" >Filtrage</span>
                                </div>
                                <input type="text" class="form-control" v-model="filter" />
                                <button class="btn btn-light" type="button"  title="Filtrage">
                                  <i class="fa fa-search fa-lg"></i>
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          <form 
                            v-for="pays in filterByName" :key="pays.id">
                            <div class="input-group" >
                              <div class="input-group-prepend">
                                <span class="input-group-text">Nom</span>
                              </div>
                              <input type="text" class="form-control" v-model='pays.nom' required />
                              <button class="btn btn-light" type="button"  @click="updatePays(pays)" title="Modification">
                                <i class="fa fa-save fa-lg"></i>
                              </button>
                              <button class="btn btn-light" type="button" @click="deletePays(pays)" title="Suppression">
                                <i class="fa fa-trash fa-lg"></i>
                              </button>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


export default {
  name:'ListeView',
  data() {
    return {
      listePays:[],  // Liste des pays - collection pays Firebase
      nom:null, // Pour la création d'un nouveau pays
      filter:''
    }
  },
  computed:{
    // Tri des pays par nom en ordre croissant
    orderByName:function(){
      // Parcours et tri des pays 2 à 2
      return this.listePays.sort(function(a,b){
        // Si le nom du pays est avant on retourne -1
        if(a.nom < b.nom) return -1;
        // Si le nom du pays est après on retourne 1
        if(a.nom > b.nom) return 1;
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
        return this.orderByName.filter(function(pays){
          // On ne renvoie que les pays dont le nom contient 
          // la chaine de caractère du filtre
          return pays.nom.toLowerCase().includes(filter);
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
    this.getPays();
  },
  methods: {
    async getPays(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays= collection(firestore, "pays");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbPays, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listePays = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        console.log('listepays', this.listePays);
      })      
    },

    async createPays(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays= collection(firestore, "pays");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbPays,{
          nom: this.nom
      })
      console.log('document créé avec le id : ', docRef.id);
    },

    async updatePays(pays){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document pays
        // Reference du pays à modifier
        const docRef = doc(firestore, "pays", pays.id);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            nom: pays.nom
        }) 
      },

      async deletePays(pays){
          // Obtenir Firestore
          const firestore = getFirestore();
          // Base de données (collection)  document pays
          // Reference du pays à supprimer
          const docRef = doc(firestore, "pays", pays.id);
          // Suppression du pays référencé
          await deleteDoc(docRef);
        },

  }
}
</script>

<style scoped>
</style>



</template>