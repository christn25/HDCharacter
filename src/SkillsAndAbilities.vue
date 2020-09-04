<template>
<div>
    <abilities-list></abilities-list>
    <skills-list></skills-list>
</div>
</template>

<script>
import SkillsList from "./SkillsList.vue";
import TraitsAndAbilitiesList from "./TraitsAndAbilitiesList.vue";

export default {
    name: "skils-tab",
    components: {
        "skills-list": SkillsList,
        "abilities-list": TraitsAndAbilitiesList,
    },
    props: ["character"],
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
