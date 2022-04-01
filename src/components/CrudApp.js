import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialData = [
	{ id: 1, city: "Rome", country: "Italy" },
	{ id: 2, city: "London", country: "Great Britain" },
	{ id: 3, city: "Marseille", country: "France" },
	{ id: 4, city: "Barcelona", country: "Spain" }
];

const CrudApp = () => {
	const [dataToEdit, setDataToEdit] = useState(null);
	const [data, setData] = useState(initialData);
	const [lastId, setLastId] = useState(initialData.length + 1);

	const newElement = (newElement) => {
		newElement.id = lastId;
		setLastId(lastId + 1);
		setData([...data, newElement]);
	};
	const editElement = (editableElement) => {
		let newData = data.map(el => el.id === editableElement.id ? editableElement : el);
		setData(newData);
	};
	const removeElement = (id) => {
		let newData = data.filter(el => el.id !== id);
		setData(newData);
	};

	return (
		<div>
			<h3>{dataToEdit ? "Edit" : "Add new"}</h3>
			<CrudForm
				newElement={newElement}
				editElement={editElement}
				dataToEdit={dataToEdit}
				setDataToEdit={setDataToEdit}
			/>
			<CrudTable
				data={data}
				setDataToEdit={setDataToEdit}
				removeElement={removeElement}
			/>
		</div>
	);
}
export default CrudApp
