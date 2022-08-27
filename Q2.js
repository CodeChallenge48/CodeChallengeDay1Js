const fs = require('fs');

// Input was stored in a separate txt file called 'Q2.txt'
const part1 = () =>{
    const data = fs.readFileSync('./Q2.txt').toString('utf-8').split("\r\n"); //\n
    // const data = ['1x1x10', '2x3x4'];
    let dimensions = [];
    let area_of_smallestSide = 0;
    let area_of_1st_side = 0;
    let area_of_2nd_side = 0;
    let area_of_3rd_side = 0;
    let finalSquareFeet = 0;
    data.forEach((box) =>{
        dimensions = box.split('x');
        area_of_1st_side = (Number(dimensions[0]) * Number(dimensions[1]));
        area_of_2nd_side = (Number(dimensions[1]) * Number(dimensions[2]));
        area_of_3rd_side = (Number(dimensions[2]) * Number(dimensions[0]));
        area_of_smallestSide = Math.min(area_of_1st_side, area_of_2nd_side, area_of_3rd_side);
        finalSquareFeet = 2 * (area_of_1st_side + area_of_2nd_side + area_of_3rd_side) + area_of_smallestSide + finalSquareFeet;
    })
    return finalSquareFeet;
}

const part2 = () =>{
    const data = fs.readFileSync('./Q2.txt').toString('utf-8').split("\r\n");
    // const data = ['1x1x10', '2x3x4'];
    let dimensions = [];
    let perimeter_of_smallestSide = 0;
    let perimeter_of_1st_side = 0;
    let perimeter_of_2nd_side = 0;
    let perimeter_of_3rd_side = 0;
    let volume = 0
    let finalFeet = 0;
    data.forEach((box) =>{
        dimensions = box.split('x');
        perimeter_of_1st_side = 2 * (Number(dimensions[0]) + Number(dimensions[1]));
        perimeter_of_2nd_side = 2 * (Number(dimensions[1]) + Number(dimensions[2]));
        perimeter_of_3rd_side = 2 * (Number(dimensions[2]) + Number(dimensions[0]));
        perimeter_of_smallestSide = Math.min(perimeter_of_1st_side, perimeter_of_2nd_side, perimeter_of_3rd_side);
        volume = Number(dimensions[0]) * Number(dimensions[1]) * Number(dimensions[2]);
        finalFeet = perimeter_of_smallestSide + volume + finalFeet;
    })
    return finalFeet;

}

// node Q2.js to run
console.log(part1());