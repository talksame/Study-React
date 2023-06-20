function repeat(count, callback){
    for (let i = 0 ; i < count; i++){
        callback(i + 1);
    }
}

function origin(count){
    console.log(count);
}

repeat(5, origin);