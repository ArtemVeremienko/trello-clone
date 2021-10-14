import { useState } from 'react'
import { NewItemForm } from './NewItemForm'
import { AddItemButton } from './styles'

interface AddNewItemProps {
	onAdd(text: string): void
	toggleButtonText: string
	dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
	const { onAdd, toggleButtonText, dark } = props
	const [showForm, setShowForm] = useState(false)

	if (showForm) {
		return (
			<NewItemForm
				onAdd={(text) => {
					onAdd(text)
					setShowForm(false)
				}}
			/>
		)
	}

	return (
		<AddItemButton dark={dark} onClick={() => setShowForm(true)}>
			{toggleButtonText}
		</AddItemButton>
	)
}
