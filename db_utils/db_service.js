var redis = require('redis');

var redisClient = redis.createClient();

redisClient.on('connect',function(cc){
    console.log('db connection established');
    
})



module.exports.insert = function(key,value){
return new Promise(function(resolve,reject){
    redisClient.set(key,value,function(err,result){
        if(err){
            reject(err);
        }
        else{
            resolve(result);
        }
    })

})
}

module.exports.get = function(key){
    return new Promise (function(resolve,reject){
        redisClient.get(key,function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}