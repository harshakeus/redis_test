var redis = require('redis');

var redisClient = redis.createClient();

redisClient.on('connect',function(cc){
    console.log('db connection established');
    
})



module.exports.insert = function(key,value){
return new Promise(function(resolve,reject){
    redisClient.hset("users",key,value,function(err,result){
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
        redisClient.hget("users",key,function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}
module.exports.getall = function(){
    return new Promise (function(resolve,reject){
        redisClient.hgetall("users",function(err,result){
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}