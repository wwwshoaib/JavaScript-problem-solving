

//

const student = {
    name: 'Shoaib Ahmed',
    age: 39, 
    deppartment: 'Chemistry',

}


function useObject(obj) {
    const keys = Object.keys(obj); // getting keys of an object
   // console.log(keys);

    const valuesObj = Object.values(obj); //get values of an object
    //console.log(valuesObj)

    const getsKeysValues = Object.entries(obj); //getting keys and values
   // console.log(getsKeysValues);

    const lenthofKeys = Object.keys(obj).length;
    //console.log(lenthofKeys);

    const hasEmail = obj.hasOwnProperty('email');
    console.log(hasEmail);
}

useObject(student);