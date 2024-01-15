//Sets the ability score of the creature
function AbilityScores(creatureType, creatureSize) {
    /*This part of the code works by calling a function based off of the type of creature, and the function creates a value based off of the size and type of the creature*/
    //initializes all of the ability scores to 0
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

    //function for finding abilities of creatures
    //function for finding STR of tiny creatures
    function StrTiny() {
        let tempScore = 2 + Math.floor(Math.random() * 7)
        return tempScore
    }
    //function for finding DEX of tiny creature
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