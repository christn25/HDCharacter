<template>
<div>
    <div>
        <h1>Inventaire</h1>
    </div>
    <hr />
    <div>
        <h2>Armes</h2>
        <weapons v-bind:weapons="character.stuff.weapons"></weapons>
    </div>
    <hr />
    <div>
        <h2>Armures</h2>
        <armor v-bind:armor="character.stuff.armor" v-bind:armorClass="character.armorClass"></armor>
    </div>
    <hr />
    <div>
        <magic-stuffs v-bind:magicStuffs="character.stuff.magicStuffs"></magic-stuffs>
    </div>
    <hr />
</div>
</template>

<script>
import ArmorDetails from "./ArmorDetails.vue";
import WeaponsList from "./WeaponsList.vue";
import MagicStuffsList from "./MagicStuffsList";

export default {
    name: "stuff-tab",
    components: {
        "weapons": WeaponsList,
        "armor": ArmorDetails,
        "magic-stuffs": MagicStuffsList,
    },
    props: ["character"],
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>
