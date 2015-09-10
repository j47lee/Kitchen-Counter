//works, to group by title
db.recipes.aggregate( [ { $group : { _id : "$title" } } ] )

//works, find title match
db.recipes.aggregate(
    [ { $match : { title : "Shrimp Scampi" } } ]
);

//works, searches two parameters
db.recipes.find( {
  $and: [ { title: "Shrimp Scampi" }, { prep_time: "15 minutes"} ]
})

//works
db.recipes.aggregate([
  {$unwind:"$ingredients"},{$group:{name:"mango"}}
])

//works, returns recipes with ingredient name shrimp
db.recipes.aggregate([
  {$unwind:"$ingredients"},{$match:{"ingredients.name":"mango"}}
])

//works, returns mango
db.recipes.aggregate([{$match:{"ingredients.name":"mango"}}])

//works, return mango or shrimp
db.recipes.aggregate([{$match:{"ingredients.name":{$in:["mango","shrimp"]}}}])

//works mango and shrimp
db.recipes.aggregate([{
  $match:{
    $and:
    [{"ingredients.name":"mango"},{"ingredients.name":"shrimp"}]
  }
}])




//doesnt work
db.recipes.aggregate([{$match:{"ingredients.name":"mango"},{$match:{"ingredients.name":"shrimp"}}])

mongo ds035613.mongolab.com:35613/kitchen-counter -u admin -p password
// sample recipe object
{
    "_id": {
        "$oid": "55ef6b39e4b0966f47938e72"
    },
    "title": "Shrimp Scampi",
    "imageUrl": "http://images.media-allrecipes.com/userphotos/720x405/630443.jpg",
    "ingredients": [
        {
            "name": "shrimp",
            "qty": "10",
            "unit": "grams"
        },
        {
            "name": "pasta",
            "qty": "15",
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
    "directions": "Bring a large pot of salted water to a boil. Stir in pasta and return pot to boil. Cook until al dente. Drain well.",
    "user_id": "55ef5248e362bc8352aa338d"
}
