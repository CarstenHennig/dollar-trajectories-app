<script

let map;
document.addEventListener("DOMContentLoaded",()=>{
	let s=document.createElement("script");
	document.head.appendChild(s);
	s.addEventListener("load", ()=>{
		console.log("Script has loaded!")
		map = new google.maps.Map(document.getElementById('map'), {
center: {lat: -34.397, lng: 150.644},
zoom: 16,
mapTypeId:google.maps.MapTypeId.ROADMAP
});
	s.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByNdcsR7-rHOUtnDSmSa-5AJYN2HXZmmA&callback=initMap"
	})
}


</script>