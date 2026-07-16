let givenArray = [9, 10, 8, 6, 7, 5, 2, 3, 0, 1, 11];

if (givenArray.length > 0) {

    let max = givenArray[0];
    let min = givenArray[0];

    console.log(`Initial Max = ${max}`);
    console.log(`Initial Min = ${min}`);

    console.log("Finding maximum and minimum values...");

    for (let i = 1; i < givenArray.length; i++) {
//This works because a number cannot be both greater than the current maximum and less than the current minimum at the same time.
//However, using two independent if statements is a common practice because:
// It makes the logic easier to read.
// It remains correct even if the conditions become more complex in the future.
// It avoids unnecessarily coupling the maximum and minimum checks.

        if (givenArray[i] > max) {
            max = givenArray[i];
        }

        if (givenArray[i] < min) {
            min = givenArray[i];
        }
    }

    console.log(`Maximum number = ${max}`);
    console.log(`Minimum number = ${min}`);

} else {
    console.log("Given array is empty.");
}