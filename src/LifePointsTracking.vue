<template>
  <div>
    <div>
      <label>Points de vie :</label>
      <input type="number" v-model="pvTracking.currentValue" />
      /{{pvTracking.maxValue}}
    </div>
    <div>
      <label>Points de vie temporaires :</label>
      <input type="number" v-model="pvTracking.provisionalPV" />
    </div>
    <div>
      <label>Dés de vie : {{pvTracking.pvDice.nbDice}}d{{pvTracking.pvDice.value}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "life-points",
  props: ["pvTracking"],
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>