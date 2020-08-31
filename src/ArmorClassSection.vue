<template>
  <div>
    <div>
      <thead>
        <tr>
          <th>Armure</th>
          <th></th>
          <th>Bouclier</th>
          <th></th>
          <th>Modificateur de DEX</th>
          <th></th>
          <th>Bonus magique</th>
          <th></th>
          <th>CA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{armorClass.armorBonus}}</td>
          <td>+</td>
          <td>{{armorClass.shieldBonus}}</td>
          <td>+</td>
          <td>{{armorClass.dexModifier}}</td>
          <td>+</td>
          <td>
            <input
              type="number"
              v-model="armorClass.magicBonus"
              v-on:click="initValues(armorClass)"
              v-on:keyup="updateCA(armorClass)"
            />
          </td>
          <td>=</td>
          <td>{{armorClass.finalValue}}</td>
        </tr>
      </tbody>
    </div>
    <div>
      <label>Résistances</label>
      <ul>
        <li v-for="(resistance,index) in armorClass.resistances" :key="index">
          {{resistance}}
          <button v-on:click="deleteElement(resistance, armorClass.resistances)">-</button>
        </li>
      </ul>
      <div>
        <input type="text" v-model="newResistance" />
        <button v-on:click="addElement(newResistance, armorClass.resistances)">+</button>
      </div>
    </div>
    <div>
      <label>Vulnérabilités</label>
      <ul>
        <li v-for="(vulnerability,index) in armorClass.vulnerabilities" :key="index">
          {{vulnerability}}
          <button
            v-on:click="deleteElement(vulnerability, armorClass.vulnerabilities)"
          >-</button>
        </li>
      </ul>
      <div>
        <input type="text" v-model="newVulnerability" />
        <button v-on:click="addElement(newVulnerability, armorClass.vulnerabilities)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "armor-class",
  props: ["armorClass", "armorList"],
  methods: {
    initValues: function (armorClass) {
      if (this.oldFinalValue == null) {
        this.oldFinalValue = armorClass.finalValue;
      }
      armorClass.magicBonus = null;
    },
    updateCA: function (armorClass) {
      if (armorClass.magicBonus != "") {
        armorClass.finalValue =
          parseInt(this.oldFinalValue) + parseInt(armorClass.magicBonus);
      } else {
        armorClass.finalValue = this.oldFinalValue;
        armorClass.magicBonus = 0;
      }
    },
    addElement: function (newElement, elementType) {
      if (newElement != "") {
        elementType.push(newElement);
        this.newResistance = '';
        this.newVulnerability = '';
      }
    },
    deleteElement: function (element, elementType) {
      elementType.splice(elementType.indexOf(element), 1);
    },
  },
  data() {
    return {
      oldFinalValue: null,
      newResistance: "",
      newVulnerability: "",
    };
  },
};
</script>

<style lang="scss" scoped>
td,
td.input {
  text-align: center;
}
</style>