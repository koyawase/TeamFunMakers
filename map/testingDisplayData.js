const REGION_DISPLAY_CLASS = "regionBox";
const REGION_DATA_DISPLAY_CLASS = "regionData";
const REGION_IMAGE_CLASS = "regionImage";

const terrainIcons = {
    testTerrainIcon:""
}
const populationIcons = {
    testPopulationIcon:""
}
regionImages = {
    testRegionImage:""
}


var selectedRegions = [];

function displayRegion(regionName) {
	// Check if region data is already displayed
	for(var i=0; i<selectedRegions.length; i++) {
		if(selectedRegions[i].regionName === regionName) {
			// Remove region data
			selectedRegions.splice(i, 1);
			displayLocationData("sideBar", selectedRegions);
			return;
		}
	}
	// Add region data for displaying
    regionData = get_data(regionName);
	selectedRegions.splice(0, 0, regionData);
    displayLocationData("sideBar", selectedRegions);
}

function clearSelectedRegions() {
	selectedRegions = [];
}


/**
 * Display the given location data in dropdowns in the div with the given ID.
 * @param {*} divId 
 * @param {*} locationData 
 */
function displayLocationData(divId, locationData){
    console.log(locationData);
    //Find the div with the given id.
    const displayDiv = document.getElementById(div)

    //Iterate over data and draw it to div.
    locationData.array.forEach(data => {

        const locationDataDiv = document.createElement("div");
        locationDataDiv.classList.add(REGION_DISPLAY_CLASS);

        //Create heading that displays the name of the region.
        const regionHeading = document.createElement("H2");
        const regionText = document.createTextNode(locationData.regionName);
        regionHeading.appendChild(regionText);

        //Create div that displays all the data for the region with the given header.
        const dataDiv = document.createElement("div");
        divId.classList.add(REGION_DATA_DISPLAY_CLASS);
        
        //Load image of the region into dataDiv
        const regionImage = loadImage(regionImage.testRegionImage, REGION_IMAGE_CLASS);
        dataDiv.appendChild(regionImage);

        const terrains = Object.keys(terrainTypes);
        

    });

    function loadImage(imageSrc, className){
        
        const imageElement = document.createElement(imageSrc);
        imageElement.src = imageSrc;
        imageElement.classList.add(className);

        return imageElement;

    }

}