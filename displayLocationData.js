/**
 * Display divs based on the region selected.
 * @param {*} divId 
 * @param {*} locationData 
 */
function displayLocationData(divId, locationData){
    
    console.log(locationData);

    hideAllRegions();

    locationData.forEach(location => {
        
        const regionDiv = document.getElementById(location.regionName);
        regionDiv.style.display = "block";

    });

}

function hideAllRegions(){

    const regions = Array.from(document.getElementsByClassName("region"));
    regions.forEach(reg => {
        reg.style.display = "none";
    })

}



