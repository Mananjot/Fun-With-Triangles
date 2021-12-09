// Is Triangle 
const firstAngleElement = document.querySelector("#firstAngle");
const secondAngleElement = document.querySelector("#secondAngle");
const thirdAngleElement = document.querySelector("#thirdAngle");
const btnIsTriangle = document.querySelector("#btnIsTriangle");
const result = document.querySelector(".result")

btnIsTriangle.addEventListener('click', () => {
    result.style.display = "block";
    var firstAngle = parseFloat(firstAngleElement.value);
    var secondAngle = parseFloat(secondAngleElement.value);
    var thirdAngle = parseFloat(thirdAngleElement.value);

    var sumOfAngles = firstAngle + secondAngle + thirdAngle;
    if (sumOfAngles === 180){
        result.style.display="block";
        result.innerText = "The given Angles can form the triangle";
    }
    else{
        result.style.display="block";
        result.innerText = "The given Angles cannnot form the triangle";
    }
});