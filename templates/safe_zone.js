var current_position;

var angle;
var destination;
var del;
var watch;
var latitude;
var longitude;



function init() {



function success(position) {
    var initialLatitude  = position.coords.latitude;
    var initialLongitude = position.coords.longitude;
      }

function error() {
                 alert("Error");
              }


navigator.geolocation.getCurrentPosition(success, error);




function findAngle(){
    function success(position) {
     latitude  = position.coords.latitude;
     longitude = position.coords.longitude;
      }


    function error() {
                 alert("Error");
              }


    navigator.geolocation.getCurrentPosition(success, error);
 

    var theta = 180*atan2((initialLatitude - latitude), (initialLongitude - longitude))/Math.PI ;
    var fi = 180*atan2((destination.latitude - initialLatitude), (destination.longitude - initialLongitude))/Math.PI ;
   
    del = theta - fi; 



}

document.getElementById("ref").addEventListener("click",findAngle);

function destination_reached(){
    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2){
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
    }
      
   

    var dist = getDistanceFromLatLonInKm(current_position.latitude,current_position.longitude,destination.latitude,destination.longitude);
    if(dist < 0.03)return true;
    return false;
}


    function geo_success(position){
        current_position = {
            latitude    : position.coords.latitude,
            longitude   : position.coords.longitude
        };
        if(destination_reached()){
            document.location.href = "/destination_reached";
        }
        
    }
      
    function geo_error(){
        alert("Sorry, no position available.");
    }
      
    var geo_options = {
        enableHighAccuracy: true, 
        maximumAge        : 30000, 
        timeout           : 27000
    };

    watch = navigator.geolocation.watchPosition(geo_success,geo_error,geo_options);

    // function get_destination(){
    //     var url = "get_safe_zone";
    //     var params = "latitude="+current_position.latitude+"&longitude="+current_position.longitude;
    //     var http = new XMLHttpRequest();
        
    //     http.open("GET", url+"?"+params, true);
    //     http.onreadystatechange = function(){
    //         if(http.readyState == 4 && http.status == 200){
    //             destination = JSON.parse(http.responseText);
    //         }
    //     }
    // }
    // destination = get_destination();
    window.addEventListener('deviceorientation', handleOrientation);


function animate_ball(delta){
    


    document.querySelector('.ball').style.top  = (90*( 1 - Math.cos(delta*3.14/180))) + "px" ;
    document.querySelector('.ball').style.left = (90*(1 + Math.sin(delta*3.14/180))) + "px" ;
 


}





function handleOrientation(event){
    var delta = (del + event.alpha)%360;
    
    
   animate_ball(delta);
}

}

