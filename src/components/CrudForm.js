import React, { useEffect, useState } from "react";

const initialForm = {
	id: null,
	city: "",
	country: ""
};

const CrudForm = ({ newElement, editElement, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState(initialForm);
	useEffect(() => {
		dataToEdit ? setForm(dataToEdit) : setForm(initialForm);
	}, [dataToEdit]);
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.city.trim() || !form.country.trim()) {
			alert("Empty field(s)");
			return;
		}
		if (form.id === null) {
			newElement(form);
		} else {
			editElement(form);
		}
		handleReset(e);
	};
	const handleReset = (e) => {
		e.preventDefault();
		setForm(initialForm);
		setDataToEdit(false);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="country" id="country" onChange={handleChange} value={form.country} placeholder="Country" />
				<input type="text" name="city" id="city" onChange={handleChange} value={form.city} placeholder="City" />
				<button onClick={handleSubmit}>Send</button>
				<button onClick={handleReset}>Reset</button>
			</form>
		</div>
	);
}

export default CrudForm;
