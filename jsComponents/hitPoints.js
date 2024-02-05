//Sets the hit points of the creature based off of the {creatureType[0]}
function HitPoints(challengeRating, creatureType, creatureSize, modifiers, idHitPoints) {
    let hitPoints = [0, 0]
    if (idHitPoints >= 1) {
        return idHitPoints
    } else if (creatureType == `Beast`) {
        if (creatureSize == `Tiny`) {
            hitPoints[1] = 3
        } else if (creatureSize == `Small`) {
            hitPoints[1] = 4
        } else if (creatureSize == `Medium`) {
            hitPoints[1] = 5
        } else if (creatureSize == `Large`) {
            hitPoints[1] = 6
        } else if (creatureSize == `Huge`) {
            hitPoints[1] = 7
        }
    }
    hitPoints[0] = hitPoints[1] * challengeRating + modifiers[2] * challengeRating
    if (hitPoints[0] < challengeRating * 8) {
        tempStorage = challengeRating * 8
        return tempStorage
    }
    return hitPoints
}