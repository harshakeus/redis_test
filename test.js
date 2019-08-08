var rootpath = require('app-root-path');
const dbService = require(rootpath+'/db_utils/db_service');


setInterval(function(){
    
dbService.get('harsh').then(
    function(result){
        console.log(result);
    }
).catch(function(Err){
    console.log('err ',Err);
})
},8000)
