let cadboxcart = document.querySelector(".cad-boxcart");
let cart = document.querySelector(".cart")
let cadcolj = document.querySelector("#cad-colj")
let bgbl = document.querySelector(".bgbl")
let addcad = document.querySelectorAll(".add-cad")


cart.addEventListener("click", () => {
    cadboxcart.style.right = "0%"
    cadboxcart.style.opacity = 1;
    bgbl.classList.add("bgbalnk")
})

cadcolj.addEventListener("click", () => {
    cadboxcart.style.right = "-100%"
    cadboxcart.style.opacity = 0;
    bgbl.classList.remove("bgbalnk")

})
bgbl.addEventListener("click", () => {
    cadboxcart.style.right = "-100%"
    cadboxcart.style.opacity = 0;
    bgbl.classList.remove("bgbalnk")

})

addcad.forEach((ement) => {
    ement.addEventListener("click", () => {
        cadboxcart.style.right = "0%"
        cadboxcart.style.opacity = 1;
        bgbl.classList.add("bgbalnk")
    })

})

