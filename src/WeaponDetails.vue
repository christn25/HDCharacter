<template>
  <tr>
    <td>{{weapon.name}}</td>
    <td>{{weapon.nbDice}}D{{hasPolyProperty()}}</td>
    <td>{{weapon.damageType}}</td>
    <td>{{weapon.range}}</td>
    <td>
      <span v-for="(property, index) in weapon.properties" :key="index">{{getProperties(property)}}<span v-if="index != Object.keys(weapon.properties).length - 1">, </span></span>
    </td>
    <td>
      <textarea v-model="weapon.description"/>
    </td>
    <td>
      <div>
        <input type="checkbox" v-on:change="manageSilver()"/>
      </div>
    </td>
    <td>
      <button v-on:click="deleteWeapon(weapon)">-</button>
    </td>
  </tr>
</template>

<script>
import WeaponsJSON from "./data/weapons.json";

export default {
  name: "weapon-details",
  props: ["weapon", "weapons"],
  methods: {
    deleteWeapon: function (weapon) {
      this.selectedWeapon = null;
      this.weapons.splice(this.weapons.indexOf(weapon), 1);
    },
    getProperties: function (property) {
      return this.weaponsJson[0].weaponProperties.find(
        (elt) => elt.id == property
      ).name;
    },
    manageSilver: function () {
      if(this.weapon.properties.find((elt) => elt == 12)) {
        this.weapon.properties.splice(this.weapon.properties.indexOf(12), 1);
      } else {
        this.weapon.properties.push(12);
      }
    },
    hasPolyProperty: function () {
      if (this.weapon.properties.find((elt) => elt == 8)) {
        return this.weapon.damage + 2;
      } else {
        return this.weapon.damage;
      }
    }
  },
  data() {
    return {
      weaponsJson: WeaponsJSON,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
