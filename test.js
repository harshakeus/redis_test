var rootpath = require('app-root-path');
const dbService = require(rootpath+'/db_utils/db_service');

dbService.insert('harsh','abc1').then(function(result){console.log(result)}).catch(function(err){console.log('err',err)});
dbService.insert('harh','abc1').then(function(result){console.log(result)}).catch(function(err){console.log('err',err)});



setInterval(function(){
    
    dbService.get('harsh').then(
        function(result){
            console.log(result);
        }
    ).catch(function(Err){
        console.log('err ',Err);
    });

    dbService.getall().then(function(result){
        console.log(typeof(result));
    })
},8000)

dbService.getall().then(function(result){
    console.log(result);
})


dbService.insert('harsha','abc2').then(function(result){console.log(result)}).catch(function(err){console.log('err',err)});

dbService.getall().then(function(result){
    console.log(result);
})
