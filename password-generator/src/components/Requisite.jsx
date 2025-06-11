import React, { useState } from 'react'
import './styles.css'


function Requisite() {
    const [text, setText] = useState(" Passwords will be generated here.")
    const [length, setLength] = useState(8);
    const [sp, setsp] = useState(false)
    const [num, setnum] = useState(false)
    const [up, setup] = useState(false)
    function saver() {
        const existing = JSON.parse(localStorage.getItem('passwords')) || [];
        existing.push(text); // Add the current password
        localStorage.setItem('passwords', JSON.stringify(existing)); // Save updated array
        alert("Password saved to localStorage!");
    }
    function genfunc() {
        let str = "qwertyuioplkjhgfdsazxcvbnm"
        if (up) { str = "QWERTYUIOPLKJHGFDSAZXCVBNM" }
        if (sp) { str += "!@#$%%^&*()" }
        if (num) { str += "1234567890" }

        let str_inp = ""
        for (let index = 0; index < length; index++) {
            let min = 0;
            let max = str.length - 1;
            let random = Math.floor(Math.random() * (max - min + 1)) + min;
            str_inp += str[random]
        }
        setText(str_inp)
        str_inp = ""
    }
    return (
        <div>
            <h1>Welcome to the password Manager</h1>
            <div className='text-for-pass-gen'>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={genfunc}> Generate </button>
                <button
                    onClick={saver}>Save</button>
            </div>
            <div className='sp-num'>
                <label>
                    <input
                        type="checkbox"
                        checked={sp}
                        onChange={(e) => setsp(!sp)}
                    />
                    Special Characters
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={num}
                        onChange={(e) => setnum(!num)}
                    />
                    Numbers
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={up}
                        onChange={(e) => setup(!up)}
                    />
                    All UpperCase
                </label>
            </div>
            <div className='length'>
                <button onClick={(e) => { if (length > 5) setLength(length - 1) }}> - </button>
                <textarea value={length} />
                <button onClick={(e) => { if (length < 15) setLength(length + 1) }}> + </button>
            </div>

        </div>
    )
}

export default Requisite
