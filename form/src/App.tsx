import { useState } from "react";
import "./App.css";

import InputField from "./components/InputField";
import CheckboxGroup from "./components/CheckboxGroup";
import FormResult from "./components/FormResult";
import RadioGroup from "./components/RadioGroup";

function App() {
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    setSubmitted(true);
  };
  return(
    <div className="container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Simple Form</h1>

        <InputField
          label="Description"
           placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}  
        />

         <RadioGroup
          label="Gender"
          name="gender"
          options={["Male", "Female"]}
          selectedValue={gender}
          onChange={setGender}
        />

          <CheckboxGroup
          label="Subjects"
          options={["Maths", "Science", "Social", "Health", "Computer"]}
          values={subjects}
          onChange={setSubjects}
        />

        <button className="submit-btn" type="submit">
          Submit
        </button>

        {submitted && (
          <FormResult
            description={description}
            gender={gender}
            subjects={subjects}
          />
        )}
      </form>
    </div>
  )

}
export default App;
