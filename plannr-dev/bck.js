// This IIFE Will Keep Things Being in Global Scope
(()=>{
let currentData;
// This IIFE is returning Async Data using Async Await
(async()=>{
let currentLocation = await( await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBBI-8mtAhBWlHhS-pudH7xbi2IKMnMPOo',{method : 'POST' , headers : new Headers({"considerIp": "false"}) })).json()
let zomatoData = await(await fetchZomato(currentLocation)).json()
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.querySelector('#map').innerHTML = '';
 }
showData(currentLocation,zomatoData);
})()

// Fetching the values from zomato
    //Initially This Will Return Values According To Your Location
  let fetchZomato = (inp) => fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${inp.location.lat}&lon=${inp.location.lng}`, { method: 'GET', headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1'})})
  // This Will Trigger When Mobile Device
  let fetchZomatoByGps = (inp) => {
    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${inp.coords.latitude}&lon=${inp.coords.longitude}`, { method: 'GET', headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1',"Accept": "application/json"})}).then(res=>res.json()).then(data => showPlaces(data.nearby_restaurants))    }

//This Will Show The Establishment like Bakery,Cafe Etc
let findEstablishment = (id)=>fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=${id}`,{
  method: 'GET',
  headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1'})
})
.then(res => res.json())
.then(data => showPlacesType(data.establishments))
// This will Return Places Matching the Establishment ID like list of all the Cafe's Near You
let filterByEstablishment = (loc,id)=> {
fetch(`https://developers.zomato.com/api/v2.1/search?lat=${loc.location.lat}&lon=${loc.location.lng}&establishment_type=${id}&sort=real_distance`,{ method: 'GET', headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1'})})
.then(res => res.json())
.then(data => console.log(data))
}
let currentLocation,mainArr;

let showData = (loc,inp)=>{
  currentData = inp;
//This Will Show The Show Data On The "GPS" coordinates if "mobile" and google "geolocation api" if "desktop"
document.querySelector('.planDate').addEventListener('click',()=>{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if(navigator.geolocation)  navigator.geolocation.getCurrentPosition(fetchZomatoByGps);
  }
  else { showPlaces(inp.nearby_restaurants) }
});

//This will Fetch According To The Place You Entered
document.querySelector('#searchPlaces').addEventListener('click',()=> {
fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${document.querySelector('#getCity').value.replace(' ','+')}&key=AIzaSyDMiNEO6NFZZywezqZ0A8YLQ5cd-eMhb6M`)
.then(r => r.json())
.then(data =>
  fetchZomato(data.results[0].geometry)
    .then(res => res.json())
      .then(data => showPlaces(data.nearby_restaurants))
    )
})
currentLocation = loc;
findEstablishment(inp.location.city_id);
}

//Events and Handlers
let showPlaces = (arr) => {window.scrollTo(0,700); document.querySelector('#rest').innerHTML = arr.map(a => `<li data-address='${a.restaurant.location.address.replace(' ','+')}'>${a.restaurant.name}</li>`).join('')}
let showPlacesType = (arr)=> {document.querySelector('.filters ul').innerHTML = arr.map(a => `<li data-id>${a.establishment.name}</li>`).join('')}
document.querySelector('#rest').addEventListener('click',(e)=> {

//This Will Directly Open it on the map app!
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
window.location.href = "https://www.google.com/maps/dir//"+e.target.dataset.address.replace(' ','+');
}
else {
  document.querySelector('#map iframe').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC3ZfZ4hgIuv1_tUADFvzgZFNInJILI3Rk&q="+e.target.dataset.address.replace(' ','+')
}
})
// This Code is Under Construction
document.querySelector('.filters ul').addEventListener('click',(e)=> {
  filterByEstablishment(currentLocation,e.target.dataset.id);
});

})() //The main IIFE ends here