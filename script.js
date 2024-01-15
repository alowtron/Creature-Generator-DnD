//Main class that calls all other function, this class is the only one that is called at the end.
function Main() {
  //gets the challenge rating for creature
  let challengeRating = ChallengeRating()
  //gets the type of the creature'
  let creatureType = CreatureType()
  //gets a name based off of creature type
  let creatureName = CreatureName(creatureType[0])
  //gets the size of the creature based off the creature type
  let creatureSize = CreatureSize(creatureType[0], creatureType[1])
  //gets the alignment of a creature based off the creature type
  let alignment = Alignment(creatureType[0])
  //gets the ability scores for the creature
  let abilityScores = AbilityScores(creatureType[0], creatureSize)
  //gets the modifiers for ability scores
  let modifiers = Modifiers(abilityScores)
  //gets the armor class of the creature
  let armorClass = ArmorClass(creatureType[0], modifiers)
  //gets the hit points of the creature
  let hitPoints = HitPoints(challengeRating, creatureType[0], creatureSize, modifiers)
  //gets the speed of the creature
  let speed = Speed(creatureType, abilityScores)
  //gets proficiencyBonus
  let proficiencyBonus = ProficiencyBonus(challengeRating)
  //gets saving throws
  let savingThrows = SavingThrows(modifiers, proficiencyBonus)
  //get skills
  let skills = Skills(creatureType, modifiers)

  //code to display creature on console
  Display(challengeRating, creatureName, creatureSize, creatureType[0], alignment, armorClass, hitPoints, speed, abilityScores, modifiers, savingThrows, proficiencyBonus)
}


