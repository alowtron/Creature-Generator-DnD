function SelectedCreatureType(selectedCreatureType) {
    if (selectedCreatureType == "random") {
        document.getElementById("idCreatureType2").innerHTML = ''
    } else {
        document.getElementById("idCreatureType2").innerHTML = 
        `
        <h3>Land/Water/Air</h3>
        <select name="idCreatureType2" title="idCreatureType2" oninput="">
            <option value="random">Random</option>
            <option value="land">Land</option>
            <option value="later">Water</option>
            <option value="air">Air</option>
        </select>
        `
    }
    
}