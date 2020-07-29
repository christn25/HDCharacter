<template>
  <div>
    <div>
      <input type="text" v-model="details.name" placeholder="Nom" />
    </div>
    <div>
      <input
        type="number"
        v-model="details.level"
        placeholder="Niveau"
        min="1"
        v-on:keyup="updateMasteryValue(details, stats, pvTracking, fightModifiers)"
        v-on:click="initLevel(details)"
      />
    </div>
    <div>
      <select
        id="char-breed"
        v-model="details.breed"
        v-on:change="changeBreed(details.breed, stats)"
      >
        <option value>Race</option>
        <option value="demi_elfe">Demi-elfe</option>
        <option value="demi_orc">Demi-orc</option>
        <option value="elfe">Elfe</option>
        <option value="gnome">Gnome</option>
        <option value="halfelin">Halfelin</option>
        <option value="humain">Humain</option>
        <option value="nain">Nain</option>
        <option value="aasimar">Aasimar</option>
        <option value="demi_ogre">Demi-ogre</option>
        <option value="felys">Félys</option>
        <option value="homme_serpent">Homme serpent</option>
        <option value="sangdragon">Sangdragon</option>
        <option value="tieffelin">Tieffelin</option>
      </select>
    </div>
    <div>
      <select
        id="char-class"
        v-model="details.class"
        v-on:change="changeClass(details, stats, pvTracking, ddjs, fightModifiers)"
      >
        <option value>Classe</option>
        <option value="barbare">Barbare</option>
        <option value="barde">Barde</option>
        <option value="clerc">Clerc</option>
        <option value="druide">Druide</option>
        <option value="ensorceleur">Ensorceleur</option>
        <option value="guerrier">Guerrier</option>
        <option value="magicien">Magicien</option>
        <option value="moine">Moine</option>
        <option value="paladin">Paladin</option>
        <option value="rodeur">Rôdeur</option>
        <option value="roublard">Roublard</option>
        <option value="sorcier">Sorcier</option>
      </select>
    </div>
  </div>
</template>

<script>
import tools from "./lib/tools.js";

