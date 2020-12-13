let pic = document.getElementById("carouselPic");
/*let Link = document.getElementById("slick");

Link.addEventListener("click", carouselPic);

function carouselPic(event) {
    console.log(event.target.tagName);
    console.log(event.target.tagName == "IMG");
        Pic.style.display = "block";
        Pic.style.backgroundImage = "url(" + event.target.src + ")";
    }*/

    let listitem = document.getElementsByTagName("LI");
    for (let i = 0; i < listitem.length; i++) {
        listitem[i].addEventListener("click", carouselPic);
    }
    
    function carouselPic(e) {
        console.log(e.target.tagName);
        console.log(e.target.tagName == "LI");
        pic.style.display = "block";
        pic.style.backgroundImage = "url(" + e.target.src + ")";
    }