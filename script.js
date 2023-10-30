//Main class that calls all other function, this class is the only one that is called at the end.
function Main() {
  //gets the challenge rating for creature
  let challengeRating = ChallengeRating()
  //gets the type of the creature
  let creatureType = CreatureType()
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
  let typeList = [`Beast`]
  let creatureType = typeList[0]
  let secondaryType = 'none'
  if (creatureType == `Beast`) {
    typeList = [`Air`, `Land`, `Water`]
    secondaryType = typeList[2]
  }
  return [creatureType, secondaryType]
}
Main()