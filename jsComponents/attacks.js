function Attacks(challengeRating, creatureType, creatureName, creatureSize, modifiers, proficiencyBonus, specialAbilities) {
    //attack numbers
    let numberOfAttacks = null
    if (challengeRating >= 25) {
        numberOfAttacks = 6
    } else if (challengeRating >= 20) {
        numberOfAttacks = 5
    } else if (challengeRating >= 15) {
        numberOfAttacks = 4
    } else if (challengeRating >= 10) {
        numberOfAttacks = 3
    } else if (challengeRating >= 5) {
        numberOfAttacks = 2
    } else {
        numberOfAttacks = 1
    }
    let numberOfAttacksText = ""
    if (numberOfAttacks > 1) {
        numberOfAttacksText = `<p>The ${creatureName} can make ${numberOfAttacks} attacks.</p>`
    }
    let attacksText = []
    let attacksTextPos = 0
    let attackToHit = 0
    let modifierDamage = 0
    if (creatureType[0] == 'Beast') {
        if (modifiers[0] >= modifiers[1]) {
            attackToHit = modifiers[0] + proficiencyBonus
            modifierDamage = modifiers[0]
        } else {
            attackToHit = modifiers[1] + proficiencyBonus
            modifierDamage = modifiers[1]
        }
    }
    //set damage type
    let damageType = ""

    //range and attack damage
    let range = 5
    let attackDice = 0
    let attackDiceNumber = 1
    if (creatureSize == "Tiny") {
        attackDice = 4
        range = 5
        if (challengeRating >= 5) {
            attackDiceNumber = 2
        }
    }
    //parse {specialAbilities[1]}
    for (let i = 0; i <= specialAbilities.length; i++) {
        if (specialAbilities[1][i] == 'bite') {
            attacksText[attacksTextPos] = `<p><b>Bite: </b> +${attackToHit} to hit, range: ${range} ft., ${attackDiceNumber}d${attackDice}+${modifierDamage} ${damageType} damage. </p>`
            attacksTextPos++
        }
    }

    return [numberOfAttacksText, attacksText]
}