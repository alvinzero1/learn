export const blackbox = (condition) => {
    console.log("> blackbox >: { called: " + condition + " }") // true
    return { called: condition };
};