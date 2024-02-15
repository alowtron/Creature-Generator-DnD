function AdvanceOptions(onOf) {
    if (onOf == 'true') {
        let leave = window.confirm('Are you sure you want to disable? Options selected will be lost.')
        if (leave) {
            ModifierOptions(true)
            SpeedOptions(true)
            document.getElementById('divAdvanceOptionsToggle').innerHTML = `
        <button onclick="AdvanceOptions(value)" value="false">
            Toggle Advance Options
        </button>`
        document.getElementById('divAdvanceOptions').innerHTML =
        `
        

        <div id="idSize"></div>

        <div id="idHitPoints"></div>
        <div id="idArmorClass"></div>

        <div id="idAttackNumber"></div>


        `
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
        <h3>
            Creature Size
        </h3>
        <select id="idSize">
            <option value="random">Random</option>
            <option value="Tiny">Tiny</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Huge">Huge</option>
        </select>

        <label for="idHitPoints">
            <h3>
                Hit Points(0 for random)
            </h3>
        </label>
        <input id="idHitPoints" type="number" name="idHitPoints" value="0">

        <label for="idArmorClass">
            <h3>
                Armor Class(0 for random)
            </h3>
        </label>
        <input id="idArmorClass" type="number" name="idArmorClass" value="0">

        <h3>
            Number of Attacks
        </h3>
        <select id="idAttackNumber">
            <option value="default">Default</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>

        </div>

        <hr>

        <h3>
            Modifier Options
        </h3>
        <div id="divAdvanceModifierOptionsToggle">
            <button onclick="ModifierOptions(value)" value="false">
                Toggle Advance Ability Score Options
            </button>
        </div>

        <hr>
        
        <h3>
            Speed Options
        </h3>
        <div id="divAdvanceMoveOptionsToggle">
            <button onclick="SpeedOptions(value)" value="false">
                Toggle Advance Speed Options
            </button>
        </div>
        
        `
    }
}

function ModifierOptions(modifierOnOF) {
    if (modifierOnOF == true) {
        let leaveModifierOptions = window.confirm('Are you sure you want to disable? Speed options selected will be lost.')
        if (leaveModifierOptions) {
            document.getElementById('divAdvanceModifierOptionsToggle').innerHTML = 
            `
            <button onclick="ModifierOptions(value)" value="false">
                Toggle Advance Ability Score Options
            </button>
            `
            document.getElementById('divAdvanceModifierOptions').innerHTML = 
            `
            <div id="idStr"></div>
            <div id="idDex"></div>
            <div id="idCon"></div>
            <div id="idInt"></div>
            <div id="idWis"></div>
            <div id="idCha"></div>
            `
        } else {
            return
        }
        
    } else {
        document.getElementById('divAdvanceModifierOptionsToggle').innerHTML = `
        <button onclick="SpeedOptions(value)" value="true">
            Toggle Advance Ability Score Options
        </button>
        <!-- Modifiers for six core stats -->
        <h3>
            Strength
        </h3>
        <select id="idStr" title="idStr">
            <option value="random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
        </select>


        <h3>
            Dexterity
        </h3>
        <select id="idDex" title="idDex">
            <option value="random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
        </select>


        <h3>
            Constitution
        </h3>
        <select id="idCon" title="idCon">
            <option value="random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
        </select>

        <h3>
            Intelligence
        </h3>
        <select id="idInt" title="idInt">
            <option value="random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
        </select>


        <h3>
            Wisdom
        </h3>
        <select id="idWis" title="idWis">
            <option value="random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
        </select>


        <h3>
            Charisma
        </h3>
        <select id="idCha" title="idCha">
            <option value="random">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
        </select>
        `
        document.getElementById('divAdvanceModifierOptions').innerHTML = 
        `
        

        `
    }
    
}

function SpeedOptions(speedOnOF) {
    if (speedOnOF == true) {
        let leaveSpeedOptions = window.confirm('Are you sure you want to disable? Speed options selected will be lost.')
        if (leaveSpeedOptions) {
            document.getElementById('divAdvanceMoveOptionsToggle').innerHTML = 
            `
            <button onclick="SpeedOptions(value)" value="false">
                Toggle Advance Speed Options
            </button>
            `
            document.getElementById('divAdvanceMoveOptions').innerHTML = 
            `
            
            <div id="idMoveSpeed"></div>
            <div id="idFlySpeed"></div>
            <div id="idSwimSpeed"></div>
            
            `
        } else {
            return
        }
        
    } else {
        document.getElementById('divAdvanceMoveOptionsToggle').innerHTML = `
        <button onclick="SpeedOptions(value)" value="true">
            Toggle Advance Options
        </button>
        <label for="idMoveSpeed">
            <h3>
                Walk Speed(0 for default)
            </h3>
        </label>
        <input id="idMoveSpeed" type="number" name="idMoveSpeed" value="0">

        <label for="idFlySpeed">
            <h3>
                Fly Speed(0 for default)
            </h3>
        </label>
        <input id="idFlySpeed" type="number" name="idFlySpeed" value="0">

        <label for="idSwimSpeed">
            <h3>
                Swim Speed(0 for default)
            </h3>
        </label>
        <input id="idSwimSpeed" type="number" name"idSwimSpeed" value="0">
        `
        document.getElementById('divAdvanceMoveOptions').innerHTML = 
        `
        `
    }
    
}