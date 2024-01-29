function AdvanceOptions(onOf) {
    if (onOf == 'true') {
        let leave = window.confirm('Are you sure you want to disable? Options selected will be lost.')
        if (leave) {
            document.getElementById('divAdvanceOptionsToggle').innerHTML = `
        <button onclick="AdvanceOptions(value)" value="false">
            Toggle Advance Options
        </button>`
        document.getElementById('divAdvanceOptions').innerHTML = `<div id="idAdvanceOptions"></div>`
        } else {
            return
        }
        
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