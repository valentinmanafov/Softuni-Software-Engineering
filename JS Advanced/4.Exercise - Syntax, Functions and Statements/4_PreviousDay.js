function solve(year, month, day) {
    let date = new Date(year, month, day - 1);

    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}
solve(2015, 5, 10);