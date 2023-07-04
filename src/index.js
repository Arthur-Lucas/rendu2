function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function getAllfestivals(){
    fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=100&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut')
    .then(response => response.json())
    .then(data => {
        // Traitement des données
        return data;
    })
    .catch(error => {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite :', error);
    });
}

module.exports.getRandomNumber = getRandomNumber;
module.exports.getAllfestivals = getAllfestivals;