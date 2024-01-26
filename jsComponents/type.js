//Sets the type of the creature
function Type(idCreatureType, idCreatureType2) {
    //catch arguments if needed
    if (idCreatureType2 == null) {
        idCreatureType2 = 'random'
    }
    //List of types of creatures that can be created
    let typeList = [`Beast`]
    //sets first creature type
    let creatureType = typeList[0]
    //Initializes secondary type to none
    let secondaryType = null
    //Assigns a creature to a creature type on the {typeList}
    if (idCreatureType == 'random') {
        creatureType = typeList[Math.floor(Math.random() * typeList.length)]
    } else if (idCreatureType == 'beast') {
        creatureType = 'Beast'
    }
    
    
    
    
    //Sets secondary type if needed
    //secondary types for beast
    if (creatureType == `Beast`) {
        typeList = [`Air`, `Land`, `Water`]
        if (idCreatureType2 == 'random') {
            secondaryType = typeList[Math.floor(Math.random() * typeList.length)]
        } else if (idCreatureType2 == 'air') {
            secondaryType = 'Air'
        } else if (idCreatureType2 == 'land') {
            secondaryType = 'Land'
        } else if (idCreatureType2 == 'water') {
            secondaryType = 'Water'
        }

        
    }
    //Returns the creatures type and secondary type as a array
    return [creatureType, secondaryType]
}