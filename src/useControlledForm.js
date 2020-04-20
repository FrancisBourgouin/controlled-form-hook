import { useState, useEffect } from "react";

export const useControlledForm = (formInputs) => {
	const parsedFormInputs = (formInputs) => {
		const output = {};
		formInputs.forEach((formInput) => {
			const {
				name,
				value = "",
				placeholder = "",
				required = false,
				type = "text",
			} = formInput;

			output[name] = { name, value, placeholder, required, type };
		});
		return output;
	};

	const [formValues, setFormValues] = useState(parsedFormInputs(formInputs));
	const [errors, setErrors] = useState([]);

	// useEffect(() => {
	// 	const parsedFormInputs = formInputs.map((formInput) => {
	// 		const {
	// 			name,
	// 			value = "",
	// 			placeholder = "",
	// 			required = false,
	// 			type = "text",
	// 		} = formInput;
	// 		return { name, value, placeholder, required, type };
	// 	});

	// 	setFormValues(parsedFormInputs);
	// }, []);

	const handleInput = (e) => {
		const { name, value } = e.target;
		const newFormValues = { ...formValues };

		newFormValues[name].value = value;
		setFormValues(newFormValues);
	};

	useEffect(() => {
		const newErrors = [];
		for (const name in formValues) {
			const { required, value } = formValues[name];
			if (required && !value) {
				newErrors.push(name);
			}
		}
		setErrors(newErrors);
	}, [formValues]);

	const parsedFormData = {};
	Object.values(formValues).forEach(
		({ name, value }) => (parsedFormData[name] = value)
	);

	return [Object.values(formValues), parsedFormData, handleInput, errors];
};
