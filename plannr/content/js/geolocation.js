(async()=>{
let currentLocation = await( await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBBI-8mtAhBWlHhS-pudH7xbi2IKMnMPOo',{method : 'POST' , headers : new Headers({"considerIp": "false"}) })).json()
let zomatoData = await(await fetchZomato(currentLocation)).json()
showData(currentLocation,zomatoData);
})()
// Fetching the values from zomato
    //Initially This Will Return Values According To Your Location
  let fetchZomato = (inp) => fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${inp.location.lat}&lon=${inp.location.lng}`, { method: 'GET', headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1'})})
  // This Will Trigger When Mobile Device
  let fetchZomatoByGps = (inp) => {
    console.log(inp);
    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${inp.coords.latitude}&lon=${inp.coords.longitude}`, { method: 'GET', headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1'})}).then(res=>res.json()).then(data => console.log(data))
    }

let findEstablishment = (id)=>fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=${id}`,{
  method: 'GET',
  headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1'})
})
.then(res => res.json())
.then(data => showPlacesType(data.establishments))

let filterByEstablishment = (loc,id)=> {
fetch(`https://developers.zomato.com/api/v2.1/search?lat=${loc.location.lat}&lon=${loc.location.lng}&establishment_type=${id}&sort=real_distance`,{ method: 'GET', headers: new Headers({'user-key': '4319603cbb48b9c4fb5a3211714b89d1'})})
.then(res => res.json())
.then(data => console.log(data))
}
let currentLocation;
let showData = (loc,inp)=>{
document.querySelector('.planDate').addEventListener('click',()=>{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if(navigator.geolocation)  navigator.geolocation.getCurrentPosition(fetchZomatoByGps);
  }
  else {showPlaces(inp.nearby_restaurants)}
});
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
// console.log(inp);
}
let showPlaces = (arr) => {window.scrollTo(0,700); document.querySelector('#rest').innerHTML = arr.map(a => `<li data-address='${a.restaurant.location.address.replace(' ','+')}'>${a.restaurant.name}</li>`).join('')}
let showPlacesType = (arr)=> {document.querySelector('.filters ul').innerHTML = arr.map(a => `<li data-id>${a.establishment.name}</li>`).join('')}
document.querySelector('#rest').addEventListener('click',(e)=> {document.querySelector('#map iframe').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC3ZfZ4hgIuv1_tUADFvzgZFNInJILI3Rk&q="+e.target.dataset.address.replace(' ','+')})
document.querySelector('.filters ul').addEventListener('click',(e)=> {
  filterByEstablishment(currentLocation,e.target.dataset.id);
});
