//

var atStore=false;

 setInterval(getLocation, 300000);
function getLocation() {
    if (navigator.geolocation) {
        var location=navigator.geolocation.getCurrentPosition(showPosition);
       /* if(location==storeLocation){
        	atStore=true;
        }*/
        	
        

    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {

   
    console.log("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude); 
}
console.log(atStore);

function comparePosition(position){
     x=Math.sqrt((position.lat-location.lat)^2+(position.lng-location.lng)^2)
    return x<5;
}
function findBadHabitMerchants(){
    //get payment history
    //use dictionary to get sum of each category each month 
    //compare to budget allocation. if 30% more then label as bad merchant and push to bad merhant array[]




}