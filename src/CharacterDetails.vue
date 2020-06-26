<template>
  <div>
    <div>
      <input type="text" v-model="details.name" placeholder="Nom" />
    </div>
    <div>
      <input type="number" v-model="details.level" placeholder="Niveau" />
    </div>
    <div>
      <select id="char-breed" v-model="details.breed">
        <option value="">Race</option>
        <option value="demi-elfe">Demi-elfe</option>
        <option value="demi-orc">Demi-orc</option>
        <option value="elfe">Elfe</option>
        <option value="gnome">Gnome</option>
        <option value="halfelin">Halfelin</option>
        <option value="humain">Humain</option>
        <option value="nain">Nain</option>
        <option value="aasimar">Aasimar</option>
        <option value="demi-ogre">Demi-ogre</option>
        <option value="felys">Félys</option>
        <option value="homme-serpent">Homme serpent</option>
        <option value="sangdragon">Sangdragon</option>
        <option value="tieffelin">Tieffelin</option>
      </select>
    </div>
    <div>
      <select id="char-class" v-model="details.class">
        <option value="">Classe</option>
        <option value="barbare">Barbare</option>
        <option value="barde">Barde</option>
        <option value="clerc">Clerc</option>
        <option value="druide">Druide</option>
        <option value="ensorceleur">Ensorceleur</option>
        <option value="guerrier">Guerrier</option>
        <option value="magicien">Magicien</option>
        <option value="moine">Moine</option>
        <option value="paladin">Paladin</option>
        <option value="rôdeur">Rôdeur</option>
        <option value="roublard">Roublard</option>
        <option value="sorcier">Sorcier</option>
      </select>
    </div>
    <button v-on:click="printCharacter(details)">character</button>
  </div>
</template>

<script>
export default {
  name: "character-details",
  props: ["details"],
  methods: {
    printCharacter: function(infos) {
      console.log(infos);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>