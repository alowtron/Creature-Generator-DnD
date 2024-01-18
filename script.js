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

//A function to display what has been generated
function Display(challengeRating, creatureName, creatureSize, creatureType, alignment, armorClass, hitPoints, speed, abilityScores, modifiers, savingThrows, proficiencyBonus) {
  for (let i = 0; i < modifiers.length; i++) {
    if (modifiers[i] > 0) {
      let tempNumber = modifiers[i]
      modifiers[i] = "+" + tempNumber
    }
  }
  `Challenge: ${challengeRating}`
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
  document.getElementById('Creature-Stats').innerHTML = 
  `
  <p>Name: ${creatureName}</p>
  <p>${creatureSize} ${creatureType} ${alignment}</p>
  <p>Armor Class: ${armorClass}</p>
  <p>Hit Points: ${hitPoints[0]} (${challengeRating}d${hitPoints[1] + hitPoints[1]-2}+${modifiers[2] * challengeRating})</p>
  <p>Speed: ${speed[0]} ft. ${tempSpeedFlyText}${tempSpeedSwimText}</p>
  <div class="displayStats">
  <p>STR</p><p>DEX</p><p>CON</p><p>INT</p><p>WIS</p><p>CHA</p>
  <p>${abilityScores[0]} (${modifiers[0]})</p><p>${abilityScores[1]} (${modifiers[1]})</p>
  
  </div>
  <p>${abilityScores}</p>
  <p>${modifiers}</p>
  <p>${savingThrows}</p>
  <p>Challenge: ${challengeRating}</p>
  <p>Proficiency Bonus: +${proficiencyBonus}</p>
  `
  console.log(`Speed: ${speed[0]} ft. ${tempSpeedFlyText}${tempSpeedSwimText}`)
  console.log(`STR DEX CON INT WIS CHA`)
  console.log(abilityScores)
  console.log(modifiers)
  console.log(savingThrows)
  console.log(`Challenge ${challengeRating}`)
  console.log(`Proficiency Bonus +${proficiencyBonus}`)
}
