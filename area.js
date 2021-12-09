const baseElement = document.querySelector("#base");
const heightElement = document.querySelector("#perpendicular");
const btnFindArea = document.querySelector("#btnFindArea");
const result = document.querySelector(".result");

btnFindArea.addEventListener('click', () => {
    result.style.display = "block";
    var base = parseFloat(baseElement.value);
    var height = parseFloat(heightElement.value);

    var area = 0.5 * base * height
    result.innerText = "Area = 1/2 * base * height = 1/2 * " + base + " * " + height + " = " + area;
});