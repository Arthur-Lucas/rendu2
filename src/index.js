function getAllfestivals(){
    fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&rows=100')
    .then(response => response.json())
    .then(data => {
        // Traitement des données
        var response = data.records;
        return response;
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite :', error);
    });
}

function filterFestivalsByQuery(query){
    fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=' + query)
    .then(response => response.json())
    .then(data => {
        // Traitement des données
        var response = data.records;
        console.log(response);
        return response;
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite :', error);
    });
}

async function getAllRegions(){
    try {
        const response = await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&facet=region');
        const data = await response.json();
        const festivalData = data.facet_groups[0].facets;
        console.log(festivalData);
        return festivalData;
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
}

module.exports = {getAllRegions, getAllfestivals, filterFestivalsByQuery};