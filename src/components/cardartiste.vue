<template>
   
   <RouterLink :to="url">
    <div>
    <img :src="minia" alt="Photo artiste" class="w-full">
        <div class="bg-jaune2 bg-opacity-25 text-center w-full">
            <h2>{{ title }}</h2>
            <p>Cliquez pour plus d'infos</p>
        </div>
    </div>
   </RouterLink>



</template>

<script>

export default {
props: {
    title: {
      type: String,
      default: "",
    },
    minia: {
        type: String,
        default: "#",
    },
    url: {
     type: String,
     default: "#",
    },
}
};
</script>