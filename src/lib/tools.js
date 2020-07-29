export default {
    updateDDJSValue: function (statModifier, masteryBonus) {
        console.log("update ddjs: " + statModifier + ", " + masteryBonus);
        return 8 + statModifier + masteryBonus;
    }
}