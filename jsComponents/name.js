//makes a name base off of the creature type
function Name(creatureType) {
    //initializes creatures name to blank string
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