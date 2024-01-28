//Sets the challenge rating
function ChallengeRating(idChallengeRating) {
    //Sets the challenge rating to temporary var
    //can change to random for a random cr or prompt the user for a cr
    let challengeRating = 1
    //if {challengeRating} is random create a random cr
    if (idChallengeRating == 'random') {
      challengeRating = Math.floor(Math.random() * 30 + 1)
    } else {
      challengeRating = idChallengeRating
    }
    return challengeRating
}
