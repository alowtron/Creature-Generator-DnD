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
        if (challengeRating >= 15) {
            attackDiceNumber = 3
        } else if (challengeRating >= 5) [
            attackDiceNumber = 2
        ]
    } else if (creatureSize == "Small") {
        attackDice = 6
        if (challengeRating >= 10) {
            attackDiceNumber = 2
        }
    } else if (creatureSize == "Medium") {
        attackDice = 8
        if (challengeRating >= 13) {
            attackDiceNumber = 2
        }
    } else if (creatureSize == "Large") {
        attackDice = 10
        if (challengeRating >= 20) {
            attackDiceNumber = 2
        }
    } else if (creatureSize == "Huge") {
        attackDice = 12
        if (challengeRating >= 25) {
            attackDiceNumber = 2
        }
    } else {
        attackDice = 20
    }
    //parse {specialAbilities[1]}
    for (let i = 0; i <= specialAbilities.length; i++) {
        if (specialAbilities[1][i] == 'bite') {
            damageType = "piercing"
            range = 5
            attacksText[attacksTextPos] = `<p><b>Bite: </b> +${attackToHit} to hit, range: ${range} ft., ${attackDiceNumber}d${attackDice}+${modifierDamage} ${damageType} damage. </p>`
            attacksTextPos++
        }
        if (specialAbilities[1][i] == 'claws') {
            damageType = 'slashing'
            range = 5
            attacksText[attacksTextPos] = `<p><b>Claws: </b> +${attackToHit} to hit, range: ${range} ft., ${attackDiceNumber}d${attackDice}+${modifierDamage} ${damageType} damage. </p>`
            attacksTextPos++
        }
        if (specialAbilities[1][i] == 'peck') {
            damageType = "piercing"
            range = 5
            attacksText[attacksTextPos] = `<p><b>Peck: </b> +${attackToHit} to hit, range: ${range} ft., ${attackDiceNumber}d${attackDice}+${modifierDamage} ${damageType} damage. </p>`
            attacksTextPos++
        }
    }

    return [numberOfAttacksText, attacksText]
}