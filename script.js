var map = L.map('map').setView([33.67073473913635, 130.44451772135247], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//L.marker([33.67345752177457, 130.44140661378802]).addTo(map).bindPopup('ここでーす！ここ！ここ～！').openPopup();


  //アイコン
const taru = L.icon({
  iconUrl: 'images/icon.png',
  shadowUrl: 'images/icon_shadow.png',

iconSize:     [100, 100], // size of the icon
shadowSize:   [100, 100], // size of the shadow
iconAnchor:   [70, 100], // point of the icon which will correspond to marker's location
shadowAnchor: [70, 100],  // the same for the shadow
popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
});


//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    //shadowUrl: 'images/ico_shadow.png',
    iconSize: [100, 100],
    shadowSize: [100, 100],
    iconAnchor: [50, 100],
    shadowAnchor: [20, 100],
    popupAnchor: [0, -42]
  }
});

suraimu = new circleIcon({ iconUrl: 'images/icon2.png' });


L.marker([33.67052044434281, 130.44438897532677], { icon: suraimu }).addTo(map).bindPopup('ここでーす！ここ！ここ～！<br><img src="images/pin.jpg" alt="img">');
L.marker([35.632324194907014, 139.79760327108806], { icon: taru }).addTo(map).bindPopup('行きたい切実に<br><img src="images/pin.jpg" alt="img">');


const circle = L.circle([35.01456214506066, 135.75726278680895], {
  color: '#c26100', //円の輪郭線の色
  fillColor: '#ff9500', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 30000//半径、メートルで指定
}).addTo(map);
circle.bindPopup("めちゃ行きたい");


// 多角形の表示
const polygon = L.polygon([
  [32.79707813819369, 130.09062382906106],
  [32.7897951716338, 130.08274772507454],
  [32.7946781355607, 130.07250878989208],
  [32.803946753221126, 130.08028644257877]
], {
  color: '#c26100',
  fillColor: '#ff9500',
  fillOpacity: 0.3
}).addTo(map);
polygon.bindPopup("どっかがワイの家");

// 多角形の表示
const polygon2 = L.polygon([
  [33.09475871181009, 130.8400636326479],
  [33.190110167137284, 131.00067180188884],
  [32.914111464615516, 131.2531243510514],
  [32.60335180642824, 131.09214011680282],
  [32.18283664810794, 131.09037774454455],
  [32.13279392201587, 130.87363642655242],
  [32.14482751991114, 130.6412390977632],
  [32.314434271731656, 130.0232581465762],
  [32.55088797728082, 130.0699500406659],
  [32.527733670647876, 130.40503304530952],
  [32.70355653696451, 130.5835608756524],
  [32.99889723800592, 130.42425911934643],
  [33.11169680583301, 130.60004036768404]
], {
  color: '#c26100',
  fillColor: '#ff9500',
  fillOpacity: 0.3
}).addTo(map);
polygon2.bindPopup("ここら辺熊本");


// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "ですやん")
    .openOn(map);
}

map.on('click', onMapClick);