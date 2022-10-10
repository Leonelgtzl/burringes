function iniciarMap(){
    var coord = {lat:28.662247 ,lng: -106.098786};
    var coord1 = {lat:28.665504 ,lng: -106.103539};
    var coord2 = {lat:28.647045 ,lng: -106.075137};
    var coord3 = {lat:28.641250 ,lng: -106.114961};
    
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 13,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord1,
      map: map
    });

    var marker = new google.maps.Marker({
        position: coord2,
        map: map
      });

      var marker = new google.maps.Marker({
        position: coord3,
        map: map
      });

}