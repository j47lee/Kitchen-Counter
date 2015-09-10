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

//works, returns recipes with mango and yogurt and pineapple
db.recipes.aggregate([{
  $match:{
    $and:
    [{"ingredients.name":"mango"},{"ingredients.name":"yogurt"},{"ingredients.name":"pineapple"}]
  }
}])





//doesnt work
db.recipes.aggregate([{$match:{"ingredients.name":"mango"},{$match:{"ingredients.name":"shrimp"}}])

mongo ds035613.mongolab.com:35613/kitchen-counter -u admin -p password
// sample recipe object
{
    "_id": {
        "$oid": "55ef6b73e4b0966f47938e7b"
    },
    "title": "Mango Yogurt Smoothie",
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
    "directions": "Place mango, banana, orange juice, and yogurt in a blender. Blend until smooth. Serve in clear glasses, and drink with a bendy straw!",
    "user_id": "55ef5248e362bc8352aa338d"
}
///////// USER INGREDIENTS =======================================================
//works, returns users with mango in their ingredients



//sample user object
{
    "_id": {
        "$oid": "55ef5248e362bc8352aa338d"
    },
    "password": "$2a$10$Pp2cvMGFG1FNF1BKQK8WSO7/yPgRE230hiIgtEpjF9EdQrVvuUfjS",
    "email": "j47lee@gmail.com",
    "name": "Jonathan",
    "groceryList": [],
    "ingredients": [
        {
            "name": "mango",
            "qty": 20,
            "unit": "grams",
            "_id": {
                "$oid": "55ef52aae362bc8352aa338f"
            },
            "expiry": {
                "$date": "2020-01-01T08:00:00.000Z"
            }
        },
        {
            "name": "banana",
            "qty": 12,
            "unit": "grams",
            "_id": {
                "$oid": "55f073e0db9cb9f61faba1f4"
            },
            "expiry": {
                "$date": "2015-01-01T08:00:00.000Z"
            }
        },
        {
            "name": "pasta",
            "qty": 34,
            "unit": "grams",
            "_id": {
                "$oid": "55f08760138d35d935a2eeb2"
            },
            "expiry": {
                "$date": "2015-01-01T08:00:00.000Z"
            }
        },
        {
            "name": "milk",
            "qty": 2,
            "unit": "grams",
            "_id": {
                "$oid": "55f087feecc7217036ffb4a6"
            },
            "expiry": {
                "$date": "2015-01-01T08:00:00.000Z"
            }
        },
        {
            "name": "yogurt",
            "qty": 123,
            "unit": "grams",
            "_id": {
                "$oid": "55f1ff9da0f2c53d4a4b6453"
            },
            "expiry": {
                "$date": "2018-01-02T08:00:00.000Z"
            }
        }
    ],
    "__v": 30
}
