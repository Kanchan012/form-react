import { useState , useRef, useEffect} from "react";

type Props={
    onAdd: (text:string)=>void;
}

function TodoInput({onAdd}:Props){
    const [text,setText]=useState("");
    const inputRef=useRef<HTMLInputElement>(null);  
    
     useEffect(() => {
    inputRef.current?.focus();
  }, []);

    const handleAdd=()=>{
        if(!text.trim())return;
            onAdd(text);
            setText("");
            inputRef.current?.focus();
    }

     const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };
    return(
        <div className="todo-input">
            <input
                type="text"
                ref={inputRef}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                onKeyDown={handleEnter}
                placeholder="Enter a new task"
            />
            <button onClick={handleAdd} className="btn-add">Add</button>
        </div>
    );
}
export default TodoInput;