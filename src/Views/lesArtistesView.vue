<template>

<blob class="absolute right-0 z-10"/>
    <div class="flex flex-row space-x-2">
        <h1>Nos Artistes :</h1>
        <img src="../components/icones/titleicon.png" alt="flèche vers le bas" class="scale-50 top-0 space-x-1">
    </div>

<!-- Section FR -->
<div class="w-full mt-10" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos artistes de la <span class="text-violet2">Pop française</span></p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center gap-4 z-20">

<card 
  :minia="angele"
  title="Angèle"/>

<card 
  :minia="amir"
  title="Amir"/>


</div>


<!-- Section JPOP -->
<div class="w-full mt-10" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos artistes de la <span class="text-violet2">Pop Japonaise</span></p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center gap-4">

<card 
  :minia="lisa"
  title="Lisa"/>

<card 
  :minia="akb48"
  title="AKB48"/>

</div>

<!-- Section KPOP -->
<div class="w-full mt-10" id="down">
  <p class="font-mono font-semibold lg:text-lg">Nos artistes de la <span class="text-violet2">Pop Coréenne</span></p>
  <hr class="bg-black mb-4"/>
</div>

<div class="grid lg:grid-cols-3 md:grid-cols-2 place-items-stretch place-self-center gap-4">

<card 
  :minia="bts"
  title="BTS"/>

<card 
  :minia="loona"
  title="Loona"/>

</div>

</template>

<script>
import card from "../components/cardartiste.vue"
import blob from "../components/icones/blob.vue"

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
    components:{ card, blob }
};
</script>
