<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Valeur</th>
          <th>Bonus de race</th>
          <th>Modificateur</th>
          <th>Valeur Totale</th>
          <th>Sauvegarde</th>
          <th>Maîtrises de sauvegarde</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="stat in stats">
          <feature-details
            v-bind:details="details"
            v-bind:stats= "stats"
            v-bind:feature="stat"
            v-bind:pvTracking="pvTracking"
            v-bind:fightModifiers="fightModifiers"
            v-bind:ddjs="ddjs"
          ></feature-details>
        </template>
      </tbody>
    </table>
    <div v-if="ddjs.value != null">Difficulté des JS : {{ddjs.value}}</div>
    <div>Points de vie : {{pvTracking.maxValue}}</div>
  </div>
</template>

<script>
import FeatureDetails from "./FeatureDetails.vue";

export default {
  name: "features-list",
  components: {
    "feature-details": FeatureDetails,
  },
  props: ["details", "stats", "ddjs", "pvTracking", "fightModifiers"],
  methods: {},
};
</script>

<style lang="scss" scoped>
table,
tr {
  border: 1px solid black;
}
</style>