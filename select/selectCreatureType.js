function SelectedCreatureType(selectedCreatureType) {
    if (selectedCreatureType == "random") {
        document.getElementById("divCreatureType2").innerHTML = '<div id="idCreatureType2"></div>'
    } else {
        document.getElementById("divCreatureType2").innerHTML = 
        `
        <h3>Land/Water/Air</h3>
        <select id="idCreatureType2" title="idCreatureType2" oninput="SelectedCreatureBeast(value)">
            <option value="random">Random</option>
            <option value="land">Land</option>
            <option value="water">Water</option>
            <option value="air">Air</option>
        </select>
        `
    }
    
}


function SelectedCreatureBeast(CreatureType2) {
    if (CreatureType2 == 'random') {
        document.getElementById("divSpecialAbilities1").innerHTML = `<div id="idSpecialAbilities1"></div>`
    } else if (CreatureType2 == 'land') {
        document.getElementById('divSpecialAbilities1').innerHTML = 
        `
        <h3>Charge/Pounce</h3>
        <select id="idSpecialAbilities1" title="idSpecialAbilities1">
            <option value="random">Random</option>
            <option value="charge">Charge</option>
            <option value="pounce">Pounce</option>
        </select>
        `
    } else if (CreatureType2 == 'water') {
        document.getElementById('divSpecialAbilities1').innerHTML = 
        `
        <h3>Charge</h3>
        <select id="idSpecialAbilities1" title="idSpecialAbilities1">
            <option value="random">Random</option>
            <option value="charge">Charge</option>
        </select>
        `
    } else if (CreatureType2 == 'air') {
        document.getElementById('divSpecialAbilities1').innerHTML = 
        `
        <h3>Pounce/Flyby</h3>
        <select id="idSpecialAbilities1" title="idSpecialAbilities1">
            <option value="random">Random</option>
            <option value="pounce">Pounce</option>
            <option value="flyby">Fly By</option>
        </select>
        `
    }
}