function SpecialAbilities(challengeRating, creatureType, creatureName, abilityScores, modifiers, speed) {
    let specialAbilities = null
    //list of special abilities a creature might have.
    let bite = false
    let claws = false
    let peck = false
    // list of random numbers to use
    let randomNumber2 = Math.floor(Math.random() * 2)
    let randomNumber3 = Math.floor(Math.random() * 3)
    //set things for beasts
    if (creatureType[0] == 'Beast') {
        if (creatureType[1] == `Land`) {
            if (randomNumber2 == 1) {
                bite = true
            }
            claws = true
        } else if (creatureType[1] == `Air`) {
            if (randomNumber2 == 0) {
                peck = true
            }
            claws = true
        } else if (creatureType[1] == `Water`) {
            bite = true
        }
    }

    let specialAbilitiesText = ""

    if (creatureType[0] == 'Beast') {
        //extra damage amount calculator
        let extraDamage = Math.floor(challengeRating / 3)
        //make sure that the extra damage is at least 1d6
        if (extraDamage <= 0) {
            extraDamage = 1
        }
        if (bite == true && randomNumber3) {
            specialAbilitiesText += `<p><b>Charge:</b> Whenever the ${creatureName} moves at least 20ft in a line towards before making an attack, it deals an extra ${extraDamage}d6 damage.</p>`
        }
        console.log(specialAbilitiesText)
    }


    console.log(`bite: ${bite}`)
    console.log(`claws: ${claws}`)
    console.log(`peck; ${peck}`)
    return [specialAbilitiesText]//specialAbilities
}
