import ReactMarkdown from 'react-markdown';

function Editor({ activeNote, onUpdateNote }){

    const onEditField = (key, value)=>{
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    const input = ()=>{ return activeNote?.body};

    if(!activeNote) 
        return <div className="no-active-note">No note selected</div>;
    
    return <div className="app-editor">

        <div className="editor-note-edit">

            <input 
                type="text" 
                id="title" 
                value={activeNote.title} 
                onChange={(e)=>onEditField("title", e.target.value)} 
                autoFocus 
            />

            <textarea 
                id="body" 
                value={activeNote.body} 
                placeholder="Enter your text..."
                onChange={(e)=>onEditField("body", e.target.value)}
            />

        </div>

        <div className="editor-note-preview">
            <h1 className="preview-title"> {activeNote.title} </h1>
            <ReactMarkdown className="preview-body" children={input()}/> 
            {/* {activeNote.body} </Markdown> */}
        </div>
        
    </div>
}

export default Editor;