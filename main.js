
const getData = async(event) =>{
    let season = document.querySelector('#season').value
    let round = document.querySelector('#round').value
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    return response.data
}

const loadData = async() =>{
    let data = await getData()
    //pulling things out of data
    for {let i=0; i < 7, i++}{
    let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
    let familyName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
    
    let name = `${givenName} ${familyName}`
    let name_display = document.createElement('td')
    name_display.innerHTML = name
    document.getElementById(`table-row${i}`).append(name_display)

    let nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
    let nat_display = document.createElement('td')
    nat_display.innerHTML = nationality 
    document.getElementById(`tabel-row-${i}`).append(nat_display)
    let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points   
    let points_display = document.createElement('td')
    points_display.innerHTML = points
    document.getElementById(`table-row${i}`).append(points_display)
    
    let sponsor = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
    let sponsor_display = document.createElement('td')
    sponsor_display.innerHTML = sponsor 
    document.getElementById(`tabel-row-${i}`).append(sponsor_display)
    


    }
}