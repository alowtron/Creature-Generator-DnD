//Main class that calls all other function, this class is the only one that is called at the end.
function Main() {
  //gets the challenge rating for creature
  let challengeRating = ChallengeRating()
  //gets the type of the creature'
  let creatureType = CreatureType()
  //assings a name based off of crature type
  let creatureName = CreatureName(creatureType[0])
  //gets the size of the creature based off the creature type
  let creatureSize = CreatureSize(creatureType[0], creatureType[1])
  //gets the alignment of a creature based off the crature type
  let alignment = Alignment(creatureType[0])
  //gets the ability scores for the creature
  let abilityScores = AbilityScores(creatureType[0], creatureSize)
  //gets the modifiers for ability scores
  let modifiers = Modifiers(abilityScores)
  //gets the armor class of the creature
  let armorClass = ArmorClass(creatureType[0], modifiers)

  //temp code to display creature on console
  TempDisplay(creatureName, creatureSize, creatureType[0], alignment, armorClass, abilityScores, modifiers)
}
//Sets the challenge rating
function ChallengeRating() {
  //Sets the challenge rating to temperary var
  //can chage to to random for a random cr or prompt the user for a cr
  let challengeRating = 5
  //if {challengeRating} is random create a random cr
  if (challengeRating == 'random') {
    challengeRating = Math.floor(Math.random() * 30 + 1)
  }
  return challengeRating
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
    secondaryType = typeList[2]
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
//sets the armor class based off of {creatureType} and {modifiers}
function ArmorClass(creatureType, modifiers) {
  //sets armor class to 10
  let armorClass = 10
  if (creatureType == `Beast`) {
    armorClass = 10 + modifiers[1] + modifiers[2]
  }
  return armorClass
}

//A function to temp display what has been generated
function TempDisplay(creatureName, creatureSize, creatureType, alignment, armorClass, abilityScores, modifiers) {
  console.log(creatureName)
  console.log(creatureSize + ` ` + creatureType + `, ` + alignment)
  console.log(`Armor Class: ${armorClass}`)
  console.log(`STR DEX CON INT WIS CHA`)
  console.log(abilityScores)
  console.log(modifiers)
}

Main()