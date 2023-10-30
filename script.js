//Main class that calls all other function, this class is the only one that is called at the end.
function Main() {
  //gets the challenge rating for creature
  let challengeRating = ChallengeRating()
  //gets the type of the creature'
  let creatureType = CreatureType()
  //assings a name based off of crature type
  let creatureName = CreatureName(creatureType[0])
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
    creatureName = nameVar1 + nameVar2 + nameVar3
    console.log(creatureName)
  }
  return creatureName
}
Main()