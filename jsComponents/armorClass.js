//Sets the armor class based off of {creatureType} and {modifiers}
function ArmorClass(creatureType, modifiers) {
    //sets armor class to 10
    let armorClass = 10
    if (creatureType == `Beast`) {
        armorClass = 10 + modifiers[1] + modifiers[2]
    }
    return armorClass
}