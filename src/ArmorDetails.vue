<template>
  <div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type</th>
            <th>Classe d'armure</th>
            <th>Désavantage</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="armor.id != null">
            <td>{{armor.name}}</td>
            <td>{{armor.type}}</td>
            <td>{{armor.ca}}</td>
            <td>{{hasDisadvantage(armor.disadvantage)}}</td>
            <td>
              <input type="textarea" v-model="armor.description" />
            </td>
            <td>
              <button v-on:click="deleteArmor(armor)">-</button>
            </td>
          </tr>
        </tbody>
        <select v-model="selectedArmor" v-on:change="replaceArmor(armor)">
          <optgroup label="Armures légères">
            <option value="0">Matelassée</option>
            <option value="1">Cuir</option>
            <option value="2">Cuir clouté</option>
          </optgroup>
          <optgroup label="Armures intermédiaires">
            <option value="3">Peau</option>
            <option value="4">Chemise de mailles</option>
            <option value="5">Ecailles</option>
            <option value="6">Cuirasse</option>
            <option value="7">Demi-plate</option>
          </optgroup>
          <optgroup label="Armures lourdes">
            <option value="8">Broigne</option>
            <option value="9">Cotte de mailles</option>
            <option value="10">Clibanion</option>
            <option value="11">Harois</option>
          </optgroup>
        </select>
      </table>
    </div>
    <div>
        <label>Bouclier</label>
        <input type="checkbox" v-model="armor.shield" v-on:change="manageShield()"/>
    </div>
  </div>
</template>

<script>
import ArmorsJSON from "./data/armors.json";
import Tools from "./lib/Tools.js";

export default {
  name: "armor-details",
  props: ["armor", "armorClass"],
  methods: {
    hasDisadvantage: function (bool) {
      if (bool) {
        return "Oui";
      } else {
        return "Non";
      }
    },
    replaceArmor: function (armor) {
      var newArmor = this.armorsJson.find(
        (elt) => elt.id == this.selectedArmor
      );
      /* this.armor = newArmor */
      armor.id = newArmor.id;
      armor.name = newArmor.name;
      armor.type = newArmor.type;
      armor.ca = newArmor.ca;
      armor.disadvantage = newArmor.disadvantage;
      armor.description = "";
      this.armorClass.armorBonus = armor.ca;
      this.armorClass.finalValue = Tools.calculateCA(this.armorClass, armor.type);
      this.selectedArmor = null;
    },
    deleteArmor: function (armor) {
      this.selectedArmor = null;
      armor.id = null;
      armor.name = "";
      armor.type = "";
      armor.ca = 0;
      armor.disadvantage = false;
      armor.description = "";
      /*   this.armor = {
                  id: null,
                  name: "",
                  type: "",
                  ca: 0,
                  disadvantage: true
              }; */
      this.armorClass.armorBonus = armor.ca;
      this.armorClass.finalValue = Tools.calculateCA(
        this.armorClass,
        armor.type
      );
    },
    manageShield: function () {
        this.armorClass.shieldBonus = 2;
        console.log(this.armor.type);
        this.armorClass.finalValue = Tools.calculateCA(this.armorClass, this.armor.type);
        console.log(this.armor.shield);
    }
  },
  data() {
    return {
      armorsJson: ArmorsJSON,
      selectedArmor: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
