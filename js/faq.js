// ----------------------- pag3 js

function sechbarsslidcod() {
    let sechbar = document.querySelector(".schesikn")
    let scvhiknd = document.querySelector(".sech-ikkncontk")
    let sech = document.querySelector(".sech-barslik")
    let schwidth = document.querySelector(".sech-aiksn")
    let input2 = document.querySelector(".sech-input")
    let cojsech = document.querySelector("#csikd")


    sechbar.addEventListener("click", () => {
        scvhiknd.style.display = "none"
        schwidth.classList.add("sech-widrth")
        sech.classList.add("amimesns")
        input2.style.display = "block"
        cojsech.style.display = "block"
    })
    cojsech.addEventListener("click", () => {
        scvhiknd.style.display = "block"
        schwidth.classList.remove("sech-widrth")
        sech.classList.remove("amimesns")
        input2.style.display = "none"
        cojsech.style.display = "none"

    })

}
function ansarandquse() {
    let qusen = document.querySelectorAll(".qusen i")

    let convt = true
    qusen.forEach((e) => {
        e.addEventListener("click", () => {
            let a = e.parentElement.parentElement
            if (convt === true) {
                e.style.rotate = "360deg"
                a.style.height = "170px"
                convt = false
            } else {
                e.style.rotate = "180deg"
                a.style.height = "80px"
                convt = true

            }
        })
    })

}
function searchbarqusne() {
    let qusen = document.querySelectorAll(".qusen p")
    let sechbar = document.querySelector(".sech-input")

    sechbar.addEventListener("keyup", () => {
        let a = setTimeout(() => {
            clearTimeout(a)
            const inputsexhvalyu = sechbar.value.toLowerCase();

            qusen.forEach((qusn) => {
                const qusntext = qusn.innerText.toLowerCase();

                if (qusntext.includes(inputsexhvalyu)) {
                    qusn.parentElement.parentElement.style.display = "";
                } else {
                    qusn.parentElement.parentElement.style.display = "none";
                }
                if (inputsexhvalyu === "") {
                    qusn.parentElement.parentElement.style.display = "block";

                }


            })
        }, 300)
        // const inputsexhvalyu = sechbar.value.toLowerCase();

    })


}
function qusnpageallqusn() {
    let qusn = document.querySelector(".qusne-1")
    let qusn2 = document.querySelector(".qusne-2")
    let qusnbox1 = document.querySelector(".qusne-box-1")
    let qusnbox2 = document.querySelector(".qusn-box2")

    qusn.addEventListener("click", () => {
        qusnbox2.style.left = "-130%"
        qusnbox1.style.left = "10.5%"
        qusn2.classList.remove("f0ae00")
        qusn.classList.add("f0ae00")


    })

    qusn2.addEventListener("click", () => {
        qusnbox2.style.left = "10.5%"
        qusnbox1.style.left = "-130%"
        qusn.classList.remove("f0ae00")
        qusn2.classList.add("f0ae00")

    })

}
sechbarsslidcod()
ansarandquse()
searchbarqusne()
qusnpageallqusn()


