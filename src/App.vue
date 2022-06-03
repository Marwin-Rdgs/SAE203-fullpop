<template>

    <header1 />
  <div class="flex justify-center mt-1">

    <bouton 
    txt="Administration"
    url="/admin"/>

  </div>
    <RouterView />
    

<footer1/>
</template>


<script>
import header1 from "./components/header.vue";
import footer1 from "./components/footer.vue";
import bouton from "./components/bouton.vue"

export default {
  name: "App",

  components:{ header1, footer1, bouton }
};
</script>