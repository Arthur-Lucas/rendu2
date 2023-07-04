async function getAllfestivals(){
    try {
        const response = await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&rows=100')
        const data = await response.json();
        const festivalData = data.records;
        return festivalData;
    }
    catch (error) {
        console.error('Une erreur s\'est produite :', error);
    } 
}

async function filterFestivalsByQuery(query){
    try {
        const response = await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=' + query)
        const data = await response.json();
        const festivalData = data.records;
        return festivalData;
    }
    catch (error) {
        console.error('Une erreur s\'est produite :', error);
    } 
    

}

async function getAllRegions(){
    try {
        const response = await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&facet=region');
        const data = await response.json();
        const festivalData = data.facet_groups[0].facets;
        return festivalData;
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
}

module.exports = {getAllRegions, getAllfestivals, filterFestivalsByQuery};