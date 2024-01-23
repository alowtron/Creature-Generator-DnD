function SpecialAbilities(creatureType, abilityScores, modifiers, speed) {
    let specialAbilities = null
    //list of special abilities a creature might have.
    let bite = false
    let claws = false
    let peck = false
    // list of random numbers to use
    let randomNumber2 = Math.floor(Math.random() * 2)
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
    return [specialAbilities]
}