// -------------------------page2 js

function slidsembars() {
    let ikn = document.querySelector(".ikn")
    let but = document.querySelector(".but")

    let ikn2 = document.querySelector(".ikn2")
    let but2 = document.querySelector(".but2")
    ikn.addEventListener("click", () => {
        let emlts = ikn.parentElement.parentElement
        emlts.style.height = "100px"
        ikn.style.display = "none"
        but.style.display = "block"
    })
    but.addEventListener("click", () => {
        let emlts = ikn.parentElement.parentElement
        emlts.style.height = "40px"
        ikn.style.display = "block"
        but.style.display = "none"
    })

    ikn2.addEventListener("click", () => {
        let emlts2 = ikn2.parentElement.parentElement
        emlts2.style.height = "150px"
        ikn2.style.display = "none"
        but2.style.display = "block"
    })
    but2.addEventListener("click", () => {
        let emlts2 = ikn2.parentElement.parentElement
        emlts2.style.height = "38px"
        ikn2.style.display = "block"
        but2.style.display = "none"
    })



}
function slidbarsmenu() {
    let cont = true
    let prodctsrecomdys = document.querySelector(".prodctsrecomdys p i")
    let boxs = document.querySelector(".prodctscad-boxs")

    prodctsrecomdys.addEventListener("click", () => {
        if (cont === true) {
            prodctsrecomdys.style.rotate = "180deg";
            boxs.style.display = "block"
            cont = false
        } else {
            prodctsrecomdys.style.rotate = "360deg";
            boxs.style.display = "none"
            cont = true
        }

    })

}
function sortProducts() {
    const sortValue = document.getElementById('sort').value;
    const container = document.getElementById('shop');
    const products = Array.from(container.getElementsByClassName('prodctsboxsw'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-peice'));
        const priceB = parseFloat(b.getAttribute('data-peice'));
        return sortValue === 'Price(Low to high)' ? priceA - priceB : priceB - priceA;
    });

    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
}

function CustomFilterMenubar() {
    let boxsklik = document.querySelectorAll(".custermbutonsclick");
    let ap = document.querySelector(".custmprodcts-hed")
    let allcliar = document.querySelector(".allcliar")
    let prodctsall = document.querySelector(".prodctsall-imgs")
    let prodctscadboxs = document.querySelector(".prodctscad-boxs")

    boxsklik.forEach((e) => {
        e.addEventListener("click", () => {

            e.children[0].children[0].classList.toggle("clicknn")
            let a = e.children[0].children[0].getAttribute("class")
            let clikd = e.innerText

            if (a !== "fa-solid fa-check clicknn") {
                let a = document.createElement("div")
                let cont = document.createElement("span")
                let ikn = document.createElement("i")

                a.classList.add("butonsbox-custm")
                ikn.classList.add("fa-solid")
                ikn.classList.add("fa-x")
                cont.innerText = clikd

                a.appendChild(cont)
                a.appendChild(ikn)
                ap.appendChild(a)
                allcliar.style.display = "block"
                prodctsall.style.marginTop = "4%";
                prodctscadboxs.style.marginTop = "4%";

                document.querySelectorAll(".butonsbox-custm").forEach((ea) => {
                    ea.addEventListener("click", () => {
                        if (ea.innerText === clikd) {
                            e.children[0].children[0].classList.add("clicknn")
                        }
                        ea.remove()
                        if (ap.children.length < 1) {
                            allcliar.style.display = "none"
                            prodctsall.style.marginTop = "0%";
                        }
                    })
                })
            }
            else {

                let butonsbox = document.querySelector(".butonsbox-custm")

                butonsbox.remove()

                if (ap.children.length > 0) {
                    allcliar.style.display = "block"

                } else {
                    allcliar.style.display = "none"
                    prodctsall.style.marginTop = "0%";
                    prodctscadboxs.style.marginTop = "0%";

                }
            }


            allcliar.addEventListener("click", () => {
                allcliar.parentElement.children[0].innerText = ""
                prodctsall.style.marginTop = "0%";
                allcliar.style.display = "none"
                e.children[0].children[0].classList.add("clicknn")

            })
        })
    })

}

slidsembars()
slidbarsmenu()
sortProducts()
CustomFilterMenubar()

