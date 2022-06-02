<template>

    <header1 />

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