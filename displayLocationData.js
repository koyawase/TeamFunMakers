const REGION_DISPLAY = "regionBox";
const REGION_DATA_DISPLAY = "regionData";

const terrainIcons = {
    testTerrainIcon:""
}
const populationIcons = {
    testPopulationIcon:""
}
regionImages = {
    testRegionImage:""
}

/**
 * Display the given location data in dropdowns in the div with the given ID.
 * @param {*} divId 
 * @param {*} locationData 
 */
function displayLocationData(divId, locationData){
    
    //Find the div with the given id.
    const displayDiv = document.getElementById(div)

    //Iterate over data and draw it to div.
    locationData.array.forEach(data => {

        const locationDataDiv = document.createElement("div");
        locationDataDiv.classList.add(REGION_DISPLAY);

        //Create heading that displays the name of the region.
        const regionHeading = document.createElement("H2");
        const regionText = document.createTextNode(locationData.regionName);
        regionHeading.appendChild(regionText);

        //Create div that displays all the data for the region with the given header.
        const dataDiv = document.createElement("div");
        divId.classList.add(REGION_DATA_DISPLAY);

        

    });

}