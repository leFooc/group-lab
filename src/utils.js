export const foo = (i = 1) => {

};

export const bar = (i) => {
    console.log(">>> say bar")
    if (i > 100) return;
    else foo(i++);
}