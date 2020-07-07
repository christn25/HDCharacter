<template>
  <tr>
    <td>{{feature.name}}</td>
    <td>
      <input type="number" v-model="feature.value" v-on:keyup="updateData(feature)" />
    </td>
    <td>{{feature.modifier}}</td>
    <td>{{feature.save}}</td>
    <td>
      <input type="checkbox" v-model="feature.mastery" value="1" />
    </td>
  </tr>
</template>

<script>
export default {
  name: "feature-details",
  props: ["feature"],
  methods: {
    updateData: function(stat) {
      stat.modifier = stat.value;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>