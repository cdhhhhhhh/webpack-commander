const fs = require('fs')

exports.findSync = function(startPath){
    return fs.readdirSync(startPath).map((item)=>{
        return require('../config/'+item);
    })    
}
