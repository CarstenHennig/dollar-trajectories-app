import { useState } from "react"
 import Pic1 from "./images/01-joachim.png" 
 import Pic2 from "./images/02-pagnia.png"
 import Pic3 from "./images/03-southAmerica.png"
  import Pic4 from "./images/06-cameroonCoast.png"
  import Pic5 from "./images/UsCongress.jpg"
 import '../App.css';
 import { InfoBox1 } from "./InfoBox1"
 import { Alert,Button, ButtonGroup,Table, ListGroup,ListGroupItem, Card } from "react-bootstrap"
 import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "./VideoPlayer"

 export default function MapLoader() {
	 
	return(
		<ClickHandler/>
	)
 }

function ClickHandler() {
		const locations = [
		{place:"Jachymov", URL:`${Pic1}`,info:`${InfoBox1.description}` },
		{place:"Spain", URL:`${Pic2}`,info: `${InfoBox1.description}`},
		{place:"South America", URL:`${Pic3}`,info: `${InfoBox1.description}`},		
		{place:"Cameroon", URL:`${Pic4}`,info: `${InfoBox1.description}`},
		{place:"United States", URL:`${Pic5}`,info: `${InfoBox1.description}`},		

	]

	const [localeIndex, setLocaleIndex]=useState(0)
	const [number, setNumber]=useState(1)
	const [activePoint, setActivePoint]=useState(locations[0])

return (
	<div className="container">
			<h1>Dollar History</h1>
		<div className="titles">
			<h2>Timeline</h2>
			<h2>Locale</h2>
			<h2>Info Card</h2>
		</div>
<div className="mainContents"> 
	<div className="leftInfo">
		<ul>
			<li> 
				<button onClick={()=> {setActivePoint(locations[0])}}> 
											
											<h1>Jachymov (Tolar)</h1>
										</button>
			</li>
				<li> 4</li>
					<li> 4</li>
						<li> 4</li>
							<li> 4</li>
		</ul>

	</div>
	<div className="centerInfo">map</div>
	<div className="rightInfo">info media</div>
</div>
		</div>
)

	
	
} 