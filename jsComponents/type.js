//Sets the type of the creature
function Type() {
    //List of types of creatures that can be created
    let typeList = [`Beast`]
    //Assigns a creature to a creature type on the {typeList}
    let creatureType = typeList[0]
    //Initializes secondary type to none
    let secondaryType = 'none'
    //Sets secondary type if needed
    //secondary types for beast
    if (creatureType == `Beast`) {
        typeList = [`Air`, `Land`, `Water`]
        secondaryType = typeList[Math.floor(Math.random() * typeList.length)]
    }
    //Returns the creatures type and secondary type as a array
    return [creatureType, secondaryType]
}