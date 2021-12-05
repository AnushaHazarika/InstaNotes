function Editor(){
    return <div className="app-editor">
        <div className="editor-note-edit">
            <input type="text" id="title" autoFocus />
            <textarea id="body" placeholder="Enter your text..."/>
        </div>
        <div className="editor-note-preview">
            <h1 className="preview-title">TITLE</h1>
            <div className="preview-body">Note preview</div>
        </div>
    </div>
}

export default Editor;