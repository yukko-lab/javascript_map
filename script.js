var map = L.map('map').setView([33.67073473913635, 130.44451772135247], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//L.marker([33.67345752177457, 130.44140661378802]).addTo(map).bindPopup('ここでーす！ここ！ここ～！').openPopup();


  //アイコン
const whiteIcon = L.icon({
  iconUrl: 'images/icon.png',
  shadowUrl: 'images/icon_shadow.png',

iconSize:     [100, 100], // size of the icon
shadowSize:   [100, 100], // size of the shadow
iconAnchor:   [70, 100], // point of the icon which will correspond to marker's location
shadowAnchor: [70, 100],  // the same for the shadow
popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
});


L.marker([33.67052044434281, 130.44438897532677], { icon: whiteIcon }).addTo(map).bindPopup('ここでーす！ここ！ここ～！<br><img src="images/pin.jpg" alt="img">');
  L.marker([35.632324194907014, 139.79760327108806], { icon: whiteIcon }).addTo(map).bindPopup('行きたい切実に<br><img src="images/pin.jpg" alt="img">');
