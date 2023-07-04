function getAllfestivals(){
    fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&rows=100')
    .then(response => response.json())
    .then(data => {
        // Traitement des données
        reponse = data.records;
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
        reponse = data.records;
        return response;
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite :', error);
    });
}

function getAllRegions(){
    fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=' + query)
    .then(response => response.json())
    .then(data => {
        // Traitement des données
        reponse = data.facet_groups[0].facets;
        return response;
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite :', error);
    });
}

module.exports = {getAllRegions, getAllfestivals, filterFestivalsByQuery};