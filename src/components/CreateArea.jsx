import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [inputVal, setInput] = useState({title: "", content: ""});

    const [isExpanded, setExpand] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setInput((prev) => {
            return({
                ...prev,
                [name]: value
            }

            )
        });
    }

    function onSubmit(event){
        event.preventDefault();
        props.onAdd(inputVal);
        setInput(() => {
            return{title: "", content: ""}
        });
    }

    function expand(){
        setExpand(true);
    }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={inputVal.title}/>}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ?"3" :"1"} value={inputVal.content}/>
        <Zoom in={isExpanded}>
            <Fab onClick={onSubmit}>
                <AddIcon/>
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;