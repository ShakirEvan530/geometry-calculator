/*
* Objective : Get base , height of the triangle . Calculate the area by using the provided formula and then display the area. 
* step-1: get base value of the triangle
* step-2: Added an id in the base input field
*step-3: use getElementById to access the inout field
*step-4 : get value from the input field
* step-5: Convert the value to a number . use parseFloat
*/

function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(base);
//  get triangle height value 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    // console.log(height);

// calculate triangle area
    const area = 0.5* base * height;
    console.log('area of the triangle is:',area);

    // display triangle area: 

    const triangleAreaSpan = document.getElementById('triangleArea');
    triangleAreaSpan.innerText= area;
}