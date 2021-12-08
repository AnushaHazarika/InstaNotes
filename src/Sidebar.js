function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }){
    
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);

    return <div className="app-sidebar">

        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>ADD NEW</button>
        </div>

        <div className="app-sidebar-notes">

            {sortedNotes.map((note) => (
            <div 
                className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                onClick={()=> setActiveNote(note.id)}>
                
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                </div>

                <br/>
                {/* <p>{note.body && note.body.substr(0,20) + "..."}</p> */}

                <small className="note-meta">
                    Last Modified: {" "}
                    {new Date(note.lastModified).toLocaleDateString("en-GB", {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                    })}
                    {/* {note.lastModified.toLocaleDateString() + " " + note.lastModified.toLocaleTimeString()}  */}
                </small>
                
            </div>
            ))}
            
        </div>
    </div>
}

export default Sidebar;