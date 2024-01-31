function SpecialAbilities(challengeRating, creatureType, creatureName, abilityScores, modifiers, speed, idSpecialAbilities1) {
    
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
        if ((bite == true && randomNumber3 == 0) || idSpecialAbilities1 == 'charge') {
            specialAbilitiesText += `<p><b>Charge:</b> Whenever the ${creatureName} moves at least 20ft in a straight line towards the target before making an attack, it deals an extra ${extraDamage}d6 damage.</p>`
        }
        if (idSpecialAbilities1 == 'flyby') {
            specialAbilitiesText += `<p><b>Fly By:</b> Whenever the ${creatureName} makes a attack on their turn, the rest of the movement on their turn does not provoke opportunity attacks.</p>`
        } else if ((claws == true && randomNumber3 == 0) || idSpecialAbilities1 == 'pounce') {
            specialAbilitiesText += `<p><b>Pounce:</b> Whenever the ${creatureName} moves at least 10ft in a straight line towards the target before making an attack, it deals an extra ${extraDamage}d6 damage.</p>`
            if (randomNumber2 == 0 && creatureType[1] == 'Air') {
                specialAbilitiesText += `<p><b>Fly By:</b> Whenever the ${creatureName} makes a attack on their turn, the rest of the movement on their turn does not provoke opportunity attacks.</p>`
            }
        }
    }

    //parse the information from all of the special abilities in this function
    let specialAbilities = []
    if (bite == true) {
        specialAbilities.push("bite")
    }
    if (claws == true) {
        specialAbilities.push("claws")
    }
    if (peck == true) {
        specialAbilities.push("peck")
    }

    //checks to see if {specialAbilitiesText} is empty and if it is, take and set it to "N/A"
    if (specialAbilitiesText == "") {
        specialAbilitiesText = "<p>N/A</p>"
    }
    return [specialAbilitiesText, specialAbilities]//specialAbilities
}
