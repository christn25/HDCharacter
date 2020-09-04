<template>
<div>
    <h2>Objets Magiques</h2>
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="stuff in magicStuffs">
                <magic-stuff-details v-bind:stuff="stuff"></magic-stuff-details>
            </template>
        </tbody>
    </table>
</div>
</template>

<script>
import MagicStuffDetails from './MagicStuffDetails.vue'

export default {
    name: 'magic-stuffs',
    components: {
        'magic-stuff-details': MagicStuffDetails
    },
    props: ['magicStuffs'],
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
