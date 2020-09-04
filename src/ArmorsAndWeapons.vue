<template>
<div>
    <h1>Inventaire</h1>
    <div>
        <h2>Armes</h2>
        <weapons v-bind:weapons="stuff.weapons"></weapons>
    </div>
    <hr />
    <div>
        <h2>Armures</h2>
        <armor v-bind:armor="stuff.armor" v-bind:armorClass="armorClass"></armor>
    </div>
</div>
</template>

<script>
import ArmorDetails from "./ArmorDetails.vue";
import WeaponsList from "./WeaponsList.vue";

export default {
    name: "armors-and-weapons",
    components: {
        'armor': ArmorDetails,
        'weapons': WeaponsList
    },
    props: ["stuff", "armorClass"],
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
