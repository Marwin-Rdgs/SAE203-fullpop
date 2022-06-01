<template>

<h1>Contact me</h1>

<form action="" class="flex justify-center">
  <div>
    <label for="">Prénom</label>
    <div class="bg-Violet rounded-15xl">
      <input type="text" class="bg-violet2 m-2 rounded-lg text-white placeholder:text-white focus:border-2 focus:border-jaune2" placeholder="Prénom">
    </div>

    <label for="">Nom</label>
    <div class="bg-Violet rounded-15xl">
      <input type="text" class="bg-violet2 m-2 rounded-lg text-white placeholder:text-white focus:border-2 focus:border-jaune2" placeholder="Nom">
    </div>

    <label for="">Objet</label>
    <div class="bg-Violet rounded-15xl">
      <input type="text" class="bg-violet2 m-2 rounded-lg text-white placeholder:text-white focus:border-2 focus:border-jaune2" placeholder="Objet">
    </div>

    <label for="">Message</label>
    <div class="bg-Violet rounded-15xl">
      <textarea name="" id="" cols="30" rows="3" class="bg-violet2 m-2 rounded-lg text-white focus:border-2 focus:border-jaune2">Message...</textarea>

      <button class="bg-jaune2 shadow-2xl rounded-10xl p-1 hover:bg-violet2 group my-2 mr-2" type="submit">
        <p class="group-hover:text-white"> Envoyer </p>        
      </button>
    </div>

  </div>
</form>



<div class="flex justify-center my-5">
  <bouton 
  txt="Contacter par mail"
  url="/"/>
</div>

<div class="flex justify-center mb-10 scale-75">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43142.58438341177!2d-0.5629347499999999!3d47.481896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878da00e58e9d%3A0x40d37521e0d9c30!2sAngers!5e0!3m2!1sfr!2sfr!4v1654011126310!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

</template>

<script >
import bouton from "../components/bouton.vue"

export default {
  name: "componentsView",

  components: { bouton }
};
</script>