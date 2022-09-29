let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 35.170528,
        lng: 136.882055,
      },
      map,
      title: "Nagoya",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 36.145157,
        lng: 137.248588,
      },
      map,
      title: "Takayama",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 35.013394,
        lng: 135.764636,
      },
      map,
      title: "Kioto",
    })
  );
}