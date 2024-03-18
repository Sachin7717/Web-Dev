// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students =["sachin","sky","vikas","rajivnathan","suryaveer","ramkrishanveer","ravindranath"]

let house = [];

for (const student of students) {
    if (student.length < 6) {
        console.log('the house is Gryffindor');
    }
    else if (student.length >6 || student.length<8) {
        console.log('the house is Hufflepuff');
    }
    else if (student.length >8 || student.length<12) {
        console.log('the house is Ravenclaw');
    }
    else if (student.length>=12) {
        console.log('the house is Slytherin');
    }
}
console.log(house);
