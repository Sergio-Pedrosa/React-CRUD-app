import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, removeElement }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Country</th>
					<th>City</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{data ? (
					data.map(el =>
						<CrudTableRow
							element={el}
							setDataToEdit={setDataToEdit}
							removeElement={removeElement}
							key={el.id}
						/>)
				) : (
					<tr colSpan={3}>Sin datos</tr>
				)}
			</tbody>
		</table >
	);
}
export default CrudTable
