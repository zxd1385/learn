// let submit;
// let z = document.querySelector(".entrance").valu;
// let n = parseInt(z);
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", console.log(document.querySelector(".entrance").valu));



function antegral(valu) {
    for (x = 2; x <= valu; x++) {
        submit = 0;
        // console.log(submit)
        for (i = 1; i <= x * x - x; i++) {

            // console.log(i)
            submit += (1 / x) * (1 / (1 + (1 / x) * i))
        }
        console.log(x,submit)
    }
}
 
antegral(68)

