//Main class that calls all other function, this class is the only one that is called at the end.
function Main(idChallengeRating, idCreatureType, idCreatureType2, 
      idName,
      idSize, idStr, idDex, idCon, idInt, idWis, idCha, 
      idArmorClass, idHitPoints, 
      idMoveSpeed, idFlySpeed, idSwimSpeed,
      idSpecialAbilities1, idAttackNumber, idAttack1, idAttack2) {
  //gets the challenge rating for creature
  let challengeRating = ChallengeRating(idChallengeRating)
  //gets the type of the creature'
  let creatureType = Type(idCreatureType, idCreatureType2)
  //gets a name based off of creature type
  let creatureName = Name(creatureType[0], idName)
  //gets the size of the creature based off the creature type
  let creatureSize = Size(creatureType[0], creatureType[1], idSize)
  //gets the alignment of a creature based off the creature type
  let alignment = Alignment(creatureType[0])
  //gets the ability scores for the creature
  let abilityScores = AbilityScores(creatureType[0], creatureSize, idStr, idDex, idCon, idInt, idWis, idCha)
  //gets the modifiers for ability scores
  let modifiers = Modifiers(abilityScores)
  //gets the armor class of the creature
  let armorClass = ArmorClass(creatureType[0], modifiers, idArmorClass)
  //gets the hit points of the creature
  let hitPoints = HitPoints(challengeRating, creatureType[0], creatureSize, modifiers, idHitPoints)
  //gets the speed of the creature
  let speed = Speed(creatureType, abilityScores, idMoveSpeed, idFlySpeed, idSwimSpeed)
  //gets proficiencyBonus
  let proficiencyBonus = ProficiencyBonus(challengeRating)
  //gets saving throws
  let savingThrows = SavingThrows(modifiers, proficiencyBonus)
  //get skills
  let skills = Skills(creatureType, modifiers)
  //get abilities
  let specialAbilities = SpecialAbilities(challengeRating, creatureType, creatureName, abilityScores, modifiers, speed, idSpecialAbilities1) 
  //get attacks
  let attacks = Attacks(challengeRating, creatureType, creatureName, creatureSize, modifiers, proficiencyBonus, specialAbilities, idAttackNumber, idAttack1, idAttack2)


  //code to display creature on console
  Display(challengeRating, creatureName, creatureSize, creatureType[0], alignment, armorClass, hitPoints, speed, abilityScores, modifiers, savingThrows, proficiencyBonus, skills, specialAbilities, attacks)
}

//A function to display what has been generated
function Display(challengeRating, creatureName, creatureSize, creatureType, alignment, armorClass, hitPoints, speed, abilityScores, modifiers, savingThrows, proficiencyBonus, skills, specialAbilities, attacks) {
  //code for adding "+" in front of positive modifiers
  let modifiersDisplay = ModifiersDisplay(modifiers)
  
  //code for displaying saving throws
  let savingThrowsDisplay = SavingThrowsDisplay(savingThrows)
  
  //code to display the skills
  let skillDisplay = SkillDisplay(skills, modifiers, proficiencyBonus)

  //code for displaying hit points
  let hitPointsDisplay = HitPointsDisplay(hitPoints, challengeRating, modifiers)

  //code for adding flight and swim
  let tempSpeedFlyText = TempSpeedFlyText(speed)
  let tempSpeedSwimText = TempSpeedSwimText(speed)
  
  //display all of the attacks
  let attacksDisplay = AttacksDisplay(attacks)

  document.getElementById('Creature-Stats').innerHTML = 
  `
  <p><b>Name:</b> ${creatureName}</p>
  <p>${creatureSize} ${creatureType}, ${alignment}</p>
  <div class="border"></div>
  <p><b>Armor Class:</b> ${armorClass}</p>
  ${hitPointsDisplay}
  <p><b>Speed:</b> ${speed[0]} ft. ${tempSpeedFlyText}${tempSpeedSwimText}</p>
  <div class="border"></div>
  <div class="displayStats">
  <p>STR</p><p>DEX</p><p>CON</p><p>INT</p><p>WIS</p><p>CHA</p>
  <p class="roll" onclick="Roll(20, ${modifiers[0]}, 'STR')">${abilityScores[0]} (${modifiersDisplay[0]})</p>
  <p class="roll" onclick="Roll(20, ${modifiers[1]}, 'DEX')">${abilityScores[1]} (${modifiersDisplay[1]})</p>
  <p class="roll" onclick="Roll(20, ${modifiers[2]}, 'CON')">${abilityScores[2]} (${modifiersDisplay[2]})</p>
  <p class="roll" onclick="Roll(20, ${modifiers[3]}, 'INT')">${abilityScores[3]} (${modifiersDisplay[3]})</p>
  <p class="roll" onclick="Roll(20, ${modifiers[4]}, 'WIS')">${abilityScores[4]} (${modifiersDisplay[4]})</p>
  <p class="roll" onclick="Roll(20, ${modifiers[5]}, 'CHA')">${abilityScores[5]} (${modifiersDisplay[5]})</p>
  </div>
  <div class="border"></div>
  <p>${savingThrowsDisplay}</p>
  <p>${skillDisplay}</p>
  <p><b>Challenge:</b> ${challengeRating}</p>
  <p><b>Proficiency Bonus:</b> +${proficiencyBonus}</p>
  <div class="border"></div>
  <p><b>Special Abilities</b></P>
  ${specialAbilities[0]}
  <div class="border"></div>
  <p><b>Actions</b></p>
  ${attacks[0]}
  ${attacksDisplay}
  
  `
}

