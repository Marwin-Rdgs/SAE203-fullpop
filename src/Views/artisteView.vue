<template>

<div class="grid lg:grid-cols-2 mb-44 mt-20 gap-x-10">
    <profil 
    nom="Angèle"
    genre="Pop Française"
    :portrait="angele"
    
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

import angele from "../assets/img/chanteurs/angele.jpg"
import amir from "../assets/img/chanteurs/amir.jpg"
import lisa from "../assets/img/chanteurs/lisa.jpg"
import akb48 from "../assets/img/chanteurs/AKB48.jpg"
import bts from "../assets/img/chanteurs/BTS.jpg"
import loona from "../assets/img/chanteurs/Loona.jpg"

export default {

      data: function() {
    return {
    angele,
    amir,
    lisa,
    akb48,
    bts,
    loona,
    }
  },

    components:{ profil }
};

</script>