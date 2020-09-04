<template>
<div>
    <armors-and-weapons v-bind:stuff="character.stuff" v-bind:armorClass="character.armorClass"></armors-and-weapons>
    <magic-stuffs v-bind:magicStuffs="character.stuff.magicStuffs"></magic-stuffs>
</div>
</template>

<script>
import ArmorsAndWeapons from "./ArmorsAndWeapons.vue";

import MagicStuffsList from "./MagicStuffsList";

export default {
    name: "stuff-tab",
    components: {
        "armors-and-weapons": ArmorsAndWeapons,
        "magic-stuffs": MagicStuffsList,
    },
    props: ["character"],
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
