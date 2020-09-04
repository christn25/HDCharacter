<template>
<div>
    <div>
        <label>Bonus de Maîtrise : {{fightModifiers.masteryBonus}}</label>
    </div>
    <div>
        <label>Perception : {{fightModifiers.perception}}</label>
    </div>
    <div>
        <label>Initiative : {{stats.dex.totalValue}} + {{fightModifiers.initBonus}} = {{fightModifiers.initiative}}</label>
    </div>
    <div>
        <label>Vitesse : {{fightModifiers.speed}}</label>
    </div>
</div>
</template>

<script>
export default {
    name: "fight-modifiers",
    props: ["fightModifiers", "stats"],
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>
