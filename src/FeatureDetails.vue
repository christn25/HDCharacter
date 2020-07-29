<template>
  <tr>
    <td>{{feature.name}}</td>
    <td>
      <input
        type="number"
        v-model="feature.value"
        v-on:keyup="updateData(details, feature, pvTracking, masteryBonus)"
        v-on:click="initValues(details, feature, pvTracking, masteryBonus)"
        min="0"
      />
    </td>
    <td>{{feature.breedBonus}}</td>
    <td>{{feature.modifier}}</td>
    <td>{{feature.totalValue}}</td>
    <td>{{feature.save}}</td>
    <td>
      <input type="checkbox" v-model="feature.mastery" value="1" />
    </td>
  </tr>
</template>

<script>
export default {
  name: "feature-details",
  props: ["details", "feature", "pvTracking", "masteryBonus"],
  methods: {
    updateData: function(details, stat, pvTracking, masteryBonus) {
      if (stat.value != "") {
        stat.totalValue = parseInt(stat.value) + parseInt(stat.breedBonus);
        stat.modifier = Math.floor((stat.totalValue - 10) / 2);
        if (stat.mastery) {
          stat.save = parseInt(masteryBonus) + parseInt(stat.modifier);
        } else {
          stat.save = stat.modifier;
        }
      } else {
        stat.modifier = 0;
        stat.save = 0;
      }
      if (stat.name == "Constitution") {
        pvTracking.maxValue = parseInt(pvTracking.pvDice.value) + parseInt(stat.modifier) + ((Math.round((parseInt(pvTracking.pvDice.value) + 1) / 2)) * ((parseInt(details.level)) - 1));
      }
    },
    initValues: function(stat, pvTracking) {
      console.log(stat);
      stat.value = null;
      stat.modifier = 0;
      stat.save = 0;
      pvTracking.maxValue = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>