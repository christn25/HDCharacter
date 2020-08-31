export default {
    updateDDJSValue: function (statModifier, masteryBonus) {
        return 8 + statModifier + masteryBonus;
    },
    calculateCA: function (armorClass, armorType) {
        var caModifier = 0;
        var dexModifier = parseInt(armorClass.dexModifier);
        switch (armorType) {
            case "quilted":
            case "leather":
                caModifier = 11 + dexModifier;
                break;
            case "studdedLeather":
                caModifier = 12 + dexModifier;
                break;
            case "skin":
                caModifier = this.checkDexModifier(12, dexModifier);
                break;
            case "meshShirt":
                caModifier = this.checkDexModifier(13, dexModifier);
                break;
            case "scales":
            case "breastplate":
                caModifier = this.checkDexModifier(14, dexModifier);
                break;
            case "half_flat":
                caModifier = this.checkDexModifier(15, dexModifier);
                break;
            case "broigne":
                caModifier = 14;
                break;
            case "chainmail":
                caModifier = 16;
                break;
            case "clibanion":
                caModifier = 17;
                break;
            case "harnois":
                caModifier = 18;
                break;
            default:
                caModifier = dexModifier;
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