//Sets the challenge rating
function ChallengeRating() {
    //Sets the challenge rating to temporary var
    //can change to random for a random cr or prompt the user for a cr
    let challengeRating = 20
    //if {challengeRating} is random create a random cr
    if (challengeRating == 'random') {
      challengeRating = Math.floor(Math.random() * 30 + 1)
    }
    return challengeRating
}
