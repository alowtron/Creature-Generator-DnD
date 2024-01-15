//Sets the alignment of the creature
function Alignment(creatureType) {
    //initialize alignment var
    let alignment = ``
    //set alignment based on {creatureType}
    if (creatureType == `Beast`) {
        alignment = `Neutral`
    }
    return alignment
}