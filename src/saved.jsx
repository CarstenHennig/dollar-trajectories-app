


 return(

		(
			locations.map((location, index)=>{
				if (localeIndex===index) {
					return<div key={index}>
<div class="table-responsive">
						<Table className="table">
							<thead>
								<tr>
									<td>
										TIMELINE
									</td>
									<td>
										LOCALE: {activePoint.place}
									</td>
									<td>
										Info Card
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="MapDisplay1">
										<Alert variant="success" onClick={()=> {setActivePoint(locations[0])}}> 
											
											<h1>Jachymov (Tolar)</h1>
										</Alert>
										
										<Alert variant="primary" onClick={()=> {setActivePoint(locations[1])}}>
											
										<h1>Spain (Taler)</h1>
										</Alert >
										<Alert variant="primary" onClick={()=> {setActivePoint(locations[2])}}>
											<h1>South America</h1>
										</Alert>
										
										<Alert variant="primary" onClick={()=> {setActivePoint(locations[3])}}>
											<h1>Cameroon (Ndola)</h1>
										</Alert>
										<Alert variant="primary" onClick={()=> {setActivePoint(locations[4])}}>
										<h1>US$</h1>
										</Alert>
									</td>
									<td className="MapDisplay">
										<img src={activePoint.URL}/>
									</td>
									<td className="MapDisplay2">
										
										

										
										<Card>
											<Card style={{ width: '100%' }}>
  
   <Card.Body>
 <VideoPlayer/>
    <Card.Title style={{color: "seagreen", border:"1px solid", width:"fit-content"}} >Get Random Entries</Card.Title>
    <Card.Text>
     	{activePoint.info}
    </Card.Text>
    </Card.Body>
	</Card>	
	</Card>
</td>
</tr>
</tbody>
</Table>
 </div>

					</div>
					
				}
			})
		)
		
	) 



=============================================================
<ListGroup className="list-group-flush">
    <ListGroupItem>{location.place}</ListGroupItem>
    <ListGroupItem variant="info">
		<Button variant="outline-primary" onClick={()=> {
		setLocaleIndex(localeIndex +1)
			setNumber(number+1)
		}} >Load Next</Button>
	 <Button variant="outline-primary" onClick={(e)=> 
		setLocaleIndex(localeIndex -1)} >Load Prev</Button>
	</ListGroupItem>  
  </ListGroup> 


=======================================================================

import { useState } from "react"
 import Pic1 from "./images/01-joachim.png" 
 import Pic2 from "./images/02-pagnia.png"
 import Pic3 from "./images/03-southAmerica.png"
  import Pic4 from "./images/06-cameroonCoast.png"
  import Pic5 from "./images/UsCongress.jpg"
 import '../App.css';
 import { InfoBox1,InfoBox2, InfoBox3,InfoBox4, InfoBox5 } from "./InfoBox1"
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
		{place:"Jachymov", URL:`${Pic1}`,info:`${InfoBox1.description}`,lat:50.3585, lng:12.9347 },
		{place:"Spain", URL:`${Pic2}`,info: `${InfoBox2.description}`,lat: 41.6523, lng: 4.7245},
		{place:"South America", URL:`${Pic3}`,info: `${InfoBox3.description}`,lat:8.7832, lng: 55.4915},		
		{place:"Cameroon", URL:`${Pic4}`,info: `${InfoBox4.description}`, lat:7.3697, lng:12.3547},
		{place:"United States", URL:`${Pic5}`,info: `${InfoBox5.description}`, lat:37.0902, lng:95.7129},		

	]

	const [localeIndex, setLocaleIndex]=useState(0)
	const [number, setNumber]=useState(1)
	const [activePoint, setActivePoint]=useState(locations[0])

return (
	<div className="container">
			<h1>Dollar History</h1>
		<div className="titles">
			<h2>Timeline</h2>
			<h2>Locale: {activePoint.place} </h2>
			<h2>Info Card</h2>
		</div>
<div className="mainContents"> 
	<div className="leftInfo">
		<ul>
			<li> 
				<button onClick={()=> 
					{setActivePoint(locations[0])}}> 
					<h3>Jachymov (Tolar)</h3>
				</button>
			</li>
			<li> 
				<button onClick={()=> 
					{setActivePoint(locations[1])}}> 
					<h3>Spain(Taler)</h3>
				</button>

			</li>
			<li> 
				<button onClick={()=> 
					{setActivePoint(locations[2])}}> 
					<h3>South America</h3>
				</button>

			</li>
						<li> 
							<button onClick={()=> 
					{setActivePoint(locations[3])}}> 
					<h3>West Africa</h3>
				</button>
						</li>
							<li> 
							<button onClick={()=> 
					{setActivePoint(locations[4])}}> 
					<h3>USA (Dollar)</h3>
				</button>	
							</li>
		</ul>
		
	</div>
	<div className="centerInfo" ><img src={activePoint.URL} /> </div>
	<div className="rightInfo">
		<div className="videoFrame">
			<VideoPlayer/>
		<div className="infoBoxed">
			{activePoint.info}
		</div>
		</div>
		
		 </div>
</div>
		</div>
)

	
	
} 

