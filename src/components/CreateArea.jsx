import React, { useState } from "react";

function CreateArea(props) {
    const [inputVal, setInput] = useState({title: "", content: ""});

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

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputVal.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputVal.content}/>
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;