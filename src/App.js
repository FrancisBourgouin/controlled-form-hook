import React from "react";
import "./App.css";
import { useControlledForm } from "./useControlledForm";

function App() {
  const [formValues, parsedFormData, handleInput, errors] = useControlledForm([
    {
      name: "firstName",
      value: "Francis",
      placeholder: "First Name",
      required: true,
    },
    {
      name: "lastName",
      placeholder: "Last Name",
    },
    {
      name: "email",
      placeholder: "Email Address",
      required: true,
      type: "email",
    },
  ]);
  const inputFields = formValues.map((formInput) => {
    const { name, placeholder, type, required, value } = formInput;

    return (
      <input
        {...{
          key: name,
          name,
          value: value,
          placeholder,
          onChange: handleInput,
          type,
          required,
        }}
      />
    );
  });

  return (
    <div className="App">
      <h1>Controlled Form custom hook, example inputs :</h1>
      <form>{inputFields}</form>
      <section>
        <h2>Errors Array</h2>
        {errors.map((error, i) => (
          <p
            key={`${error.name}-${i}`}
          >{`name: ${error.name}, placeholder: ${error.placeholder}`}</p>
        ))}
      </section>
      <section>
        <h2>Output of formValues</h2>
        <pre
          style={{
            textAlign: "left",
            margin: "0 auto",
            display: "inline-block",
          }}
        >
          {JSON.stringify(formValues, undefined, 2)}
        </pre>
      </section>
      <section>
        <h2>Output of parsedFormData</h2>
        <pre
          style={{
            textAlign: "left",
            margin: "0 auto",
            display: "inline-block",
          }}
        >
          {JSON.stringify(parsedFormData, undefined, 2)}
        </pre>
      </section>
    </div>
  );
}

export default App;
