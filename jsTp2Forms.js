


function submitForm(){
    var name,lastname,age,password,email;

    name=verifyName(document.getElementById("name").value);
    if(!name){
        document.getElementById("inorrectName").innerHTML='max lenght 20 characters and no special characters are allowed';
    }else{
        document.getElementById("inorrectName").innerHTML='';
    }

    lastname=verifyName(document.getElementById("lastname").value);
    if(!lastname){
        document.getElementById("inorrectLastName").innerHTML='max lenght 20 characters and no special characters are allowed';
    }else{
        document.getElementById("inorrectLastName").innerHTML='';
    }

    age=verifyAge(document.getElementById("age").value);
    if(!age){
    document.getElementById("incorrectAge").innerHTML='only numbers are allowed';
    }else{
    document.getElementById("incorrectAge").innerHTML='';
    }

    password=verifyPassword(document.getElementById("password").value);
    if(!password){
        document.getElementById("incorrectPass").innerHTML='Password must have btw 9 and 20 characters at least one capital letter, one lowercase letter and one number';
        }else{
        document.getElementById("incorrectPass").innerHTML='';
    }

   email=verifyEmail(document.getElementById("email").value);
   if(!email){
    document.getElementById("incorrectEmail").innerHTML='only are allowed @gmail, @outlook and @icloud';
    }else{
    document.getElementById("incorrectEmail").innerHTML='';
    }
  // if(name && lastname && age && password){
    //HTMLFormElement.prototype.submit.call(firstForm);
  // }

}

function verifyName(name){
    //max 20 characters and no special characters
    var verified=false;
    if(testSpecial(name) || name.length>20 || name.length==0){
        verified=false;
    }else{
        verified=true
    }
    return verified;
}

function testSpecial(name){
    var spChars = "@#$%^&*()_+-=[]{};:,.<>/?]+/";
    var aux=0;
    for(var i=0;i<name.length;i++){
        aux=spChars.includes(name.charAt(i));
        if(aux!=false){
            console.log("entre " + aux);
            return true;
        }
    }
    return false;
}

function verifyAge(age){
    //optional only numbers
    var verified=false;
    if(!gotLetters(age)){
        verified=true;
    }
    return verified;
}

function gotLetters(string){
    var letters="abcdefghyjklmnopqrstuvwxyz";
    for(var i=0; i<string.length;i++){
        if(letters.indexOf(string.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}

function gotCapitalLetter(string){
    var letters="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    for(var i=0; i<string.length;i++){
        if(letters.indexOf(string.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
}

function gotNumber(value){
    var numbers="0123456789";
    const string=value.toString();
    for(var i=0;i<numbers.length;i++){
        if(string.indexOf(numbers.charAt(i),0!=-1)){
            return 1;
        }
    }
    return 0;
}

function verifyPassword(password){
    //mandatory between 9 and 20 characters at least one capital letter and one lowercase letter and at least one number
    var verified=false;
    if(passwordLength(password) && gotNumber(password) && gotLetters(password) && gotCapitalLetter(password)){
        verified=true;
    }else{
        verified=false;
    }
    
    return verified;
}

function passwordLength(password){
    if(password.length>9 && password.length<20)
    {
        return true;
    }
    return false;
}

function verifyEmail(email){
    //it must contains @ and .com, also only are allowed @gmail, @outlook and @icloud
    var array=['@gmail.com','@outlook.com','@icloud.com'];
    console.log(email);
    for(var i=0;i<array.length;i++){
        if(aux=email.includes(array[i])){
            return true;
        }
    }
    return false;
}