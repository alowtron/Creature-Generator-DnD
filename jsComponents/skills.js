//Sets the skills that Creature has
function Skills(creatureType) {
    //initializes skills to empty arrays, "1"s will be displayed
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //Sets the skills based on creature type
    if (creatureType[0] == `Beast`) {
        //sets skills based on secondary type
        beastSkills()
    }


    //functions to select skills based on creature type
    function beastSkills() {
        //generate the number of skills to have
        let numOfSkills = Math.floor(Math.random() * 4) + 1
        //options for skills
        let skillOptions = [3, 10, 11, 16, 17]
        // generate what skills to get
        for (let i = 0; i < numOfSkills; i++) {
            //get a random skill to generate
            let skillSelect = skillOptions[Math.floor(Math.random() * skillOptions.length)]
            //sets skill if it has been set already
            if (skills[skillSelect] < 1) {
                skills[skillSelect] += 1
            }
        }
    }

    return skills
}