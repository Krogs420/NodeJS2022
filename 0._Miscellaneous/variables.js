
//Never EVER do this!!!
//totalGlobalVariabel = "Malte"
//var globalVariable = "Malte"

const me = {
    name: "Flemming"
};

const hobbies = [];
hobbies.push("Music");
me.hobbies =  hobbies;
console.log(me)



{
let someValue = true;
{
    let someValue = false;
}
}

/*for(let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    })
} */