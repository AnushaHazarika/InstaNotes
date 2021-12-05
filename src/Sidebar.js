function Sidebar({ notes, onAddNote }){
    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>ADD NEW</button>
        </div>
        <div className="app-sidebar-notes">

            {notes.map((notes) => (
                <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>TITLE</strong>
                    <button>Delete</button>
                </div>

                <p>Note Preview</p>

                <small className="note-meta">Last Modified [note]</small>
            </div>
            ))}
            
        </div>
    </div>
}

export default Sidebar;