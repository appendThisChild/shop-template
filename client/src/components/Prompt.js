import React from 'react'

import { usePrompt } from "../context/PromptProvider.js"

const Prompt = () => {
    const { promptOn, promptMessage, endPrompt } = usePrompt()
    return(
        <div className={promptOn ? "promptOn" : "promptOff"}>
            <main>
                <h1>{promptMessage.mainMessage}</h1>
                <h2>{promptMessage.subMessage}</h2>
                <aside>
                    <button onClick={() => endPrompt(true)}>Yes</button>
                    <button onClick={() => endPrompt(false)}>No</button>
                </aside>
            </main>
        </div>
    )
}

export default Prompt;