function AttacksDisplay(attacks) {
  let attacksDisplay = ``
  let i = 0
  while (attacks[1][i] != undefined) {
    attacksDisplay += attacks[1][i]
    i++
  }
  return attacksDisplay
}

function TempSpeedFlyText(speed){
  let tempSpeedFlyText = ``
  if (speed[1] != 0) {
    tempSpeedFlyText = `(fly: ${speed[1]} ft.)`
  } else {
    tempSpeedFlyText = ``
  }
  return tempSpeedFlyText
}

function TempSpeedSwimText(speed) {
  let tempSpeedSwimText = ``
  if (speed[2] != 0) {
    tempSpeedSwimText = `(swim: ${speed[2]} ft.)`
  } else {
    tempSpeedSwimText = ``
  }
  return tempSpeedSwimText
}

function HitPointsDisplay(hitPoints, challengeRating, modifiers) {
  if (Array.isArray(hitPoints)) {
    return `<p><b>Hit Points:</b> ${hitPoints[0]} (${challengeRating}d${hitPoints[1] + hitPoints[1]-2}+${modifiers[2] * challengeRating})</p>`
  } else {
    return `<p><b>Hit Points:</b> ${hitPoints} </p>`
  }
}

function ModifiersDisplay(modifiers) {
  let modifiersDisplay = []
  for (let i = 0; i < modifiers.length; i++) {
    if (modifiers[i] > 0) {
      modifiersDisplay[i] = "+" + modifiers[i]
    } else {
      modifiersDisplay[i] = String(modifiers[i])
    }
  }
  return modifiersDisplay
}

function SavingThrowsDisplay(savingThrows) {
  let savingThrowsDisplay = `<b>Saving Throws:</b>`
  for (let i = 0; i < savingThrows.length; i++) {
    if (savingThrows[i] > 0) {
      if (i == 0) {
        savingThrowsDisplay += ` STR: <b class="roll" onclick="Roll(20, ${savingThrows[i]}, 'STR')">+${savingThrows[i]}</b>,`
      } else if (i == 1) {
        savingThrowsDisplay += ` DEX: <b class="roll" onclick="Roll(20, ${savingThrows[i]}, 'DEX')">+${savingThrows[i]}</b>,`
      } else if (i == 2) {
        savingThrowsDisplay += ` CON: <b class="roll" onclick="Roll(20, ${savingThrows[i]}, 'CON')">+${savingThrows[i]}</b>,`
      } else if (i == 3) {
        savingThrowsDisplay += ` INT: <b class="roll" onclick="Roll(20, ${savingThrows[i]}, 'INT')">+${savingThrows[i]}</b>,`
      } else if (i == 4) {
        savingThrowsDisplay += ` WIS: <b class="roll" onclick="Roll(20, ${savingThrows[i]}, 'WIS')">+${savingThrows[i]}</b>,`
      } else if (i == 5) {
        savingThrowsDisplay += ` CHA: <b class="roll" onclick="Roll(20, ${savingThrows[i]}, 'CHA')">+${savingThrows[i]}</b>,`
      }
    }
    //check to see if anything is in array
    if (i == savingThrows.length - 1) {
      savingThrowsDisplay = savingThrowsDisplay.substring(0, savingThrowsDisplay.length-1)
    }
  }
  return savingThrowsDisplay
}

