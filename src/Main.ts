import { A } from "./A";

document.addEventListener("DOMContentLoaded", function(event) {
    main();
});


export function main() : string{
    const a = new A();
    return a.hi("Test");
}