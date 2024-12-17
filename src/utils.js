export const foo = (i = 1) => {
    console.log("helloworld");
}

export const bar = (i) => {
    console.log(">>> say bar")
    if (i > 100) return;
    else foo(i++);
}

console.log("Commit from A");

console.log("Commit from branch new");