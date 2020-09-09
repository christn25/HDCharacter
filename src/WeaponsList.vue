<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Dégâts</th>
          <th>Type de dégâts</th>
          <th>Portée</th>
          <th>Propriétées</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="weapon in weapons">
          <weapon-details v-bind:weapon="weapon" v-bind:weapons="weapons"></weapon-details>
        </template>
      </tbody>
    </table>
    <div>
      <select v-model="selectedWeapon" v-on:change="addWeapon()">
        <optgroup label="Armes de CàC courantes">
          <option value="0">Bâton</option>
          <option value="1">Dague</option>
          <option value="2">Gourdin</option>
          <option value="3">Hachette</option>
          <option value="4">Javelines</option>
          <option value="5">Lance</option>
          <option value="6">Marteau léger</option>
          <option value="7">Masse d'armes</option>
          <option value="8">Massue</option>
          <option value="9">Serpe</option>
        </optgroup>
        <optgroup label="Armes à distance courantes">
          <option value="10">Arbalète légère</option>
          <option value="11">Arc court</option>
          <option value="12">Fléchettes</option>
          <option value="13">Fronde</option>
        </optgroup>
        <optgroup label="Armes de CàC de guerre">
          <option value="14">Cimeterre</option>
          <option value="15">Coutille</option>
          <option value="16">Epée à deux mains</option>
          <option value="17">Epée courte</option>
          <option value="18">Epée longue</option>
          <option value="19">Fléau</option>
          <option value="20">Fouet</option>
          <option value="21">Hache à deux mains</option>
          <option value="22">Hache d'armes</option>
          <option value="23">Hallebarde</option>
          <option value="24">Lance d'arçon</option>
          <option value="25">Marteau de guerre</option>
          <option value="26">Merlin</option>
          <option value="27">Morgenstern</option>
          <option value="28">Pic de guerre</option>
          <option value="29">Pique</option>
          <option value="30">Rapière</option>
          <option value="31">Trident</option>
        </optgroup>
        <optgroup label="Armes à distance de guerre">
          <option value="32">Arbalète de poing</option>
          <option value="33">Arbalète lourde</option>
          <option value="34">Arc long</option>
          <option value="35">Filet</option>
          <option value="36">Sarbacane</option>
        </optgroup>
      </select>
    </div>
  </div>
</template>

<script>
import WeaponDetails from "./WeaponDetails.vue";
import WeaponsJSON from "./data/weapons.json";

export default {
  name: "weapons-list",
  components: {
    "weapon-details": WeaponDetails,
  },
  props: ["weapons"],
  methods: {
    addWeapon: function () {
        var newWeapon = this.weaponsJson[0].weapons.find(
        (elt) => elt.id == this.selectedWeapon
      );
      this.weapons.push(newWeapon);
      this.selectedWeapon = null
    },
  },
  data() {
    return {
      weaponsJson: WeaponsJSON,
      selectedWeapon: null,
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