export default {
  name: "character-details",
  props: ["details", "stats", "pvTracking", "fightModifiers", "ddjs"],
  methods: {
    changeBreed: function (breed, stats) {
      for (var stat in stats) {
        stats[stat].breedBonus = 0;
      }
      switch (breed) {
        case "demi_elfe":
          stats.cha.breedBonus = 2;
          break;
        case "demi_orc":
          stats.for.breedBonus = 2;
          stats.con.breedBonus = 1;
          break;
        case "elfe":
          stats.dex.breedBonus = 2;
          break;
        case "gnome":
          stats.int.breedBonus = 2;
          break;
        case "halfelin":
          stats.dex.breedBonus = 2;
          break;
        case "humain":
          for (var stat in stats) {
            stats[stat].breedBonus = 1;
          }
          break;
        case "nain":
          stats.con.breedBonus = 2;
          break;
        case "aasimar":
          stats.sag.breedBonus = 1;
          stats.cha.breedBonus = 2;
          break;
        case "demi_ogre":
          stats.for.breedBonus = 1;
          stats.con.breedBonus = 2;
          break;
        case "felys":
          stats.dex.breedBonus = 2;
          stats.sag.breedBonus = 1;
          break;
        case "homme_serpent":
          stats.sag.breedBonus = 2;
          stats.cha.breedBonus = 1;
          break;
        case "sangdragon":
          stats.for.breedBonus = 2;
          stats.cha.breedBonus = 1;
          break;
        case "tieffelin":
          stats.int.breedBonus = 1;
          stats.cha.breedBonus = 2;
          break;
      }
    },
    changeClass: function (details, stats, pvTracking, ddjs, fightModifiers) {
      for (var stat in stats) {
        stats[stat].mastery = false;
        pvTracking.pvDice.value = null;
        pvTracking.maxValue = 0;
        ddjs.value = null;
        ddjs.affectedValue = "";
      }
      switch (details.class) {
        case "barbare":
          stats.for.mastery = true;
          stats.con.mastery = true;
          pvTracking.pvDice.value = 12;
          break;
        case "barde":
          stats.dex.mastery = true;
          stats.cha.mastery = true;
          pvTracking.pvDice.value = 8;
          ddjs.value = tools.updateDDJSValue(
            stats.cha.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Charisme";
          break;
        case "clerc":
          stats.sag.mastery = true;
          stats.cha.mastery = true;
          pvTracking.pvDice.value = 8;
          ddjs.value = tools.updateDDJSValue(
            stats.sag.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Sagesse";
          break;
        case "druide":
          stats.int.mastery = true;
          stats.sag.mastery = true;
          pvTracking.pvDice.value = 8;
          ddjs.value = tools.updateDDJSValue(
            stats.sag.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Sagesse";
          break;
        case "ensorceleur":
          stats.con.mastery = true;
          stats.cha.mastery = true;
          pvTracking.pvDice.value = 6;
          ddjs.value = tools.updateDDJSValue(
            stats.cha.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Charisme";
          break;
        case "guerrier":
          stats.for.mastery = true;
          stats.con.mastery = true;
          pvTracking.pvDice.value = 10;
          break;
        case "magicien":
          stats.int.mastery = true;
          stats.sag.mastery = true;
          pvTracking.pvDice.value = 6;
          ddjs.value = tools.updateDDJSValue(
            stats.int.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Intelligence";
          break;
        case "moine":
          stats.for.mastery = true;
          stats.dex.mastery = true;
          pvTracking.pvDice.value = 8;
          break;
        case "paladin":
          stats.sag.mastery = true;
          stats.cha.mastery = true;
          pvTracking.pvDice.value = 10;
          ddjs.value = tools.updateDDJSValue(
            stats.cha.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Charisme";
          break;
        case "rodeur":
          stats.for.mastery = true;
          stats.dex.mastery = true;
          pvTracking.pvDice.value = 10;
          ddjs.value = tools.updateDDJSValue(
            stats.sag.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Sagesse";
          break;
        case "roublard":
          stats.dex.mastery = true;
          stats.int.mastery = true;
          pvTracking.pvDice.value = 8;
          break;
        case "sorcier":
          stats.sag.mastery = true;
          stats.cha.mastery = true;
          pvTracking.pvDice.value = 8;
          ddjs.value = tools.updateDDJSValue(
            stats.cha.modifier,
            fightModifiers.masteryBonus
          );
          ddjs.affectedStat = "Charisme";
          break;
      }
      if (parseInt(details.level) == 1) {
        pvTracking.maxValue = pvTracking.pvDice.value + stats.con.modifier;
      } else {
        pvTracking.maxValue =
          parseInt(pvTracking.pvDice.value) +
          (parseInt(details.level) - 1) *
            (Math.round((parseInt(pvTracking.pvDice.value) + 1) / 2) +
              parseInt(stats.con.modifier));
      }
    },
    updateMasteryValue: function (details, stats, pvTracking, fightModifiers) {
      pvTracking.pvDice.nbDice = details.level;
      if (details.level > 1) {
        pvTracking.maxValue =
          parseInt(pvTracking.pvDice.value) +
          (parseInt(details.level) - 1) *
            (Math.round((parseInt(pvTracking.pvDice.value) + 1) / 2) +
              parseInt(stats.con.modifier));
      }
      if (details.level <= 4) {
        fightModifiers.masteryBonus = 2;
      } else if (details.level <= 8) {
        fightModifiers.masteryBonus = 3;
      } else if (details.level <= 12) {
        fightModifiers.masteryBonus = 4;
      } else if (details.level <= 16) {
        fightModifiers.masteryBonus = 5;
      } else if (details.level <= 16) {
        fightModifiers.masteryBonus = 6;
      }
    },
    initLevel: function (details) {
      details.level = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>