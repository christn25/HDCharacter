<template>
  <tr>
    <td>{{feature.name}}</td>
    <td>
      <input
        type="number"
        v-model="feature.value"
        v-on:keyup="updateData(details, feature, pvTracking, fightModifiers, ddjs)"
        v-on:click="initValues(stats, feature, pvTracking)"
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
import tools from "./lib/tools.js";

export default {
  name: "feature-details",
  props: ["details", "stats", "feature", "pvTracking", "fightModifiers", "ddjs"],
  methods: {
    updateData: function(details, stat, pvTracking, fightModifiers, ddjs) {
      if (stat.value != "") {
        stat.totalValue = parseInt(stat.value) + parseInt(stat.breedBonus);
        stat.modifier = Math.floor((stat.totalValue - 10) / 2);
        if (stat.mastery) {
          console.log("Je maîtrise ! " + fightModifiers.masteryBonus + " " +stat.modifier);
          stat.save = parseInt(fightModifiers.masteryBonus) + parseInt(stat.modifier);
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
      if(stat.name == ddjs.affectedStat) {
        ddjs.value = tools.updateDDJSValue(stat.modifier, fightModifiers.masteryBonus);
      }
    },
    initValues: function(stats, feature, pvTracking) {
      feature.value = null;
      feature.modifier = 0;
      feature.save = 0;
      pvTracking.maxValue = parseInt(stats.con.modifier) + parseInt(pvTracking.pvDice.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>