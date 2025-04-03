let worksDiv = document.querySelector(".works")
let works = [
    {
        name: "LINES"
    }, {
        name: "RAND LINES"
    }, {
        name: "free palestine",
        link: "https://bbcmic.ro/?t=bMXtW"
    },
]
works.forEach((work, index) => {
    let workDIV = document.createElement("div")
    let workLink = document.createElement("a")
    workLink.href = `?disc1=${work.name}.ssd&autoboot=true`
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