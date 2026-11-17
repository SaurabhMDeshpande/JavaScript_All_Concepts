function getEvenNumber(value, delay){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(value % 2 == 0){
                resolve(value);
            }
            else{
                reject(new Error("value is not even number"));
            }
        }, delay);
    });
}

//promise chain:
getEvenNumber(4, 1000)
        .then(result =>{
            console.log("step 1 : gettng the result with even number: ", result);
           return getEvenNumber(7, 2000);
        })
        .then(result => {
            console.log("step 2 : gettng the result with even number: ", result);

        })
        // if code is not in the chain, it will be handled by catch block
        .catch(error =>{
            console.error("promise chain error: ", error.message);
        });