function SkillDisplay(skills, modifiers, proficiencyBonus) {
  //array of all of the skill types
  let skillTypes = [`Acrobatics`, `Animal Handling`, `Arcana`, `Athletics`, `Deception`, `History`, `Insight`, `Intimidation`, `Investigation`, `Medicine`, `Nature`, `Perception`, `Performance`, `Persuasion`, `Religion`, `Sleight of Hand`, `Stealth`, `Survival`]

  let skillDisplay = `<b>Skills:</b>`
  for (let i = 0; i < skills.length; i++) {
    if (i == 0 && skills[i] == 1) {
      if ((modifiers[1] + proficiencyBonus) > 0) {
        skillDisplay += ` Acrobatics <b class="roll" onclick="Roll(20, ${(modifiers[1] + proficiencyBonus)}, 'Acrobatics')">+` + (modifiers[1] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 1 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Animal Handling <b class="roll" onclick="Roll(20, ${(modifiers[4] + proficiencyBonus)}, 'Animal Handling')">+` + (modifiers[4] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 2 && skills[i] == 1)) {
      if ((modifiers[3] + proficiencyBonus) > 0) {
        skillDisplay += ` Arcana <b class="roll" onclick="Roll(20, ${(modifiers[3] + proficiencyBonus)}, 'Arcana')">+` + (modifiers[3] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 3 && skills[i] == 1)) {
      if ((modifiers[0] + proficiencyBonus) > 0) {
        skillDisplay += ` Athletics <b class="roll" onclick="Roll(20, ${(modifiers[0] + proficiencyBonus)}, 'Athletics')">+` + (modifiers[0] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 4 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Deception <b class="roll" onclick="Roll(20, ${(modifiers[5] + proficiencyBonus)}, 'Deception')">+` + (modifiers[5] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 5 && skills[i] == 1)) {
      if ((modifiers[3] + proficiencyBonus) > 0) {
        skillDisplay += ` History <b class="roll" onclick="Roll(20, ${(modifiers[3] + proficiencyBonus)}, 'History')">+` + (modifiers[3] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 6 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Insight <b class="roll" onclick="Roll(20, ${(modifiers[4] + proficiencyBonus)}, 'Insight')">+` + (modifiers[4] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 7 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Intimidation <b class="roll" onclick="Roll(20, ${(modifiers[5] + proficiencyBonus)}, 'Intimidation')">+` + (modifiers[5] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 8 && skills[i] == 1)) {
      if ((modifiers[3] + proficiencyBonus) > 0) {
        skillDisplay += ` Investigation <b class="roll" onclick="Roll(20, ${(modifiers[3] + proficiencyBonus)}, 'Investigation')">+` + (modifiers[3] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 9 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Medicine <b class="roll" onclick="Roll(20, ${(modifiers[4] + proficiencyBonus)}, 'Medicine')">+` + (modifiers[4] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 10 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Nature <b class="roll" onclick="Roll(20, ${(modifiers[4] + proficiencyBonus)}, 'Nature')">+` + (modifiers[4] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 11 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Perception <b class="roll" onclick="Roll(20, ${(modifiers[4] + proficiencyBonus)}, 'Perception')">+` + (modifiers[4] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 12 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Performance <b class="roll" onclick="Roll(20, ${(modifiers[5] + proficiencyBonus)}, 'Performance')">+` + (modifiers[5] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 13 && skills[i] == 1)) {
      if ((modifiers[5] + proficiencyBonus) > 0) {
        skillDisplay += ` Persuasion <b class="roll" onclick="Roll(20, ${(modifiers[5] + proficiencyBonus)}, 'Persuasion')">+` + (modifiers[5] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 14 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Religion <b class="roll" onclick="Roll(20, ${(modifiers[4] + proficiencyBonus)}, 'Religion')">+` + (modifiers[4] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 15 && skills[i] == 1)) {
      if ((modifiers[1] + proficiencyBonus) > 0) {
        skillDisplay += ` Sleight of Hand <b class="roll" onclick="Roll(20, ${(modifiers[1] + proficiencyBonus)}, 'Sleight of Hand')">+` + (modifiers[1] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 16 && skills[i] == 1)) {
      if ((modifiers[1] + proficiencyBonus) > 0) {
        skillDisplay += ` Stealth <b class="roll" onclick="Roll(20, ${(modifiers[1] + proficiencyBonus)}, 'Stealth')">+` + (modifiers[1] + proficiencyBonus) + `</b>,`
      }
    } else if ((i == 17 && skills[i] == 1)) {
      if ((modifiers[4] + proficiencyBonus) > 0) {
        skillDisplay += ` Survival <b class="roll" onclick="Roll(20, ${(modifiers[4] + proficiencyBonus)}, 'Survival')">+` + (modifiers[4] + proficiencyBonus) + `</b>,`
      }
    }
    if (i == skills.length - 1) {
      skillDisplay = skillDisplay.substring(0, skillDisplay.length-1)
    }
  }
  return skillDisplay
}

function Roll(diceSize, modifier, skillName, attackDiceNumber = 1) {
  let counter = 0
  let randomNumber = 0
  while (counter < attackDiceNumber) {
    randomNumber += Math.floor(Math.random() * diceSize) + 1 * attackDiceNumber
    counter++
  }
  alert(`(${attackDiceNumber}d${diceSize}) ${randomNumber} + (${skillName}) ${modifier} = ${randomNumber + modifier}`)
}