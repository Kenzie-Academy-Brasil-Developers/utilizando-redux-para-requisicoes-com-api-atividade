import { TextField, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import addDigimonsThunk from '../../store/modules/digimons/thunks'

const Search = () => {
	const dispatch = useDispatch()
	const [input, setInput] = useState('')
	const [error, setError] = useState(false)

	const handleSearch = () => {
		setError(false)
		dispatch(addDigimonsThunk(input, setError))
		setInput('')
	}

	return (
		<div>
			<div>
				<Typography sx={{ marginTop: 2, marginBottom: 4 }} variant='h4'>
					Procure seu Digimon
				</Typography>
				<TextField
					variant='standard'
					placeholder='Busque'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button
					sx={{ marginLeft: 2 }}
					variant='contained'
					size='small'
					onClick={handleSearch}
				>
					Pesquisar
				</Button>
			</div>
			{error && <span>Digimon não encontrado</span>}
		</div>
	)
}

export default Search
