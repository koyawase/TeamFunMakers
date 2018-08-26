/**
 * Display divs based on the region selected.
 * @param {*} divId 
 * @param {*} locationData 
 */
function displayLocationData(divId, locationData){
    
    console.log(locationData);

    locationData.forEach(location => {
        
        const regionDiv = document.getElementById(location.regionName);
        console.log(regionDiv);
        console.log("Style Before: " + regionDiv.style.display);

        if(regionDiv.style.display === "none"){
            regionDiv.style.display = "block"
        }
        else if(regionDiv.style.display === "block"){
            regionDiv.style.display = "none";
        }

        console.log("Style after: " + regionDiv.style.display);

    });

}

