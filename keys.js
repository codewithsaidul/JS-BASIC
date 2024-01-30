const computer = {
    brand: "HP",
    Processor: "Core i5 7th Gen",
    Ram: "16GB",
    Storage: "512GB SSD",
    Price: 35000
}

const jaan = Object.keys(computer); //Find The How Many Keys are stay in any object

console.log(jaan)


const toos = Object.values(computer) //Show the Values in Object
console.log(toos)


const college = {
    name: "Sylhet Polytechnic Institude",
    Class: ["1th", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
    event: ["Science Fair", "Bijoy Divos", "Yearly Compition"],
    Unique: {
        color: "Chai color",
        regult: {
            gpa: 5,
            merit: 2
        }
    }
}

console.log(college.Unique.regult.gpa)

console.log(delete college.Unique["regult"])

console.log(college)