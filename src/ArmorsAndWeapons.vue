<template>
  <div>
  </div>
</template>

<script>
import ArmorsList from './ArmorsList.vue';
import WeaponsList from './WeaponsList.vue';

export default {
  name: 'armors-and-weapons',
  components: {
    'armors': ArmorsList,
    'weapons' : WeaponsList
  },
  props: [''],
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>