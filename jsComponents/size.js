
//Sets the size of the creature
function Size(creatureType, secondaryType, idSize) {
    //initializes creatures size var
    let creatureSize = ``
    //sets creature type if {creatureType} is beast
    if (idSize != 'random' && idSize != null) {
        creatureSize = idSize
    } else {
        if (creatureType == `Beast`) {
            //sets {creatureSize} based off of {secondaryType}
            if (secondaryType == `Air`) {
                let possibleSizes = [`Tiny`, `Small`, `Medium`, `Large`]
                creatureSize = possibleSizes[Math.floor(Math.random() * possibleSizes.length)]
            } else if (secondaryType == `Land` || secondaryType == `Water`) {
                let possibleSizes = [`Tiny`, `Small`, `Medium`, `Large`, `Huge`]
                creatureSize = possibleSizes[Math.floor(Math.random() * possibleSizes.length)]
            }
        }
    }
    
    //returns the creature size
    return creatureSize
}