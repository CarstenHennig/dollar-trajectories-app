


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


