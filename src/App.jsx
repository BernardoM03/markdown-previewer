import React from "react"
import { marked } from "marked"

export default function App() {
    const startMessage = "# H1\n"+ "## H2\n" +
"\`printf('goodbye world!')\`\n"+
"\`\`\` \n printf('goodbye world!') \n \`\`\` \n"+ "[title](https://www.example.com) \n" +  
"1. First item 2. Second item 3. Third item \n "+" 'span' \n " + " 	> blockquote  \n"+"![alt text](https://www.w3schools.com/images/lamp.jpg)  "+ " **bold text**";

    const [preview, setPreview] = React.useState(startMessage)

    function onChange(event) {
        const { value } = event.target
        setPreview(value)
    }

    function markdownToHTML() {
        const markup = marked.parse(preview)
        console.log({markup})
        return { __html: markup };
    }

    return (
        <main>
            <textarea className="editor" id="editor" onChange={onChange} defaultValue={startMessage}/>
            <h1>Preview</h1>
            <div className="preview" id="preview" dangerouslySetInnerHTML={markdownToHTML()}></div>
        </main>
    )
}