//saving throws
function SavingThrows(modifiers, proficiencyBonus) {
    //get the number of saving throws to have
    let numberOf = Math.floor(Math.random() * 3) + 1
    //create the array to save the saving throws
    let savingThrows = [0, 0, 0, 0, 0, 0]
    //finds the highest number
    let highest = 0
    for (let i = 0; i < 6; i++) {
        if (modifiers[i] > modifiers[highest]) {
            highest = i
        }
    }
    //finds the second highest number
    let secondHighest = 0
    for (let i = 0; i < 6; i++) {
        if (modifiers[i] > secondHighest && i != highest) {
            secondHighest = i
        }
    }
    //finds the third highest number
    let thirdHighest = 0
    for (let i = 0; i < 6; i++) {
        if (modifiers[i] > thirdHighest && i != highest && i != secondHighest) {
            thirdHighest = i
        }
    }
    //Set the saving throws
    for (let i = 0; i < numberOf; i++) {
        if (i == 0) {
            savingThrows[highest] = modifiers[highest] + proficiencyBonus
        } else if (i == 1) {
            savingThrows[secondHighest] = modifiers[secondHighest] + proficiencyBonus

        } else if (i == 2) {
            savingThrows[thirdHighest] = modifiers[thirdHighest] + proficiencyBonus
        }
    }
    return savingThrows
}