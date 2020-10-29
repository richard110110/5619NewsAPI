console.log("get js");



function listCovid19News(date){
    

}

function speechNews(data){


}

function riskLevel(){
    //security
    //low level
    //middle level
    //high level
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
         center: { lat: -34.397, lng: 150.644 },
         zoom: 8,
     });

     var  t  =  new  Date().getTime();  
     var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
                 getTileUrl:  function(coord,  zoom)  {  
                    return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=a73bafd78ecdd5be3d7b3dac602f4d26d6d86a9c";  
                 },  
                 name:  "Air  Quality",  
       });  
 
     map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
 }
 