const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/FruitDB');


const FruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please Check Your Data Entry, no name specified "]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
  });

  const Fruit = mongoose.model('Fruit', FruitSchema);

  const fruit = new Fruit({ rating:2,review:"nice" });
console.log(fruit); 

const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:FruitSchema
});
const Kiwi = new Fruit({ name: 'kiwi',rating:5,review:"nice" });

const Person = mongoose.model("Person",personSchema);

const pineapple=new Fruit({
    name:"Pineapple",
    rating:6,
    review:"Verry very Good"
});

pineapple.save();
Person.updateOne({name:"John"},{favouriteFruit:Kiwi},(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("SuccessFully edited the Person");
    }
})

// const person=new Person({
//     name:"Amy",
//     age:20,
//     favouriteFruit:pineapple
// });
// person.save();
// await fruit.save();
// const Banana = new Fruit({ name: 'banana',rating:5,review:"nice" });

// const Orange = new Fruit({ name: 'orange',rating:5,review:"nice" });
// Fruit.insertMany([Kiwi,Banana,Orange],(err)=>{
// if (err) {
//     console.log(err);
// }else{
//     console.log("SuccessFully Served saved all the fruits to FruitsDB");
// }
// });


// Fruit.updateOne({_id:"62752443e2ed30e4569d4fb5"},{name:"Peach"},(err)=>{
//     if (err) {
//         console.log(err);
//         }else{
//             console.log("SuccessFully updated data!");
//         }
//     });




Fruit.deleteOne({_id:"627512771d64aac0c8f7ace9"},(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("SuccessFully updated data!");
    }
});

Fruit.find((err,Fruit)=>{
    
        if (err) {
            console.log(err);
        }else{
            Fruit.forEach((Fruit) => {
                console.log(Fruit);
            });
        }
    });
Person.find((err,Person)=>{
    
        if (err) {
            console.log(err);
        }else{
            Person.forEach((person) => {
                console.log(person);
            });
        }
    });
}
