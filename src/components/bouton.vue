<template>
<RouterLink :to="url">
    <button class="bg-jaune2 shadow-2xl shadow-Jaune rounded-10xl p-3 hover:bg-violet2 group">
    <p class="text-center text-black group-hover:text-white">
    {{txt}}
      </p>
</button>
</RouterLink>
</template>

<script>

export default {
props: {
    txt: {
      type: String,
      default: "",
    },

    url: {
        type: String,
        default: "/",
    }
}
};
</script>