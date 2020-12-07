const request = require('request')

function checkprofile(userid){
    request(`https://users.roblox.com/v1/users/${userid}`,function(err,res,html){
        if (!err&&res.statusCode == 200){
            const obj = JSON.parse(html)
            console.log(`Name : ${obj.name}`)
            console.log(`Display Name : ${obj.displayName}`)
            console.log(`Join date : ${obj.created}`)
            console.log(`Desc : ${obj.description}`)
        }
    })   
}

function countfollowers(userid){
    request(`https://friends.roblox.com/v1/users/${userid}/followers/count`,function(err,res,html){
        if (!err&&res.statusCode == 200){
            const obj = JSON.parse(html)
            console.log(`Follower Counter : ${obj.count}`)
        }
    })
}

function countfriends(userid){
    request(`https://friends.roblox.com/v1/users/${userid}/friends/count`,function(err,res,html){
        if (!err&&res.statusCode == 200){
            const obj = JSON.parse(html)
            console.log(`Friend Counter : ${obj.count}`)
        }
    })
}

function gamestatus(userid){
    request(`https://api.roblox.com/users/${userid}/onlinestatus`,function(err,res,html){
        if (!err&&res.statusCode == 200){
            const obj = JSON.parse(html)
            console.log(`Game Id : ${obj.GameId}`)
            console.log(`Online : ${obj.IsOnline}`)
            console.log(`Status/Game : ${obj.LastLocation}`)
            console.log(`PlaceID : ${obj.PlaceId}`)
        }
    })
}


// U WILL USE IT HERE


// THING YOU WANT TO DO LIST checkprofile countfollowers countfriends

/*
usage:

if you want to use someone

get his profile id 

and do it like: 

function(id)

function list:

checkprofile(userid)
countfollowers(userid)
countfriends(userid)
gamestatus(userid)
*/

// made by god enjoy using
