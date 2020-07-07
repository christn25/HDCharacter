<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Valeur</th>
          <th>Modificateur</th>
          <th>Sauvegarde</th>
          <th>Maîtrise</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="stat in stats">
          <feature-details v-bind:feature="stat"></feature-details>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import FeatureDetails from "./FeatureDetails.vue";

export default {
  name: "features-list",
  components: {
    "feature-details": FeatureDetails
  },
  props: ["stats", "ddjs"],
  methods: {
    updateData: function(stat) {
      stat.modifier = stat.value;
    }
  }
};
</script>

<style lang="scss" scoped>
table,
tr {
  border: 1px solid black;
}
</style>