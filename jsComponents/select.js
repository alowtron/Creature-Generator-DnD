function SelectedCreatureType(selectedCreatureType) {
    if (selectedCreatureType == "random") {
        document.getElementById("divCreatureType2").innerHTML = ''
    } else {
        document.getElementById("divCreatureType2").innerHTML = 
        `
        <h3>Land/Water/Air</h3>
        <select id="idCreatureType2" title="idCreatureType2" oninput="">
            <option value="random">Random</option>
            <option value="land">Land</option>
            <option value="water">Water</option>
            <option value="air">Air</option>
        </select>
        `
    }
    
}