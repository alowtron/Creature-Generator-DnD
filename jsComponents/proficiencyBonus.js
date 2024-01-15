//Sets proficiency bonus based off of cr
function ProficiencyBonus(challengeRating) {
    //initializes proficiencyBonus to 0
    let proficiencyBonus = 0
    //set proficiencyBonus based off of cr
    if (challengeRating <= 4) {
        proficiencyBonus = 2
    } else if (challengeRating <= 8) {
        proficiencyBonus = 3
    } else if (challengeRating <= 12) {
        proficiencyBonus = 4
    } else if (challengeRating <= 16) {
        proficiencyBonus = 5
    } else if (challengeRating <= 20) {
        proficiencyBonus = 6
    } else if (challengeRating <= 24) {
        proficiencyBonus = 7
    } else if (challengeRating <= 28) {
        proficiencyBonus = 8
    } else if (challengeRating >= 29) {
        proficiencyBonus = 9
    }
    return proficiencyBonus
}