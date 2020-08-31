<template>
  <tr>
    <td>{{feature.name}}</td>
    <td>
      <input
        type="number"
        v-model="feature.value"
        v-on:keyup="updateData(details, stats, feature, pvTracking, fightModifiers, ddjs, armorClass)"
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
  props: ["details", "stats", "feature", "pvTracking", "fightModifiers", "ddjs", "armorClass"],
  methods: {
    updateData: function(details,stats, feature, pvTracking, fightModifiers, ddjs, armorClass) {
      if (feature.value != "") {
        feature.totalValue = parseInt(feature.value) + parseInt(feature.breedBonus);
        feature.modifier = Math.floor((feature.totalValue - 10) / 2);
        if (feature.mastery) {
          feature.save = parseInt(fightModifiers.masteryBonus) + parseInt(feature.modifier);
        } else {
          feature.save = feature.modifier;
        }
      } else {
        feature.modifier = 0;
        feature.save = 0;
      }
      if (feature.name == "Constitution") {
        if(parseInt(details.level) == 1){
          pvTracking.maxValue = pvTracking.pvDice.value + stats.con.modifier;
        } else {
          pvTracking.maxValue = parseInt(pvTracking.pvDice.value) + ((parseInt(details.level) - 1) * (Math.round((parseInt(pvTracking.pvDice.value) + 1) / 2) + parseInt(stats.con.modifier)));
        }
      }
      if (feature.name == "Dexterite") {
        fightModifiers.initiative = feature.totalValue;
        armorClass.dexModifier = feature.modifier;
        armorClass.finalValue = tools.calculateCA(armorClass);
      }
      if(feature.name == ddjs.affectedStat) {
        ddjs.value = tools.updateDDJSValue(feature.modifier, fightModifiers.masteryBonus);
      }
      pvTracking.currentValue = pvTracking.maxValue;
    },
    initValues: function(stats, feature, pvTracking) {
      feature.value = null;
      feature.modifier = 0;
      feature.save = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>