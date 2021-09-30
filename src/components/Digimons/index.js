import { useSelector } from 'react-redux'

const Digimons = () => {
	const { digimons } = useSelector((state) => state)

	return (
		<div>
			{console.log(digimons)}
			<ul>
				{digimons.map((digimon, index) => {
					return <li key={index}>{digimon}</li>
				})}
			</ul>
		</div>
	)
}

export default Digimons
