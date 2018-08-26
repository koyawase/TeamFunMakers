function clickRegion(clickEvent) {
	var regionElement = clickEvent.target;
	regionElement.classList.toggle("selected");
}

var mapSectors = Array.from(document.getElementsByClassName('nzmap__sector'));

mapSectors.forEach(function(element) {
	element.addEventListener("click", clickRegion);
});