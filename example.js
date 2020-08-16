const runProgram = (input) => {
    let users = [];
    input.split('\r\n').forEach((element) => {
        processedInput = element.split(' ');
        let newPerson = {
            name: processedInput[0],
            age: +processedInput[1].replace('\r', ''),
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
