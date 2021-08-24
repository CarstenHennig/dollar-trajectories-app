import { useState } from "react"
 import Pic1 from "./images/01-joachim.png" 
 import Pic2 from "./images/02-pagnia.png"
 import Pic3 from "./images/03-southAmerica.png"
 import Pic4 from "./images/04-backToPagnia.png"
 import Pic5 from "./images/05-westAfrica.png"
 import Pic6 from "./images/06-cameroonCoast.png"
 import '../App.css';
 import { InfoBox1 } from "./InfoBox1"
 import { Button, ButtonGroup,Table } from "react-bootstrap"
 import 'bootstrap/dist/css/bootstrap.min.css';


 export default function MapLoader() {
	 
	return(
		<ClickHandler/>
	)
 }

function ClickHandler() {

	const [localeIndex, setLocaleIndex]=useState(0)
	const locations = [
		{place:"Berlin", URL:`${Pic1}`,info:`${InfoBox1.description}` },
		{place:"berlin", URL:`${Pic2}`,info: `${InfoBox1.description}`},
		{place:"berlin", URL:`${Pic3}`,info: `${InfoBox1.description}`},
		{place:"berlin", URL:`${Pic4}`,info: `${InfoBox1.description}`},
		{place:"berlin", URL:`${Pic5}`,info: `${InfoBox1.description}`},
		{place:"berlin", URL:`${Pic6}`,info: `${InfoBox1.description}`},		


	]

	return(

		(
			locations.map((location, index)=>{
				if (localeIndex===index) {
					return<div key={index}>

						<Table>
							<thead>
								<tr>
									<td>
										TIMELINE
									</td>
									<td>
										LOCALE
									</td>
									<td>
										Info Card
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{location.place}
									</td>
									<td>
										<img src={location.URL} alt="photo" />
									</td>
									<td>
										{location.info}
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
					
				}
			})
		)
		
	)
	
} 