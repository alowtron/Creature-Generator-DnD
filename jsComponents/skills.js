//Sets the skills that Creature has
function Skills(creatureType, modifiers) {
    //initializes skills to empty arrays
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //array of all of the skill types
    let skillTypes = [`Acrobatics`, `Animal Handling`, `Arcana`, `Athletics`, `Deception`, `History`, `Insight`, `Intimidation`, `Investigation`, `Medicine`, `Nature`, `Perception`, `Performance`, `Persuasion`, `Religion`, `Sleight of Hand`, `Stealth`, `Survival`]
    //Sets the skills based on creature type
    if (creatureType[0] == `Beast`) {
        //sets skills based on secondary type
        skills = beastSkills(creatureType[1])

    }


    //functions to get skills based on creature type
    function beastSkills(type2) {
        //generate the number of skills to have
        let numOfSkills = Math.floor(Math.random() * 4) + 1
        //options for skills
        let skillOptions = [3, 10, 11, 16, 17]
        // generate what skills to get
        for (let i = 0; i < numOfSkills; i++) {
            //get a random skill to generate
            let tempSkill = Math.floor(Math.random() * 4)
            if (skills[skillOptions[tempSkill]] < 2) {
                skills[skillOptions[tempSkill]] += 1
            }

        }
        return skills
    }

    return skills
}