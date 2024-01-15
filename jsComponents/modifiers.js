//Sets the modifiers for {AbilityScores}
function Modifiers(abilityScores) {
    /*For loop to set {modifiers} {abilityScores} without appending it*/
    let modifiers = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 6; i++) {
        modifiers[i] = abilityScores[i]
    }
    //makes all for the number even then gives them the proper modifier
    for (let i = 0; i < 6; i++) {
        if (modifiers[i] % 2 == 1) {
            modifiers[i]--
        }
        modifiers[i] = modifiers[i] / 2 - 5
    }
    //returns {modifiers}
    return modifiers
}