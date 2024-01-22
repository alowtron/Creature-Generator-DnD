//Main class that calls all other function, this class is the only one that is called at the end.
function Main() {
  //gets the challenge rating for creature
  let challengeRating = ChallengeRating()
  //gets the type of the creature'
  let creatureType = Type()
  //gets a name based off of creature type
  let creatureName = Name(creatureType[0])
  //gets the size of the creature based off the creature type
  let creatureSize = Size(creatureType[0], creatureType[1])
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
  Display(challengeRating, creatureName, creatureSize, creatureType[0], alignment, armorClass, hitPoints, speed, abilityScores, modifiers, savingThrows, proficiencyBonus, skills)
}

//A function to display what has been generated
function Display(challengeRating, creatureName, creatureSize, creatureType, alignment, armorClass, hitPoints, speed, abilityScores, modifiers, savingThrows, proficiencyBonus, skills) {
  //code for adding "+" in front of positive modifiers
  let modifiersDisplay = []
  for (let i = 0; i < modifiers.length; i++) {
    if (modifiers[i] > 0) {
      modifiersDisplay[i] = "+" + modifiers[i]
    } else {
      modifiersDisplay[i] = String(modifiers[i])
    }
  }
  //code for displaying saving throws
  let savingThrowsDisplay = `<b>Saving Throws:</b>`
  for (let i = 0; i < savingThrows.length; i++) {
    if (savingThrows[i] > 0) {
      if (i == 0) {
        savingThrowsDisplay += ` STR: +${savingThrows[i]},`
      } else if (i == 1) {
        savingThrowsDisplay += ` DEX: +${savingThrows[i]},`
      } else if (i == 2) {
        savingThrowsDisplay += ` CON: +${savingThrows[i]},`
      } else if (i == 3) {
        savingThrowsDisplay += ` INT: +${savingThrows[i]},`
      } else if (i == 4) {
        savingThrowsDisplay += ` WIS: +${savingThrows[i]},`
      } else if (i == 5) {
        savingThrowsDisplay += ` CHA: +${savingThrows[i]},`
      }
    }
    //check to see if anything is in array
    if (i == savingThrows.length - 1) {
      savingThrowsDisplay = savingThrowsDisplay.substring(0, savingThrowsDisplay.length-1)
    }
  }
  //code to display the skills
  let skillDisplay = SkillDisplay(skills, modifiers, proficiencyBonus)

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
  <p><b>Name:</b> ${creatureName}</p>
  <p>${creatureSize} ${creatureType}, ${alignment}</p>
  <div class="border"></div>
  <p><b>Armor Class:</b> ${armorClass}</p>
  <p><b>Hit Points:</b> ${hitPoints[0]} (${challengeRating}d${hitPoints[1] + hitPoints[1]-2}+${modifiers[2] * challengeRating})</p>
  <p><b>Speed:</b> ${speed[0]} ft. ${tempSpeedFlyText}${tempSpeedSwimText}</p>
  <div class="border"></div>
  <div class="displayStats">
  <p>STR</p><p>DEX</p><p>CON</p><p>INT</p><p>WIS</p><p>CHA</p>
  <p>${abilityScores[0]} (${modifiersDisplay[0]})</p><p>${abilityScores[1]} (${modifiersDisplay[1]})</p><p>${abilityScores[2]} (${modifiersDisplay[2]})</p><p>${abilityScores[3]} (${modifiersDisplay[3]})</p><p>${abilityScores[4]} (${modifiersDisplay[4]})</p><p>${abilityScores[5]} (${modifiersDisplay[5]})</p>
  </div>
  <div class="border"></div>
  <p>${savingThrowsDisplay}</p>
  <p>${skillDisplay}</p>
  <p><b>Challenge:</b> ${challengeRating}</p>
  <p><b>Proficiency Bonus:</b> +${proficiencyBonus}</p>
  <div class="border"></div>
  <p><b>Special Abilities</b></P>
  <div class="border"></div>
  <p><b>Actions</b></p>
  `
}


function SkillDisplay(skills, modifiers, proficiencyBonus) {
  //array of all of the skill types
  let skillTypes = [`Acrobatics`, `Animal Handling`, `Arcana`, `Athletics`, `Deception`, `History`, `Insight`, `Intimidation`, `Investigation`, `Medicine`, `Nature`, `Perception`, `Performance`, `Persuasion`, `Religion`, `Sleight of Hand`, `Stealth`, `Survival`]

  let skillDisplay = `<b>Skills:</b>`
  for (let i = 0; i < skills.length; i++) {
    if (i == 0 && skills[i] == 1) {
      if ((modifiers[1] + proficiencyBonus) > 0) {
        skillDisplay += ` Acrobatics +` + (modifiers[1] + proficiencyBonus) + `,`
      }
    } else if ((i == 1 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Animal Handling +` + (modifiers[4] + proficiencyBonus) + `,`
      }
    } else if ((i == 2 && skills[i] == 1)) {
      if ((modifiers[3] + proficiencyBonus) > 0) {
        skillDisplay += ` Arcana +` + (modifiers[3] + proficiencyBonus) + `,`
      }
    } else if ((i == 3 && skills[i] == 1)) {
      if ((modifiers[0] + proficiencyBonus) > 0) {
        skillDisplay += ` Athletics +` + (modifiers[0] + proficiencyBonus) + `,`
      }
    } else if ((i == 4 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Deception +` + (modifiers[5] + proficiencyBonus) + `,`
      }
    } else if ((i == 5 && skills[i] == 1)) {
      if ((modifiers[3] + proficiencyBonus) > 0) {
        skillDisplay += ` History +` + (modifiers[3] + proficiencyBonus) + `,`
      }
    } else if ((i == 6 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Insight +` + (modifiers[4] + proficiencyBonus) + `,`
      }
    } else if ((i == 7 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Intimidation +` + (modifiers[5] + proficiencyBonus) + `,`
      }
    } else if ((i == 8 && skills[i] == 1)) {
      if ((modifiers[3] + proficiencyBonus) > 0) {
        skillDisplay += ` Investigation +` + (modifiers[3] + proficiencyBonus) + `,`
      }
    } else if ((i == 9 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Medicine +` + (modifiers[4] + proficiencyBonus) + `,`
      }
    } else if ((i == 10 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Nature +` + (modifiers[4] + proficiencyBonus) + `,`
      }
    } else if ((i == 11 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Perception +` + (modifiers[4] + proficiencyBonus) + `,`
      }
    } else if ((i == 12 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Performance +` + (modifiers[5] + proficiencyBonus) + `,`
      }
    } else if ((i == 13 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Persuasion +` + (modifiers[5] + proficiencyBonus) + `,`
      }
    } else if ((i == 14 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` religion +` + (modifiers[4] + proficiencyBonus) + `,`
      }
    } else if ((i == 15 && skills[i] == 1)) {
      if ((modifiers[1] + proficiencyBonus) > 0) {
        skillDisplay += ` Sleight of Hand +` + (modifiers[1] + proficiencyBonus) + `,`
      }
    } else if ((i == 16 && skills[i] == 1)) {
      if ((modifiers[1] + proficiencyBonus) > 0) {
        skillDisplay += ` Stealth +` + (modifiers[1] + proficiencyBonus) + `,`
      }
    } else if ((i == 17 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Survival +` + (modifiers[4] + proficiencyBonus) + `,`
      }
    }
    if (i == skills.length - 1) {
      skillDisplay = skillDisplay.substring(0, skillDisplay.length-1)
    }
  }
  return skillDisplay
}