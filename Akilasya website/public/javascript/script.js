const sideImage = document.getElementById("side-image")
const heroText = document.querySelector(".hero-text")
const logo = document.querySelector(".logo")
const certificateLink = document.querySelector(".certificates-link")
const certificatesContainer = document.querySelector(".certificates-container")
const cards = document.querySelectorAll(".card")
const servicesCards = document.querySelectorAll(".services-card")
const mapSVG = document.getElementsByClassName(".map")
var paths = document.getElementsByTagName("path")

var showingToolTip = false;
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
           entry.target.classList.add("fade-in") 
        }
        else {
            entry.target.classList.remove("fade-in")
        }
    })
})
var completedProjectsDegree = {"high": ["Amhara", "Oromiya", "Gambella", "Harari", "Afar"], "medium" :["Benishangul","Southern Nations"], "least": ["Tigray", "Somali"]}
var completedProjectsNumber = {"Amhara": 10, "Oromiya": 14, "Afar": 2,"Gambella": 3, "Harari": 2, "Addis Abeba": 6, "Tigray": 0, "Southern Nations": 3,"Somali": 0, "Benishangul": 1, "Gambela": 2, "Dire Dawa": 0}

function createTipBox(x,y,data) {
    var box = document.createElement("div")
    var regionDescription = document.createElement('h3')
    // get degree high,medium,least
    var degreeGlobal = null
   
    
    for (degree in completedProjectsDegree) {
        if (completedProjectsDegree[degree].includes(data)) {
            degreeGlobal = degree
        }
    }
    //Selecting the color of the circle
    var coloredCircle = document.createElement("div")
    coloredCircle.className = "path-colored-circle"
    if (degreeGlobal == "high") {
           coloredCircle.style.backgroundColor = "orange"
    }
    else if  (degreeGlobal == "medium") {
             coloredCircle.style.backgroundColor = "rgb(254, 200, 98)"
    }
    else {
        coloredCircle.style.backgroundColor = "rgb(229, 228, 228)"
    }
    
    var regionName = document.createElement("h2")
    regionName.textContent = data
    var completedProjects = completedProjectsNumber[regionName.textContent]     
   
    if (completedProjects == null) {
        completedProjects = ""
    }
    if (degreeGlobal == null) {
        degreeGlobal = ""
    }
     
    regionDescription.textContent = String(completedProjects)
    
    box.className = "tipbox"
    box.style.position = "absolute"
    box.style.top = 1100 + y + "px"
    box.style.left = x-50 + "px"
    box.appendChild(regionName)
    box.appendChild(coloredCircle)
    
    box.appendChild(regionDescription)
    document.body.appendChild(box)

    
}
function removeTipBox() {
    var tipbox = document.querySelector(".tipbox")
    tipbox.remove()
}


document.addEventListener('DOMContentLoaded', ()=> {
          sideImage.classList.add("fade-in")
          logo.classList.add("slide-down")
          console.log(mapSVG.length)
})

certificateLink.addEventListener('click', () => {
    window.scrollTo({top:window.innerHeight, behavior: "smooth"})
    console.log(certificatesContainer.children)
})
cards.forEach((element) => {
    observer.observe(element)

})
servicesCards.forEach((element) => {
    observer.observe(element)
})
document.querySelectorAll(".path").forEach((element) => {
    element.addEventListener("mouseover", ()=> {
        setTimeout(() => { 
        }, 100);
           var e = window.event;
           var x = e.clientX
           var y = e.clientY
           var data = element.getAttribute("data-tooltip")
           createTipBox(x,y,data)

    })
    element.addEventListener("mouseout", () => {
        removeTipBox()
    })
})