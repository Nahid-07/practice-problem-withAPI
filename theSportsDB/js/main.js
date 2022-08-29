const loadData = () =>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=Spain`)
    .then(res => res.json())
    .then(data => displayData(data.teams))
}
const displayData = (element) => {
    console.log(element)
    const container = document.getElementById('container');
    element.forEach(content =>{
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
        <div class="card">
            <img src="${content.strTeamBadge}" class="card-img-top" alt="..." width="300px" heigth="300px">
            <div class="card-body">
              <h5 class="card-title">Team Name : ${content.strTeam}</h5>
              <h5 class="card-title">League Name : ${content.strLeague}</h5>
              <p class="card-text">${content.strDescriptionEN.slice(0,200)}</p>
            </div>
          </div>
        `;
        container.appendChild(card)
    })

}


loadData()