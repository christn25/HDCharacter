<template>
<div id="app">
    <router-view v-bind:character="character"></router-view>
    <div>
        <button>
            <router-link to="/character">Personnage</router-link>
        </button>
        <button>
            <router-link to="/skills">Traits et compétences</router-link>
        </button>
        <button>
            <router-link to="/stuff">Inventaire</router-link>
        </button>
        <button>
            <router-link to="/spellbook">Grimoire</router-link>
        </button>
    </div>
    <hr />
    <button v-on:click="printCharacter(character)">character</button>
</div>
</template>

<script>
import Character from "./Character.vue";
import Stuff from "./Stuff.vue";
import SpellBook from "./SpellsList.vue";
import SkillsAndAbilities from "./SkillsAndAbilities.vue";

export default {
    name: "app",
    methods: {
        printCharacter: function (infos) {
            console.log(infos);
        },
    },
    data() {
        return {
            character: {
                details: {
                    name: "",
                    level: 1,
                    breed: "",
                    class: "",
                },
                stats: {
                    for: {
                        name: "Force",
                        value: 0,
                        mastery: false,
                        save: 0,
                        modifier: 0,
                        breedBonus: 0,
                        totalValue: 0,
                    },
                    dex: {
                        name: "Dexterite",
                        value: 0,
                        mastery: false,
                        save: 0,
                        modifier: 0,
                        breedBonus: 0,
                        totalValue: 0,
                    },
                    con: {
                        name: "Constitution",
                        value: 0,
                        mastery: false,
                        save: 0,
                        modifier: 0,
                        breedBonus: 0,
                        totalValue: 0,
                    },
                    int: {
                        name: "Intelligence",
                        value: 0,
                        mastery: false,
                        save: 0,
                        modifier: 0,
                        breedBonus: 0,
                        totalValue: 0,
                    },
                    sag: {
                        name: "Sagesse",
                        value: 0,
                        mastery: false,
                        save: 0,
                        modifier: 0,
                        breedBonus: 0,
                        totalValue: 0,
                    },
                    cha: {
                        name: "Charisme",
                        value: 0,
                        mastery: false,
                        save: 0,
                        modifier: 0,
                        breedBonus: 0,
                        totalValue: 0,
                    },
                },
                ddjs: {
                    value: null,
                    affectedStat: "",
                },
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
                    survie: 0,
                },
                fightModifiers: {
                    masteryBonus: 2,
                    perception: 0,
                    initiative: 0,
                    initBonus: 0,
                    speed: 9,
                },
                armorClass: {
                    armorBonus: 0,
                    shieldBonus: 0,
                    dexModifier: 0,
                    magicBonus: 0,
                    resistances: [],
                    vulnerabilities: [],
                    armorDisadvantage: "",
                    finalValue: 0,
                },
                stuff: {
                    weapons: [],
                    armor: {
                        id: null,
                        name: "",
                        type: "",
                        ca: 0,
                        disadvantage: false
                    },
                    shield: false,
                    magicStuffs: [],
                },
                spells: [],
                pvTracking: {
                    pvDice: {
                        value: null,
                        nbDice: 1,
                    },
                    currentValue: 0,
                    provisionalPV: 0,
                    maxValue: 0,
                },
                traitsAndAbilities: [],
            },
        };
    },
};
</script>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
