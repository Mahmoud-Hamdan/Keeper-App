import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [note , setNote] = useState({
    title : "",
    content : ""
  });

  function handelChange(event){
      const {value , name } = event.target;

      setNote((prevNote)=>{
        return {
          ...prevNote ,
          [name] : value
        }
      })
  }

  function submitNote(event){

    if(note.title === "" || note.content === ""){

    }else{
      props.onAdd(note);
      setNote({title:"" , content:""}); 
      event.preventDefault();
    }
  }

  const [check , setCheck] = useState(false);

  function clicked(){
    return setCheck(true);
  }

  return (
    <div>
      <form className="create-note">
        {
          check ? <input name="title" placeholder="Title" value={note.title} onChange={handelChange}/> : null
        }
        <textarea name="content" placeholder="Take a note..." rows={check ? 4 : 1} value={note.content} onChange={handelChange} onClick={clicked}/>
        <Zoom in={check}>
          <Fab onClick={submitNote}> <AddIcon /></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
