
//two recipes
allRecipes = [{"title":"Delicious Pasta",
    "ingredients": [
        {
            "name": "shrimp",
            "qty": "10",
            "unit": "grams"
        },
        {
            "name": "angel hair pasta",
            "qty": "5",
            "unit": "grams"
        },
        {
            "name": "cheese",
            "qty": "45",
            "unit": "grams"
        }
    ]
},
{"title":"Yummy Sandwich",
    "ingredients": [
        {
            "name": "ham",
            "qty": "2",
            "unit": "grams"
        },
        {
            "name": "orange juice",
            "qty": "7",
            "unit": "liters"
        }
    ]
},
{"title":"Perfect Match",
    "ingredients": [
        {
            "name": "shrimp",
            "qty": 213,
            "unit": "grams",
        },
        {
            "name": "angel hair pasta",
            "qty": 20,
            "unit": "grams",
        }
    ]
}
];

myProfile = {
    "ingredients": [
        {
            "name": "angel hair pasta",
            "qty": 20,
            "unit": "grams",
        },
        {
            "name": "shrimp",
            "qty": 213,
            "unit": "grams",
        }
    ]
};

// ------------------------------------------------------

mine = ['pasta','banana','fish','cheese','water','red salsa','duck','chicken']
var sortedMine = mine.sort();

function check(arr) {
    var totalmatches = 0;
    for (i = 0; i < sortedMine.length; i++) {
        for (j = 0; j < arr.length; ++j) {
            if (sortedMine[i] == arr[j]) {

                console.log(sortedMine[i], arr[j]);
                totalmatches++;

            }

        }
    }

    if (totalmatches/arr.length === 1) {
        return 'Recipes match 100%';
    } else if (totalmatches/arr.length >= 0.8) {
        return "Recipes match greater than 80%";
    } else if (totalmatches/arr.length >= 0.5) {
        return "Recipes match greater than 50%";
    } else {
        return 'No good recipe matches';
    }
}
arr1 = ['fish','pasta','banana'] // 100%
arr2 = ['fish','pasta','banana','clock','red salsa','duck'] //>=80%
arr3 = ['fish','pasta','banana','clock'] //>=50%
arr4 = ['car','phone','sauce','pasta'] //<=50%
console.log(check(arr2));

// ------------------------------------------------------

// mine = ['pasta','banana','fish','cheese','water','pasta']
// arr1 = ['fish','pasta','banana']
// arr2 = ['car','phone','sauce']
//
// mineJoin = mine.join('').split('').sort()
// arr1Join = arr1.join('').split('').sort()
// arr2Join = arr2.join('').split('').sort()
// console.log(mineJoin);
// console.log(arr1Join);
// console.log(arr2Join);
//
// if (mineJoin === arr1Join) console.log('recipes match!');
// else console.log('no match.');
//
// if (mineJoin === arr2Join) console.log('recipes match!');
// else console.log('no match.');

// ------------------------------------------------------
// //WORK IN PROGRESS
//
// for (var i = 0; i < allRecipes.length; i++) {
//
//   console.log(allRecipes[i].title);
//   //query each recipe for ingredients
//   var eachRecipe = allRecipes[i].ingredients;
//   for (var j = 0; j < eachRecipe.length; j++) {
//     var oneRecipe = eachRecipe[j].name;
//     //query my ingredients
//     var myIng = myProfile.ingredients
//     for (var k = 0; k < myIng.length; k++) {
//       var mine = myIng[k].name;
//
//       //check ingredient match
//       if (oneRecipe !== mine){
//         break;
//       } else {
//         console.log(true, 'DATA '+oneRecipe, 'MINE ' +mine);
//       }
//
//       // if (oneRecipe === mine) {
//       //   console.log(true, 'DATA '+oneRecipe, 'MINE ' +mine);
//       //   break;
//       // } else {
//       //   // console.log(false, 'DATA '+oneRecipe, 'MINE ' +mine);
//       // }
//
//     }//end query of my ingredients
//
//   } //end query of each recipe's ingredients
//
// }//end query of each recipe
