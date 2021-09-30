import { useSelector } from 'react-redux'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Digimons = () => {
	const { digimons } = useSelector((state) => state)

	return (
		<>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				{digimons.map((digimon, index) => {
					return (
						<Card
							key={index}
							sx={{
								maxWidth: 345,
								marginLeft: 3,
								marginTop: 2,
								backgroundColor: '#F3F3F3',
							}}
						>
							<CardMedia
								component='img'
								height='120'
								width='120'
								image={digimon.img}
								alt={digimon.name}
							/>
							<CardContent>
								<Typography>{digimon.name}</Typography>
							</CardContent>
						</Card>
					)
				})}
			</Box>
		</>
	)
}

export default Digimons
