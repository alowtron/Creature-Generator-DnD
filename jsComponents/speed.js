// This code takes and checks to see if a speed has been set, if it has been it sets it and keeps the rest of the code from showing by setting the id to true. When creature type is checked it checks to see if it is set to 0 first.

//Sets the speed of the creature based off of the {creatureType[0] and creatureType[1] and {modifiers[1]}}
function Speed(creatureType, abilityScores, idMoveSpeed, idFlySpeed, idSwimSpeed) {
    let speed0 = 0
    if (idMoveSpeed != 0 && idMoveSpeed != null) {
        speed0 = idMoveSpeed
    }
    //used for fly
    let speed1 = 0
    if (idFlySpeed != 0 && idFlySpeed != null) {
        speed1 = idFlySpeed
    }
    //used for swim
    let speed2 = 0
    if (idSwimSpeed != 0 && idSwimSpeed != null) {
        speed2 = idSwimSpeed
    }

    //calculate speeds based on creature type
    if (creatureType[0] == `Beast`) {
        if (creatureType[1] == `Land`) {
            if (speed0 == 0) {
                speed0 = Math.round((abilityScores[1] * 3) / 5) * 5
            }
        } else if (creatureType[1] == `Air`) {
            if (speed0 == 0) {
                speed0 = Math.round((abilityScores[1] * 2) / 5) * 5
            }
            if (speed1 == 1) {
                speed1 = Math.round((abilityScores[1] * 4) / 5) * 5
            }
        } else if (creatureType[1] == `Water`) {
            if (speed2 == 0) {
                speed2 = Math.round((abilityScores[1] * 3) / 5) * 5
            }
        }
    }
    return [speed0, speed1, speed2]
}