//Sets the type of the creature
function CreatureType() {
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
//makes a name base off of the creature type
function CreatureName(creatureType) {
  //intializes creatures name to blank string
  let creatureName = ``
  //creates creature name based off of its creature type
  //if {creatureType} is Beast
  if (creatureType == `Beast`) {
    //list of name vars to build name with
    let nameVarsConst = [`b`, `c`, `d`, `f`, `g`, `h`, `j`, `k`, `l`, `m`, `n`, `p`, `t`]
    let nameVarsVowels = [`a`, `e`, `i`, `o`, `u`]
    //create the creature name
    let nameVar1 = nameVarsConst[Math.floor(Math.random() * nameVarsConst.length)]
    let nameVar2 = nameVarsVowels[Math.floor(Math.random() * nameVarsVowels.length)]
    let nameVar3 = nameVarsConst[Math.floor(Math.random() * nameVarsConst.length)]
    creatureName = nameVar1.toUpperCase() + nameVar2 + nameVar3
  }
  return creatureName
}
//Sets the size of the creature
function CreatureSize(creatureType, secondaryType) {
  //initializes creatures size var
  let creatureSize = ``
  //sets creature type if {creatureType} is beast
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
  //returns the creature size
  return creatureSize
}
//Sets the allignment of the creature
function Alignment(creatureType) {
  //intialize alignment var
  let alignment = ``
  //set allignment based on {cratureType}
  if (creatureType == `Beast`) {
    alignment = `Neutral`
  }
  return alignment
}
//Sets the ability score of the creature
function AbilityScores(creatureType, creatureSize) {
  /*This part of the code works by calling a function based off of the type of creature, and the function creates a value based off of the size and type of the creature*/
  //initializes all of the ablility scores to 0
  let abilityScores = [0, 0, 0, 0, 0, 0]
  if (creatureType == `Beast`) {
    BeastScores()
  }
  //Returns everything
  return abilityScores

  //functions for findings size of creature types
  function BeastScores() {
    //Size based
    if (creatureSize == `Tiny`) {
      abilityScores[0] = StrTiny()
      abilityScores[1] = DexTiny()
      abilityScores[2] = ConTiny()
    } else if (creatureSize == `Small`) {
      abilityScores[0] = StrSmall()
      abilityScores[1] = DexSmall()
      abilityScores[2] = ConSmall()
    } else if (creatureSize == `Medium`) {
      abilityScores[0] = StrMedium()
      abilityScores[1] = DexMedium()
      abilityScores[2] = ConMedium()
    } else if (creatureSize == `Large`) {
      abilityScores[0] = StrLarge()
      abilityScores[1] = DexLarge()
      abilityScores[2] = ConLarge()
    } else if (creatureSize == `Huge`) {
      abilityScores[0] = StrHuge()
      abilityScores[1] = DexHuge()
      abilityScores[2] = ConHuge()
    }
    //INT, WIS, and CHA
    abilityScores[3] = IntBeast()
    abilityScores[4] = WisBeast()
    abilityScores[5] = ChaBeast()
  }

  //function for finding abilties of creatures
  //funciton for finding STR of tiny creatures
  function StrTiny() {
    let tempScore = 2 + Math.floor(Math.random() * 7)
    return tempScore
  }
  //functgion for findind DEX of tiny creature
  function DexTiny() {
    let tempScore = 6 + Math.floor(Math.random() * 13)
    return tempScore
  }
  //function for finding CON of a tiny creature
  function ConTiny() {
    let tempScore = 4 + Math.floor(Math.random() * 11)
    return tempScore
  }
  //function for finding the STR of small creatures
  function StrSmall() {
    let tempScore = 6 + Math.floor(Math.random() * 15)
    return tempScore
  }
  //Function for finding the Dex of small creatures 
  function DexSmall() {
    let tempScore = 8 + Math.floor(Math.random() * 15)
    return tempScore
  }
  //function for finding CON of small creatures
  function ConSmall() {
    let tempScore = 8 + Math.floor(Math.random() * 13)
    return tempScore
  }
  //function for finding the STR of medium creatures
  function StrMedium() {
    let tempScore = 8 + Math.floor(Math.random() * 13)
    return tempScore
  }
  //function for finding the Dex of medium creatures
  function DexMedium() {
    let tempScore = 8 + Math.floor(Math.random() * 13)
    return tempScore
  }
  //function for finding the CON of medium creatures
  function ConMedium() {
    let tempScore = 8 + Math.floor(Math.random() * 13)
    return tempScore
  }
  //function for finding the STR of large creatures
  function StrLarge() {
    let tempScore = 12 + Math.floor(Math.random() * 13)
    return tempScore
  }
  //function for finding the Dex of large creatures
  function DexLarge() {
    let tempScore = 8 + Math.floor(Math.random() * 9)
    return tempScore
  }
  //function for finding the CON of large creatures
  function ConLarge() {
    let tempScore = 12 + Math.floor(Math.random() * 13)
    return tempScore
  }
  //function for finding the STR of huge creatures
  function StrHuge() {
    let tempScore = 14 + Math.floor(Math.random() * 15)
    return tempScore
  }
  //function for finding the Dex of huge creatures
  function DexHuge() {
    let tempScore = 8 + Math.floor(Math.random() * 7)
    return tempScore
  }
  //function for finding the CON of huge creatures
  function ConHuge() {
    let tempScore = 14 + Math.floor(Math.random() * 15)
    return tempScore
  }

  //Creature type specific stats
  //function for finding INT, WIS, and CHA of beasts
  function IntBeast() {
    let tempScore = 4 + Math.floor(Math.random() * 11)
    return tempScore
  }
  function WisBeast() {
    let tempScore = 6 + Math.floor(Math.random() * 11)
    return tempScore
  }
  function ChaBeast() {
    let tempScore = 4 + Math.floor(Math.random() * 11)
    return tempScore
  }
}
//Sets the modifiers for {AbilityScores}
function Modifiers(abilityScores) {
  /*For loop to set {modifiers} {abilityScores} without appending it*/
  let modifiers = [0, 0, 0, 0, 0, 0]
  for (let i = 0; i < 6; i++) {
    modifiers[i] = abilityScores[i]
  }
  //makes all for the number even then gives them the proper modifier
  for (let i = 0; i < 6; i++) {
    if (modifiers[i] % 2 == 1) {
      modifiers[i]--
    }
    modifiers[i] = modifiers[i] / 2 - 5
  }
  //returns {modifiers}
  return modifiers
}
//Sets the armor class based off of {creatureType} and {modifiers}
function ArmorClass(creatureType, modifiers) {
  //sets armor class to 10
  let armorClass = 10
  if (creatureType == `Beast`) {
    armorClass = 10 + modifiers[1] + modifiers[2]
  }
  return armorClass
}
//Sets the hit points of the creature based off of the {creatureType[0]}
function HitPoints(challengeRating, creatureType, creatureSize, modifiers) {
  let hitPoints = [0, 0]
  if (creatureType == `Beast`) {
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
  return hitPoints
}
//Sets the speed of the creature based off of the {creatureType[0] and creatureType[1] and {modifiers[1]}}
function Speed(creatureType, abilityScores) {
  let speed0 = 0
  //used for fly
  let speed1 = 0
  //used for swim
  let speed2 = 0
  if (creatureType[0] == `Beast` ) {
    if (creatureType[1] == `Land`) {
      speed0 = Math.round((abilityScores[1] * 3) / 5) * 5
    } else if (creatureType[1] == `Air`) {
      speed0 = Math.round((abilityScores[1] * 2) / 5) * 5
      speed1 = Math.round((abilityScores[1] * 4) / 5) * 5
    } else if (creatureType[1] == `Water`) {
      speed2 = Math.round((abilityScores[1] * 3) / 5) * 5
    }
  }
  return [speed0, speed1, speed2]
}
//Sets profiency bonus based off of cr
function ProficiencyBonus(challengeRating) {
  //intialize proficiencyBonus to 0
  let proficiencyBonus = 0
  //set proficiencyBonuc based off of cr
  if (challengeRating <= 4) {
    prficiencyBonus = 2
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
//Sets the skills that Creature has
function Skills(creatureType, modifiers) {
  //initiallize skills to empty arrayt
  let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //array of all of the skill types
  let skillTypes = [`Acrobatics`, `Animal Handling`, `Arcana`, `Athletics`, `Deception`, `History`, `Insight`, `Intimidation`, `Investigation`, `Medicine`, `Nature`, `Perception`, `Performance`, `Persuasion`, `Religion`, `Sleight of Hand`, `Stealth`, `Survival`]

  //Sets the skills based on creature type
  if (creatureType[0] == `Beast`) {
    //sets skills based on secondary type
    skills = beastSkills(creatureType[1])
    
  } 


  //functions to get skils based on creature type
  function beastSkills(type2) {
    //generate the number of skills to have
    let numOfSkills = Math.floor(Math.random() * 4) + 1
    //options for skills
    let skillOptions = [3, 10, 11, 16, 17]
    // generate what skills to get
    for (let i = 0; i < numOfSkills; i++) {
      //get a random skill to genertate
      let tempSkill = Math.floor(Math.random() * 4)
      if (skills[skillOptions[tempSkill]] < 2) {
        skills[skillOptions[tempSkill]] += 1
      }

    }
    return skills
  }

  return skills
}

//A function to display what has been generated
function Display(challengeRating, creatureName, creatureSize, creatureType, alignment, armorClass, hitPoints, speed, abilityScores, modifiers, savingThrows, proficiencyBonus) {
  console.log(creatureName)
  console.log(creatureSize + ` ` + creatureType + `, ` + alignment)
  console.log(`Armor Class: ${armorClass}`)
  console.log(`Hit Points: ${hitPoints[0]} (${challengeRating}d${hitPoints[1] + hitPoints[1]-2}+${modifiers[2] * challengeRating})`)
  //code for adding flight and swim
  if (speed[1] != 0) {
    tempSpeedFlyText = `(fly: ${speed[1]} ft.)`
  } else {
    tempSpeedFlyText = ``
  }
  if (speed[2] != 0) {
    tempSpeedSwimText = `(swim: ${speed[2]} ft.)`
  } else {
    tempSpeedSwimText = ``
  }
  document.getElementById('Creature-Stats').innerHTML = `Speed: ${speed[0]} ft. ${tempSpeedFlyText}${tempSpeedSwimText}`
  console.log(`Speed: ${speed[0]} ft. ${tempSpeedFlyText}${tempSpeedSwimText}`)
  console.log(`STR DEX CON INT WIS CHA`)
  console.log(abilityScores)
  console.log(modifiers)
  console.log(savingThrows)
  console.log(`Challenge ${challengeRating}`)
  console.log(`Proficiency Bonus +${proficiencyBonus}`)
}

Main()