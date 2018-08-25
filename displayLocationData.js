const REGION_DISPLAY_CLASS = "regionBox";
const REGION_DATA_DISPLAY_CLASS = "regionData";
const REGION_IMAGE_CLASS = "regionImage";
const TERRAIN_INFORMATION_BOX_CLASS = "terrainInfoBox";
const TERRAIN_INFO_CLASS = "terrainInfo";
const TERRAIN_TEXT_CLASS = "terrainText";
const POPULATION_ICON_CLASS = "populationIcon";
const POPULATION_TEXT_CLASS = "populationText";
const HOUSE_PRICE_TEXT_CLASS = "housePriceText";

const terrainIcons = {
    testTerrainIcon:""
}
const populationIcons = {
    skyscrapers:"",
    building:"",
    houses:"",
    house:""
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
    const displayDiv = document.getElementById(divId);

    //Iterate over data and draw it to div.
    locationData.array.forEach(data => {

        const locationDataDiv = document.createElement("div");
        locationDataDiv.classList.add(REGION_DISPLAY_CLASS);

        //Create heading that displays the name of the region.
        const regionHeading = document.createElement("H2");
        const regionText = document.createTextNode(data.regionName);
        regionHeading.appendChild(regionText);

        //Create div that displays all the data for the region with the given header.
        const dataDiv = document.createElement("div");
        dataDiv.classList.add(REGION_DATA_DISPLAY_CLASS);
        
        //Load image of the region into dataDiv
        const regionImage = loadImage(regionImage.testRegionImage, REGION_IMAGE_CLASS);
        dataDiv.appendChild(regionImage);

        const terrainInfoBox = document.createElement("div");
        terrainInfoBox.classList(TERRAIN_INFORMATION_BOX_CLASS);
        const terrains = Object.keys(data.terrainTypes);
        terrains.forEach(t => {

            //Construct div to for terrain info.
            const terrainInfo = document.createElement("div");
            terrainInfo.classList.add(TERRAIN_INFO_CLASS);

            //Add correct icon to info box;
            //terrainInfo.appendChild(loadImage, terrainIcons[t]);
            
            const terrainText = document.createElement("p");
            terrainText.innerHTML = `<b>${t}:<\b> ${data.terrainTypes[t]}`;
            terrainText.classList.add(TERRAIN_TEXT_CLASS);
            terrainInfo.appendChild(terrainText);

            terrainInfoBox.appendChild(terrainInfo);

        });

        dataDiv.appendChild(terrainInfoBox);

        //dataDiv.appendChild(loadImage(populationIcons[determinePopultionIcon(data.population)], POPULATION_ICON_CLASS));

        //Add text with population info.
        const populationText = document.createElement("p");
        populationText.innerHTML = `<b>Population:<\b> ${data.population}`;
        populationText.classList.add(POPULATION_TEXT_CLASS);
        dataDiv.appendChild(populationText);

        const housePriceText = document.createElement("p");
        housePriceText.innerHTML = `<b>Median House Price:</b> ${data.medianHousePrice}`;
        housePriceText.classList.add(HOUSE_PRICE_TEXT_CLASS);
        dataDiv.appendChild(housePriceText);

        locationDataDiv.appendChild(regionHeading);
        locationDataDiv.appendChild(dataDiv);
        displayDiv.appendChild(locationDataDiv);

    });

}

function loadImage(imageSrc, className){
        
    const imageElement = document.createElement(imageSrc);
    imageElement.src = imageSrc;
    imageElement.classList.add(className);

    return imageElement;

}

function determinePopultionIcon(population){

    if(population >= 600000) return "skyscrapers";
    if(population >= 300000) return "building";
    if(population >= 100000) return "houses";
    else return "house";

}