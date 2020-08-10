<template>
  <div>
    <char-details
      v-bind:details="character.details"
      v-bind:stats="character.stats"
      v-bind:fightModifiers="character.fightModifiers"
      v-bind:pvTracking="character.pvTracking"
      v-bind:ddjs="character.ddjs"
    ></char-details>
    <hr>
    <features-list
      v-bind:details="character.details"
      v-bind:stats="character.stats"
      v-bind:ddjs="character.ddjs"
      v-bind:fightModifiers="character.fightModifiers"
      v-bind:pvTracking="character.pvTracking"
    ></features-list>
    <hr>
    <life-points v-bind:pvTracking="character.pvTracking"></life-points>
    <hr>
    <fight-modifiers
      v-bind:fightModifiers="character.fightModifiers"
      v-bind:stats="character.stats"
    ></fight-modifiers>
    <hr>
    <armor-class></armor-class>
    <hr>
    <status-section></status-section>
    <hr>
  </div>
</template>

<script>
import CharacterDetails from "./CharacterDetails.vue";
import FeaturesList from "./FeaturesList.vue";
import FightModifiers from "./FightModifiers.vue";
import ArmorClassSection from "./ArmorClassSection.vue";
import StatusSection from "./StatusSection.vue";
import LifePointsTracking from "./LifePointsTracking.vue";

export default {
  name: "character-tab",
  components: {
    "char-details": CharacterDetails,
    "features-list": FeaturesList,
    "fight-modifiers": FightModifiers,
    "armor-class": ArmorClassSection,
    "status-section": StatusSection,
    "life-points": LifePointsTracking,
  },
  props: ["character"],
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>