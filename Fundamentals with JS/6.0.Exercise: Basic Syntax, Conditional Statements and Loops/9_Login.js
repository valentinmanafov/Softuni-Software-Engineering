function solve(input){
    let username = input[0];
    let password = "";

    for(let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }

    let guess = input[1];
    let index = 2;
    let br = 0;

    while(guess != password){

        br++
        if(br == 4){
            console.log(`User ${username} blocked`);
            return;
        }

        console.log("Incorrect password. Try again");

        guess = input[index];
        index++
    }
    console.log(`User ${username} logged in.`);
}
solve(['Acer','login','go','let me in','recA'])