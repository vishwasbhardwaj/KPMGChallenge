let obj = {"a":{"b":{"c":"d"}}};


function getObjectKeys(object, key) {
    var Keys = key.split('/');
   
    let obj = object;
    for (let ikey of Keys) {
        for (let [objKey, value] of Object.entries(obj)) 
        {
            if(!Keys.includes(objKey)) 
            {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}


console.log(getObjectKeys(obj,'a/b/c'));