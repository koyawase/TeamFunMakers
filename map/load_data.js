function get_data(regionName) {
	// Construct region data object
	var regionData = {
		regionName:regionName,
		terrainTypes:{
			urban:0,
			cropland:0,
			forest:0,
			grassland:0,
			scrub:0,
			water:0
		},
		population:0,
		medianHousePrice:0
	};
	
	// Get median house price for the region
	for(var i=0; i<medianHousePrices.length; i++) {
		if(medianHousePrices[i].Region == regionName) {
			regionData.medianHousePrice = medianHousePrices[i].Value;
		}
	}
	
	// Get population for the region
	for(var i=0; i<population.length; i++) {
		if(population[i].Region == regionName) {
			regionData.population = population[i].Population;
		}
	}
	
	// Get terrain types percentage for the region
	for(var i=0; i<landCover.length; i++) {
		if(landCover[i].Region == regionName) {
			switch(landCover[i].Category) {
				case "Urban/bare/lightly-vegetated surfaces":
					regionData.terrainTypes.urban =
					landCover[i].Percentage;
					break;
				case "Cropland":
					regionData.terrainTypes.cropland =
					landCover[i].Percentage;
					break;
				case "Forest":
					regionData.terrainTypes.forest =
					landCover[i].Percentage;
					break;
				case "Grassland/other herbaceous vegetation":
					regionData.terrainTypes.grassland =
					landCover[i].Percentage;
					break;
				case "Scrub/shrubland":
					regionData.terrainTypes.scrub =
					landCover[i].Percentage;
					break;
				case "Water bodies":
					regionData.terrainTypes.water =
					landCover[i].Percentage;
					break;
				default:
					
			}
		}
	}	
	
	return regionData;
}