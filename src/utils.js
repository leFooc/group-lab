export const foo = () => {
    console.log("bar");
};

export const bar = (i = 10) => {
    if (i == 0) return;
    bar(i--);
};