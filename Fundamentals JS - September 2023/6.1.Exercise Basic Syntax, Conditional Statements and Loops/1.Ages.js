function ages(age){

    if (age >= 0){
        if(age <= 2){
            console.log("baby");
        }
        else if(age <= 13){
            console.log("child");
        }
        else if(age <= 19){
            console.log("teenager");
        }
        else if(age <= 65){
            console.log("adult");
        }
        else{
            console.log("elder");
        }
    }
    else{
        console.log("out of bounds");
    }
}
ages(20);
ages(1);
ages(100);
ages(-1);


