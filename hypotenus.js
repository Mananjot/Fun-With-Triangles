const baseElement = document.querySelector("#base");
const perpendicularElement = document.querySelector("#perpendicular");
const btnFindHypotenous = document.querySelector("#btnFindHypotenous");
const result = document.querySelector(".result");

btnFindHypotenous.addEventListener('click', () => {
    result.style.display = "block";
    var base = parseFloat(baseElement.value);
    var perpendicular = parseFloat(perpendicularElement.value);

    var hypotenouse = Math.sqrt(base*base + perpendicular*perpendicular).toFixed(2);
    result.innerHTML = "Hypotenuse = &#8730; (base&#178;+perpendicular&#178;) = &#8730;(" 
    + base +"&#178;" + " + " + perpendicular + "&#178;) = " +hypotenouse;
});