<template>
                <!-- Ne reste pas connecté sur les autres pages -->
    <div class="mt-12 px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 relative mb-20">
        <div>
            <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1" @submit.prevent="onCnx">
            <fieldset class="contents">
              <legend class="my-1 border-b-2 col-span-full mb-4">Se connecter</legend>
              <label >Mail :</label>
              <input type="email" class="rounded-sm border-2 text-black"  v-model="user.email" required>
              <label >Mot de passe : </label>
              <input class="rounded-sm border-2 text-black" type="password" v-model="user.password" required/>
             
                  <button type="submit" class="border-2 border-violet2 rounded-full hover:bg-violet2 hover:text-white hover:border-gray-200 p-2 mt-4">Se Connecter</button>
                  <button type="button" @click="onDcnx()" class="border-2 border-violet2 rounded-full hover:bg-violet2 hover:text-white hover:border-gray-200 p-2 mt-4">Se Déconnecter</button>
             
             
            </fieldset>
          </form>
          <p class="w-full text-center py-3 bg-Jaune bg-opacity-60 rounded-sm mt-5 text-black">{{message}}</p>
        </div>
        <div>
            <!-- L'inscription ne rajoute aucune données dans la Database où l'Authentification -->
            <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1 " @submit.prevent="onCreate">
                <fieldset class="contents">
                    <legend class="my-1 border-b-2 col-span-full mb-4">S'inscrire</legend>
                    <label>Identifiant :</label>
                    <input type="text" class="rounded-sm border-2 text-black" v-model="user.login">
                    <label>Mail :</label>
                    <input type="email" class="rounded-sm border-2 text-black" v-model="user.email">
                    <label>Mot de passe : </label>
                    <input type="password" class="rounded-sm border-2 text-black" v-model="user.password">
                    <label>Répéter le Mot de passe : </label>
                    <input class="rounded-sm border-2 text-black" type="password" v-model="password2"/>
                    <button type="submit" class="border-2 border-violet2 rounded-full hover:bg-violet2 hover:text-white hover:border-gray-200 py-2 px-4 mt-4">Créer</button> 
                </fieldset>
            </form>
           
        </div>
    </div>

<div class="grid grid-cols-2 mb-10">
    <div class="text-center">
        <h2>Compte Admin</h2>
        <p>mail : admin@gmail.com</p>
        <p>root123</p>
    </div>

    <div class="text-center">
        <h2>Compte Non-Admin</h2>
        <p>mail : test@gmail.com</p>
        <p>password123</p>
    </div>
</div>

</template>
 
<script>
//import {emitter} from '../main.js'
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
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'
export default {
    data(){
        return{
            user:{
                login:'',
                email:'',
                password:'',
            },
            password2:'',
            message:'bonjour',
            type:'password'
        }
    },
    mounted(){
        this.message = "User non connecté";
    },
    methods:{
        onCnx(){
            signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
            .then((response) =>{
                this.user = response.user;
                console.log("user", this.user);
                //emitter.emit('connectUser', {user: this.user});
                this.message = "user connecté : " + this.user.email;
            })
            .catch((error)=>{
                console.log('erreur connexion', error);
                this.message = "erreur d'authentification";
            })
        },
        onDcnx(){
            signOut(getAuth())
            .then(response =>{
                this.message = "User non connecté";
                this.user = {
                    email:null,
                    password:null
                };
               // emitter.emit('deConnectUser', {user:this.user});
            })
            .catch(error=>{
                console.log('erreur deconnexion', error);
            })
        },
        onCreate(){
            if(this.user.password===this.password2){
                createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                    .then((response) => {
                        // Signed in
                        const user = response.user;
                        // ...
                    })
                    .catch((error) => {
                        console.log('erreur création', error);
                        this.message = "erreur de création";
                        // ..
                })
               
                this.onCnx();
                onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    const uid = user.uid;
                    const firestore = getFirestore();
                    const dbUser = collection(firestore, "users");
                    const docRef = addDoc(dbUser,{
                        uid: uid,
                        admin: false,
                        login: this.user.login
                })
                console.log('document créé avec le id : ', docRef.id);
                } else {
                    console.log("user pas connecté")
                }
                });
               
            }else{
                this.message = "password pas cohérent"
                console.log('mdp mauvais')
            }
        },
    },
}
</script>