import fs from 'fs'
import lod from 'lodash'
import os from 'os'

let user=os.userInfo()

fs.appendFile("greeting.txt","Hi"+user.username,()=>{
    console.log("file is created");
    
})

var data=["per","per",1,2,3,3,4,1] // [ 'per', 1, 2, 3, 4 ]
var unique=lod.uniq(data)
console.log(unique);
