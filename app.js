//For loops
for (let i = 0; i < 3; i++){
    console.log(i)
}

for (let i = 1; i <= 20; i++){
    if (i % 3 === 0 && i % 5 === 0)
        console.log('${i} -> Frontend Simplified')
    else if (i % 3 === 0)
        console.log('${i} -> Frontend')
    else if (i % 5 === 0)
        console.log ('${i} -> Simplified')
    else ('${i} -> ${i}')
}

const str = "Frontend Simplified"

for (let i = 0; i < str.length; ++i){
    console.log(str[i])
}

//While loops
let count = 1;

while (count <= 100){
    console.log(count)
    count = count + 1;
}

//Do while loops