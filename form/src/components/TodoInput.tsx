import { useState , useRef} from "react";

type Props={
    onAdd: (text:string)=>void;
}

function TodoInput({onAdd}:Props){
    const [text,setText]=useState("");
    const inputRef=useRef<HTMLInputElement>(null);      
    const handleAdd=()=>{
        if(!text.trim())return;
            onAdd(text);
            setText("");
            inputRef.current?.focus();
    }
    return(
        <div className="todo-input">
            <input
                type="text"
                ref={inputRef}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
export default TodoInput;