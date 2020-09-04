<template>
<div></div>
</template>

<script>
import SpellDetails from "./SpellDetails.vue";

export default {
    name: "spells-list",
    components: {
        "spell-details": SpellDetails,
    },
    props: ["character"],
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
