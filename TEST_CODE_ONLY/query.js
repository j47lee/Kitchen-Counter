
//two recipes
allRecipes = [{"name":"Delicious Pasta",
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
}

];

myIng = {
    "ingredients": [
        {
            "name": "Angel pasta",
            "qty": 20,
            "unit": "grams",
        },
        {
            "name": "Chips",
            "qty": 213,
            "unit": "grams",
        }
    ]
};

for (var i = 0; i < allRecipes.length; i++) {
  var eachRecipe = allRecipes[i].ingredients;
  console.log(eachRecipe);
  for (var j = 0; j < eachRecipe.length; j++) {
    // console.log(eachRecipe[j]);
  }
}

// console.log(allRecipes[0].ingredients[0].name);
// console.log(myIng.ingredients[0].name);
