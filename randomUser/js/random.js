const loadData = () =>{
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => displayData(data.results[0]))
}

const displayData = (element) =>{
    const div = document.getElementById('container');
    const {picture, location, name} = element;
    const {large}=picture;
    const {city, country, postcode, street,timezone} = location;
    div.innerHTML = `
    <img src="${large}" class="card-img-top" alt="...">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name : ${name.title + ' ' +name.first+' '+name.last}</li>
            <li class="list-group-item">Country : ${country}</li>
            <li class="list-group-item">City : ${city}</li>
            <li class="list-group-item">Street Name: ${street.name}</li>
            <li class="list-group-item">Post Code :${postcode}</li>
            <li class="list-group-item">TimeZoneArea : ${timezone.description}</li>
            <li class="list-group-item">TimeZone : ${timezone.offset}</li>
          </ul>
    `;
}
loadData()