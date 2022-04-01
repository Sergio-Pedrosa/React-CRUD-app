import React from "react";

const CrudTableRow = ({ element, setDataToEdit, removeElement }) => {
	let { city, country, id } = element;
	return (
		<tr>
			<td>{country}</td>
			<td>{city}</td>
			<td>
				<button onClick={() => { setDataToEdit(element) }}>Edit</button>
				<button onClick={() => { removeElement(id) }}>Delete</button>
			</td>
		</tr>
	);
}
export default CrudTableRow;
