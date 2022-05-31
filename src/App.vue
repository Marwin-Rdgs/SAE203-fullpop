<template>

    <header1 />

    <RouterLink to="/components">Liste des composants</RouterLink> |
    <RouterLink to="/"> Home</RouterLink> |
    <RouterLink to="/mentionslegales"> Mentions Legales</RouterLink> |
    <RouterLink to="/festival"> Le Festival</RouterLink> |
    <RouterLink to="/contact"> Contact </RouterLink> |
    <RouterLink to="/programmation"> Programmation </RouterLink> |
    <RouterLink to="/lesartistes"> Les artistes </RouterLink> |
    <RouterLink to="/artiste"> L'artiste </RouterLink> |
    <RouterLink to="/concert"> Concert </RouterLink> |

    <RouterView />
    

<footer1/>
</template>


<script>
import header1 from "./components/header.vue";
import footer1 from "./components/footer.vue";

export default {
  name: "App",

  components:{ header1, footer1 }
};
</script>