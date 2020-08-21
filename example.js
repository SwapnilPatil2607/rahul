const runProgram = (input) => {
    let users = [];
    input.split('\r\n').forEach((element) => {
        // Splits the output with every newLine and forEach element in the array
        // It further splits with a space For eg: 'rahul 22' will be ['rahul', '22']
        let processedInput = element.split(' ');
        let newPerson = {
            name: processedInput[0],
            age: +processedInput[1].replace('\r', ''),
            // In the above line we assign the values properly and check if the age contains '\r' if yes we remove it
            // and then convert the String into a Number format by adding '+' in the beginning
        };
        users.push(newPerson);
    });
    console.log(users);
};

process.stdin.resume();
process.stdin.setEncoding('ascii');
let read = '';
process.stdin.on('data', function (input) {
    read += input;
});
process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
});

process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
});
