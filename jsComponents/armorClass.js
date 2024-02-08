//Sets the armor class based off of {creatureType} and {modifiers}
function ArmorClass(creatureType, modifiers, idArmorClass) {
    //sets armor class to 10
    let armorClass = 10
    if (idArmorClass != null && idArmorClass != 0) {
        return idArmorClass
    } else if (creatureType == `Beast`) {
        armorClass = 10 + modifiers[1] + modifiers[2]
    }
    return armorClass
}