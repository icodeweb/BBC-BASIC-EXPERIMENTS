let worksDiv = document.querySelector(".works")
let works = [
    {
        name: "LINES"
    }, {
        name: "RAND LINES"
    }, {
        name: "free palestine",
        link: "https://bbcmic.ro/?t=bMXtW",
        master: true
    },
]
works.forEach((work, index) => {
    let workDIV = document.createElement("div")
    let workLink = document.createElement("a")
    workLink.href = `?disc1=${work.name}.ssd&autoboot=true${work.master ? "&model=Master" : ""}`
    workLink.innerText = work.name
    workDIV.appendChild(workLink)
    if (work.link) {
        let workCodeLink = document.createElement("a")
        workCodeLink.href = work.link;
        workCodeLink.innerText = "edit"
        workCodeLink.setAttribute("target", "_blank")
        workCodeLink.classList.add("codeLink")
        workDIV.appendChild(workCodeLink)
    }
    worksDiv.appendChild(workDIV)
})

let typed = new Typed('#title', {
    strings: ['........................\n.BBBBB...BBBBB....CCCC..\n.BB..BB..BB..BB..CC..CC.\n.BB..BB..BB..BB..CC.....\n.BBBBB...BBBBB...CC.....\n.BB..BB..BB..BB..CC.....\n.BB..BB..BB..BB..CC..CC.\n.BBBBB...BBBBB....CCCC..',],
    typeSpeed: 10,
    showCursor: false,
});

setTimeout(() => {
    let typedWhyAmISoSensitive = new Typed('#WhyAmISoSensitive', {
        strings: ["who cares?"],
        typeSpeed: 100,
        showCursor: false,
    });
    setTimeout(() => {
        let typedWhyAmISoSensitive = new Typed('#WhyAmISoSensitive', {
            strings: ["Whatever, Hi again, I never understood how people used these ‘80s computers to do anything. This page is where I figure it out and share what I learn."],
            typeSpeed: 50,
            showCursor: false,
        });
    }, 5000)
}, 10000)

let rgb3bit = ["000000", "ff0000", "00ff00", "0000ff", "00ffff", "ff00ff", "ffff00", "ffffff"]
document.querySelector("pre").addEventListener("mouseover", () => {
    const randomColor = rgb3bit[Math.floor(Math.random() * rgb3bit.length)];
    document.querySelector("pre").style.color = `#${randomColor}`;
})
