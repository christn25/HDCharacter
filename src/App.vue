<template>
  <div id="app">
    <char-details
      v-bind:details="character.details"
      v-bind:stats="character.stats"
      v-bind:fightModifiers="character.fightModifiers"
      v-bind:pvTracking="character.pvTracking"
      v-bind:ddjs="character.ddjs"
    ></char-details>
    <features-list
      v-bind:details="character.details"
      v-bind:stats="character.stats"
      v-bind:ddjs="character.ddjs"
      v-bind:fightModifiers="character.fightModifiers"
      v-bind:pvTracking="character.pvTracking"
    ></features-list>
    <skills-list></skills-list>
    <fight-modifiers></fight-modifiers>
    <armor-class></armor-class>
    <status-section></status-section>
    <armors-and-weapons></armors-and-weapons>
    <spells-list></spells-list>
    <life-points></life-points>
    <abilities-list></abilities-list>
    <magic-stuffs></magic-stuffs>
    <button v-on:click="printCharacter(character)">character</button>
  </div>
</template>

<script>
import CharacterDetails from "./CharacterDetails.vue";
import FeaturesList from "./FeaturesList.vue";
import SkillsList from "./SkillsList.vue";
import FightModifiers from "./FightModifiers.vue";
import ArmorClassSection from "./ArmorClassSection.vue";
import StatusSection from "./StatusSection.vue";
import ArmorsAndWeapons from "./ArmorsAndWeapons.vue";
import SpellsList from "./SpellsList.vue";
import LifePointsTracking from "./LifePointsTracking.vue";
import TraitsAndAbilitiesList from "./TraitsAndAbilitiesList.vue";
import MagicStuffsList from "./MagicStuffsList";

export default {
  name: "app",
  components: {
    "char-details": CharacterDetails,
    "features-list": FeaturesList,
    "skills-list": SkillsList,
    "fight-modifiers": FightModifiers,
    "armor-class": ArmorClassSection,
    "status-section": StatusSection,
    "armors-and-weapons": ArmorsAndWeapons,
    "spells-list": SpellsList,
    "life-points": LifePointsTracking,
    "abilities-list": TraitsAndAbilitiesList,
    "magic-stuffs": MagicStuffsList
  },
  methods: {
    printCharacter: function(infos) {
      console.log(infos);
    }
  },
  data() {
    return {
      character: {
        details: {
          name: "",
          level: null,
          breed: "",
          class: ""
        },
        stats: {
          for: {
            name: "Force",
            value: 0,
            mastery: false,
            save: 0,
            modifier: 0,
            breedBonus: 0,
            totalValue: 0
          },
          dex: {
            name: "Dextérité",
            value: 0,
            mastery: false,
            save: 0,
            modifier: 0,
            breedBonus: 0,
            totalValue: 0
          },
          con: {
            name: "Constitution",
            value: 0,
            mastery: false,
            save: 0,
            modifier: 0,
            breedBonus: 0,
            totalValue: 0
          },
          int: {
            name: "Intelligence",
            value: 0,
            mastery: false,
            save: 0,
            modifier: 0,
            breedBonus: 0,
            totalValue: 0
          },
          sag: {
            name: "Sagesse",
            value: 0,
            mastery: false,
            save: 0,
            modifier: 0,
            breedBonus: 0,
            totalValue: 0
          },
          cha: {
            name: "Charisme",
            value: 0,
            mastery: false,
            save: 0,
            modifier: 0,
            breedBonus: 0,
            totalValue: 0
          }
        },
        ddjs: null,
        skills: {
          acrobaties: 0,
          arcanes: 0,
          athletisme: 0,
          discretion: 0,
          dressage: 0,
          escamotage: 0,
          histoire: 0,
          intimidation: 0,
          investigation: 0,
          medecine: 0,
          nature: 0,
          perception: 0,
          perspicacite: 0,
          persuasion: 0,
          religion: 0,
          representation: 0,
          supercherie: 0,
          survie: 0
        },
        fightModifiers: {
          masteryBonus: 0,
          perception: 0,
          initiative: 0,
          vitesse: 0
        },
        armorClass: {
          armorBonus: 0,
          shieldBOnus: 0,
          dexModifier: 0,
          magicBonus: 0,
          resistances: [],
          vulnerabilites: [],
          desavantageArmure: "",
          finalValue: 0
        },
        weapons: [],
        armors: [],
        spells: [],
        pvTracking: {
          pvDice: {
            value: null,
            nbDice: null
          },
          currentValue: 0,
          provisionalPV: 0,
          maxValue: 0
        },
        traitsAndAbilities: [],
        magicStuffs: []
      }
    };
  }
};
</script>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
