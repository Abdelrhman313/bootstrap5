// Handel video model
let closeModelBtn = document.getElementById("closeBtn"),
    video = document.getElementById("myVideo"),
    body = document.querySelector("body"),
    counterSction = document.getElementById("counterSection");

closeModelBtn.addEventListener("click", () => {
    video.pause();
    body.classList.add("resetDefault");
});

// Handel Loading page
let loadindSection = document.getElementById("loadSection");
setTimeout(() => {
    loadindSection.classList.add("fadeOutLoader");
    body.style.overflowY = "scroll";
}, 5000);

// Handel Progress Bar Effect
let progressSection = document.getElementById("progressSection"),
    progressBars = document.querySelectorAll(".progress-bar");

ScrollOut({
    targets: "#progressSection, #counterSection",
});

window.addEventListener("scroll", () => {
    if (progressSection.dataset.scroll == "in") {
        progressBars.forEach(el => {
            let widthValue = el.getAttribute("aria-valuenow");
            el.style.width = widthValue + "%";
            let spanValue = el.parentElement.parentElement.querySelector(".progress-value");
            let timer = setInterval(() => {
                if (Number(spanValue.textContent) < widthValue) {
                    spanValue.textContent = Number(spanValue.textContent) + 1;
                } else {
                    clearInterval(timer);
                }
            }, 100)
        })
    } else {
        progressBars.forEach(el => {
            el.style.width = 0;
            el.parentElement.parentElement.querySelector(".progress-value").textContent = 0;
        })
    }
    // Handel Counters 
    let counters = document.querySelectorAll(".counter-value");

    if (counterSction.dataset.scroll == "in") {
        counters.forEach(e => {
            let value = e.dataset.value;
            let counter = setInterval(() => {
                if (Number(e.textContent) < value) {
                    e.textContent = Number(e.textContent) + 1;
                } else {
                    clearInterval(counter);
                }
            }, 100)
        })
    } else {
        counters.forEach(e => {
            e.textContent = "0";
        })
    }
})

// light gallary 
lightGallery(document.getElementById('lightgallery'));

//filtration gallary
let listBars = document.querySelectorAll(".list-group-item"),
    listItems = document.querySelectorAll(".lightgallery a");

listBars.forEach(bar => {
    bar.addEventListener("click", () => {
        listBars.forEach(b => {
            b.classList.remove("active");
        })
        bar.classList.add("active");
        let barValue = bar.getAttribute("data-filter");
        console.log(barValue);
        if (barValue == "all") {
            listItems.forEach(i => {
                i.classList.remove("hidden-item");
                i.classList.add("show-item")
            })
        } else {
            listItems.forEach(item => {
                if (item.classList.contains(barValue)) {
                    item.classList.remove("hidden-item");
                    item.classList.add("show-item");
                } else {
                    item.classList.add("hidden-item");
                    item.classList.remove("show-item");
                }
            });
        }
    })
})

//AOS init;
setTimeout(() => {
    AOS.init();
}, 5500);