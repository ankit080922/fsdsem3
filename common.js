function calculateArea(radius){
    const area = 3.14 * radius * radius;
    console.log(area);
}
function calculateperimeter(radius){
    return 2*3.14*radius
}
module.exports  = { calculateArea, calculateperimeter }


