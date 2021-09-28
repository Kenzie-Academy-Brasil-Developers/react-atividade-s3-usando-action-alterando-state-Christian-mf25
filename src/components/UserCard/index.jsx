import { changeName } from "../../store/modules/user/actions"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const UserCard = () => {

	const user = useSelector((state) => state.user)
	const [newName, setNewName] = useState("")
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(changeName(newName))
	}

	return (
		<div>
			<h3>
				{`User name: ${user.name}`}
			</h3>
			<input
				type="text"
				value={newName}
				placeholder="New name"
				onChange={(e) => setNewName(e.target.value)} />
			<button
				style={{cursor: "pointer"}}
				onClick={() => handleClick()}>
				Change
			</button>
		</div>
	)
}

export default UserCard