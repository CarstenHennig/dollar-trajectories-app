function initMap(){
  
	const options= {
  center: {lat: 52.5200, lng:  13.4050},
  zoom: 17,
  mapType: google.maps.MapTypeId.ROADMAP
}
	map = new google.maps.Map(document.getElementById('map'), options);
}
