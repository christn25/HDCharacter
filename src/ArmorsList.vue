<template>
<div>
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Classe d'armure</th>
                <th>Désavantage</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="armor in armors">
                <armor-details v-bind:armor="armor" v-bind:armors="armors"></armor-details>
            </template>
        </tbody>
    </table>
</div>
</template>

<script>
import ArmorDetails from './ArmorDetails.vue';

export default {
    name: 'armors-list',
    components: {
        'armor-details': ArmorDetails
    },
    props: ['armors'],
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
