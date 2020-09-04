export default {
    updateDDJSValue: function (statModifier, masteryBonus) {
        return 8 + statModifier + masteryBonus;
    },
    calculateCA: function (armorClass, armorType) {
        var caModifier = 0;
        var dexModifier = parseInt(armorClass.dexModifier);
        var armorBonus = parseInt(armorClass.armorBonus);
        switch (armorType) {
            case "Légère":
                caModifier = armorBonus + dexModifier;
                break;
            case "Intermédiaire":
                caModifier = this.checkDexModifier(armorBonus, dexModifier);
                break;
            case "Lourde":
                caModifier = armorBonus;
                break;
        }
        return caModifier;
    },
    checkDexModifier: function (caValue, dexModifier) {
        if (dexModifier > 2) {
            return caValue + 2;
        } else {
            return caValue + dexModifier;
        }
    }
}