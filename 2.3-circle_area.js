const circleArea = function(radius){
    area = Math.pow(radius, 2) * Math.PI;
    console.log(area);
    return area;
}

area5 = circleArea(5);
console.log(Math.round(area5*100)/100);