
//two recipes
allRecipes = [
    {
      "_id": {
          "$oid": "55ef6b39e4b0966f47938e72"
      },
      "title": "Shrimp Scampi",
      "imageUrl": "http://images.media-allrecipes.com/userphotos/720x405/630443.jpg",
      "ingredients": [
          {
              "name": "mango",
              "qty": "10",
              "unit": "grams"
          },
          {
              "name": "angel hair pasta",
              "qty": "15",
              "unit": "grams"
          }
      ],
      "prep_time": "15 minutes",
      "cook_time": "1 hour",
      "directions": "Bring a large pot.",
      "user_id": "55ef5248e362bc8352aa338d"
    },
    {
    "_id": {
        "$oid": "55ef6b73e4b0966f47938e7b"
    },
    "title": "Gloomy Day Smoothie",
    "imageUrl": "http://images.media-allrecipes.com/userphotos/600x600/607006.jpg",
    "ingredients": [
        {
            "name": "mango",
            "qty": "6",
            "unit": "grams"
        },
        {
            "name": "yogurt",
            "qty": "2",
            "unit": "grams"
        }
    ],
    "prep_time": "5 minutes",
    "cook_time": "10 minutes",
    "directions": "Place mango, banana, orange juice, and yogurt in a blender.",
    "user_id": "55ef5248e362bc8352aa338d"
  }

];

myObject = {
    "_id": {
        "$oid": "55ee814fa694923017a3f2ed"
    },
    "password": "$2a$10$0I7qhnxPgaYjV7eXsB03yONCbqhFJQqidFGuTvkFOlnulco5XZWdS",
    "email": "jimmy@gmail.com",
    "name": "Jimmy",
    "groceryList": [],
    "ingredient": [],
    "__v": 2,
    "ingredients": [
        {
            "name": "mango",
            "qty": 10,
            "unit": "liters",
            "_id": {
                "$oid": "55ef58aefb32d33053e94339"
            },
            "expiry": {
                "$date": "2018-03-31T07:00:00.000Z"
            }
        },
        {
            "name": "yogurt",
            "qty": 34,
            "unit": "grams",
            "_id": {
                "$oid": "55f089194aab2630372e952e"
            },
            "expiry": {
                "$date": "2019-01-02T08:00:00.000Z"
            }
        },
        {
            "name": "banana",
            "qty": 4,
            "unit": "grams",
            "_id": {
                "$oid": "55f089194aab2630372e952e"
            },
            "expiry": {
                "$date": "2019-01-02T08:00:00.000Z"
            }
        }
    ]
}

// ------------------------------------------------------
//QUERY MY USER OBJECT AND CREATING ARRAY OF INGREDIENTS ==================
var myArrayOfIngredients = [];
myIngredients = myObject.ingredients
for (var i = 0; i < myIngredients.length; i++) {
  myArrayOfIngredients.push(myIngredients[i].name)
}
console.log(myArrayOfIngredients);

//QUERY ALL RECIPES =============================================================
var arrayOfIngredients = [];

//grabbing one recipe
for (var i = 0; i < allRecipes.length; i++) {
    eachRecipeIngredients = allRecipes[i].ingredients
    // console.log(eachRecipeIngredients);
  for (var j = 0; j < eachRecipeIngredients.length; j++) {
    eachIngredient = eachRecipeIngredients[j].name
    // console.log(eachRecipeIngredients[j].name);
    arrayOfIngredients.push(eachIngredient)
  }
  console.log(arrayOfIngredients);
  arrayOfIngredients = [];
}


//LOGIC ==========================================
mine = ['pasta','banana','fish','cheese','water','red salsa','duck','chicken']
var sortedMine = mine.sort();

function check(arr) {
    var totalmatches = 0;
    for (i = 0; i < sortedMine.length; i++) {
        for (j = 0; j < arr.length; ++j) {
            if (sortedMine[i] == arr[j]) {

                // console.log(sortedMine[i], arr[j]);
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
