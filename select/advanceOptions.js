function AdvanceOptions(onOf) {
    if (onOf == 'true') {
        window.confirm()
        document.getElementById('divAdvanceOptionsToggle').innerHTML = `
        <button onclick="AdvanceOptions(value)" value="false">
            Toggle Advance Options
        </button>`
        document.getElementById('divAdvanceOptions').innerHTML = `<div id="idAdvanceOptions"></div>`
    } else {
        
        document.getElementById('divAdvanceOptionsToggle').innerHTML = `
        <button onclick="AdvanceOptions(value)" value="true">
            Toggle Advance Options
        </button>`
        document.getElementById('divAdvanceOptions').innerHTML = 
        `
        <h3>temp</h3>
        `
    }
}