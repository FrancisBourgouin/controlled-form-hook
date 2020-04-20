# useControlledForm Hook

useControlledForm is a hook that manages inputs, and creates the necessary values for inputs fields, and adds a basic validator for required

## Usage

The hook accepts an array of field infos (only name is required) like this :

```
[...
  {
    name: "firstName", //required
    value: "Francis",
    placeholder: "First Name",
    required: true,
    type:text
  },
]
```

The hook returns 4 values :

```
[formValues, parsedFormData, handleInput, errors]
```

- _formValues_ is containing all the necessary to build your input in HTML
- _parsedFormData_ is an object containing all the name:values as key:value paries
- _handleInput_ is the method to update inputs
- _errors_ is the array containing the name of fields with validation errors
