<template>
    <div class="mt-12 px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 relative mb-64">
        <div>
            <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1" @submit.prevent="onCnx">
            <fieldset class="contents">
              <legend class="my-1 border-b-2 col-span-full">Se connecter</legend>
              <label >Email :</label>
              <input type="email" class="rounded-sm border-2 text-black"  v-model="user.email" required>
              <label >Password : </label>
              <input class="rounded-sm border-2 text-black" type="password" v-model="user.password" required/>
             
                  <button type="submit">Se Connecter</button>
                  <button type="button" @click="onDcnx()">Se Déconnecter</button>
             
             
            </fieldset>
          </form>
          <p class="w-full text-center py-3 bg-yellow-100 rounded-sm mt-5 text-black">{{message}}</p>
        </div>
        <div>
            <form class="grid grid-cols-[minmax(max-content,8rem)_minmax(10rem,35rem)] gap-1 " @submit.prevent="onCreate">
                <fieldset class="contents">
                    <legend class="my-1 border-b-2 col-span-full">Créer un compte</legend>
                    <label>Login :</label>
                    <input type="text" class="rounded-sm border-2 text-black" v-model="user.login">
                    <label>Email :</label>
                    <input type="email" class="rounded-sm border-2 text-black" v-model="user.email">
                    <label>Password : </label>
                    <input type="password" class="rounded-sm border-2 text-black" v-model="user.password">
                    <label>Répéter le Password : </label>
                    <input class="rounded-sm border-2 text-black" type="password" v-model="password2"/>
                    <button type="submit" >Créer</button>    
                </fieldset>
            </form>
           
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
                    console.log("user pas connecter")
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
 
<style>
 
</style>
 

