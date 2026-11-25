import { LeafletMap, TileLayer, Marker} from 'leaflet';

const map = new LeafletMap('map').setView([33.889205, -44.664169], 2);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markerData = [
    { coords: [51.5, -0.09], popupText: "<b>Hello world!</b><br>I am marker 1." },
    { coords: [48.8566, 2.3522], popupText: "<b>Paris!</b><br>Welcome to France." },
    { coords: [40.7128, -74.0060], popupText: "<b>New York!</b><br>The Big Apple." }
];

markerData.forEach(data => {
    const marker = new Marker(data.coords).addTo(map);
    
    marker.bindPopup(data.popupText);

    marker.on('click', function() {
        map.setView(marker.getLatLng(), 15);
    });
});
