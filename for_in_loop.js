let students = {
    name: "Ishan Awasthi",
    age: 8,
    cgpa: 6.6,
    isPass: true
};

for(let i in students){
    console.log(`key = ${i} , value = ${students[i]}`);
}