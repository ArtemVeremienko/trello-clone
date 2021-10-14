import styled from 'styled-components'

interface AddItemButtonProps {
	dark?: boolean
}

export const AppContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 20px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	background-color: #3179ba;
`

export const ColumnContainer = styled.div`
	width: 300px;
	min-height: 40px;
	margin-right: 20px;
	border-radius: 3px;
	padding: 8px;
	flex-grow: 0;
	background-color: #ebecf0;
`

export const ColumnTitle = styled.div`
	padding: 6px 16px 12px;
	font-weight: bold;
`

export const CardContainer = styled.div`
	max-width: 300px;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	border-radius: 3px;
	background-color: #fff;
	box-shadow: 0px 1px 0px 0px #091e4240;
	cursor: pointer;
`

export const AddItemButton = styled.button<AddItemButtonProps>`
	width: 100%;
	max-width: 300px;
	padding: 10px 12px;
	text-align: left;
	background-color: #ffffff3d;
	border-radius: 3px;
	border: none;
	color: ${(props) => (props.dark ? '#000' : '#fff')};
	cursor: pointer;
	transition: background 85ms ease-in;

	&:hover {
		background-color: #ffffff52;
	}
`
export const NewItemFormContainer = styled.div`
	max-width: 300px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const NewItemButton = styled.button`
	padding: 6px 12px;
	background-color: #5aac44;
	border-radius: 3px;
	border: none;
	box-shadow: none;
	color: #fff;
	text-align: center;
`

export const NewItemInput = styled.input`
	width: 100%;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	border-radius: 3px;
	border: none;
	box-shadow: 0px 1px 0px 0px #091e4240;
`
