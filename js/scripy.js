// -------------------------page1 js

$(function () {
    function prodctscadmuv() {
        let prodtbox = document.querySelectorAll(".prodct-box")

        prodtbox.forEach((e) => {
            e.addEventListener("mousemove", () => {
                let viecads = e.children[0].children[2];
                let imgbig = e.children[0].children[0];
                let imgzoom = e.children[0].children[1]
                let butonsvlyu = e.children[1].children[2]
                viecads.style.bottom = 0 + "px"
                butonsvlyu.style.bottom = 0 + "px"
                imgbig.style.display = "none";
                imgzoom.style.display = "block";
                viecads.style.opacity = 1
                butonsvlyu.style.opacity = 1

            })
            e.addEventListener("mouseleave", () => {
                let viecads = e.children[0].children[2];
                let butonsvlyu = e.children[1].children[2]
                let imgzoom = e.children[0].children[1]
                let imgbig = e.children[0].children[0];
                viecads.style.bottom = -60 + "px"
                butonsvlyu.style.bottom = -65 + "px"
                imgbig.style.display = "block";
                imgzoom.style.display = "none";
                viecads.style.opacity = 0
                butonsvlyu.style.opacity = 0

            })

        })


    }
    prodctscadmuv()
})
function rightleftbutons() {
    let leftbtn = document.querySelector(".leftsaero")
    let rightbtn = document.querySelector(".rightaero")
    let slider = document.querySelector(".prodctsallimg-cad")

    let leftbtn2 = document.querySelector(".leftsaero2")
    let rightbtn2 = document.querySelector(".rightaero2")

    let slider2 = document.querySelector(".prodctsallimg-cad2")


    let scroolwids = 0;
    $(function () {

        leftbtn.addEventListener("click", () => {
            let slid = slider.clientWidth / 6;
            scroolwids = scroolwids - slid;
            if (scroolwids < 0) {
                scroolwids = slid
            } else {
                slider.style.transform = `translateX(-${scroolwids}px)`;

            }

        })


        rightbtn.addEventListener("click", () => {
            let slid = slider.clientWidth / 6;
            let whoslisd = slider.scrollWidth - slider.clientWidth;

            scroolwids += slid
            if (scroolwids > whoslisd) {
                scroolwids = whoslisd
            } else {
                slider.style.transform = `translateX(-${scroolwids}px)`;

            }
        })
    })



    let scroolwids2 = 0;
    if (leftbtn2 !== null) {
        leftbtn2.addEventListener("click", () => {
            let slid = slider2.clientWidth / 6;
            scroolwids2 = scroolwids2 - slid;
            if (scroolwids2 < 0) {
                scroolwids2 = slid
            } else {
                slider2.style.transform = `translateX(-${scroolwids2}px)`;

            }

        })
    }
    if (rightbtn2 !== null) {
        rightbtn2.addEventListener("click", () => {
            let slid = slider2.clientWidth / 6;
            let whoslisd = slider2.scrollWidth - slider2.clientWidth;

            scroolwids2 += slid
            if (scroolwids2 > whoslisd) {
                scroolwids2 = whoslisd
            } else {
                slider2.style.transform = `translateX(-${scroolwids2}px)`;

            }
        })
    }






}



// ----------------------- pag4 js

function bgcolors() {
    let semclass = document.querySelectorAll(".semclass")
    semclass.forEach((e) => {
        e.addEventListener("mousemove", () => {
            e.style.backgroundColor = "#f0f0f0"

        })
        e.addEventListener("mouseleave", () => {
            e.style.backgroundColor = "white"

        })

    })

}

rightleftbutons()
bgcolors()






