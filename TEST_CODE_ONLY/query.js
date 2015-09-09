
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
              "name": "angel hair pasta",
              "qty": "10",
              "unit": "grams"
          },
          {
              "name": "mango",
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

//MY INGREDIENTS ================================================================
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
//CREATING ARRAY OF MY INGREDIENTS FROM USER OBJECT ====================
var myIngredientsArray = [];
myIngredients = myObject.ingredients
for (var k = 0; k < myIngredients.length; k++) {
  myIngredientsArray.push(myIngredients[k].name)
}
// console.log(myIngredientsArray);

//COMPARE FUNCTION =============================================================
function check(arr) {
    var totalmatches = 0;
    for (i = 0; i < myIngredientsArray.length; i++) {
        for (j = 0; j < arr.length; j++) {

            if (myIngredientsArray[i] == arr[j]) {

                // console.log('MATCHES', myIngredientsArray[i], arr[j]);
                totalmatches++;

            } else {
                // console.log('NO MATCH', myIngredientsArray[i], arr[j]);
            } //end if-statement

        } //end for-loop on 'arr' (which is an array of each recipe's ingredients)
    } //end for-loop on myIngredientsArray

    if (totalmatches/arr.length === 1) {
        console.log('Recipe matches 100%');
    } else if (totalmatches/arr.length >= 0.8) {
        console.log("100% >= Recipe matches your Ingredients >= 80%");
    } else if (totalmatches/arr.length >= 0.5) {
        console.log("80% >= Recipe matches your Ingredients >= 50%");
    } else {
        console.log('No recipes match your ingredients');
    }
}

//QUERY ALL RECIPES =============================================================
var ingredientsArray = [];
//grabbing each recipe
for (var i = 0; i < allRecipes.length; i++) {
    eachRecipeIngredients = allRecipes[i].ingredients
    // console.log(eachRecipeIngredients);
    for (var j = 0; j < eachRecipeIngredients.length; j++) {
      eachIngredient = eachRecipeIngredients[j].name
      // console.log(eachRecipeIngredients[j].name);
      ingredientsArray.push(eachIngredient)
    }
      console.log(ingredientsArray);

    ///////// COMPARE MY INGREDIENTS WITH EACH RECIPE HERE ////////////////
    check(ingredientsArray);

    ingredientsArray = [];
    // console.log(ingredientsArray);

} //end for-loop on allRecipes








// //LOGIC ============================================================
// mine = ['pasta','banana','fish','cheese','water','red salsa','duck','chicken']
//
// function check(arr) {
//     var totalmatches = 0;
//     for (i = 0; i < mine.length; i++) {
//         for (j = 0; j < arr.length; ++j) {
//             if (mine[i] == arr[j]) {
//
//                 totalmatches++;
//
//             }
//
//         }
//     }
//
//     if (totalmatches/arr.length === 1) {
//         return 'Recipes match 100%';
//     } else if (totalmatches/arr.length >= 0.8) {
//         return "Recipes match greater than 80%";
//     } else if (totalmatches/arr.length >= 0.5) {
//         return "Recipes match greater than 50%";
//     } else {
//         return 'No good recipe matches';
//     }
// }
//
// //test arrays
// arr1 = ['fish','pasta','banana'] // 100%
// arr2 = ['fish','pasta','banana','clock','red salsa','duck'] //>=80%
// arr3 = ['fish','pasta','banana','clock'] //>=50%
// arr4 = ['car','phone','sauce','pasta'] //<=50%
// console.log(check(arr2));
