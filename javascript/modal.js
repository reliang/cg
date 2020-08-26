var modalContainer = document.getElementById("modals");
var modal; // store current open modal
var activeImage;

document.getElementById("gallery-listener").addEventListener("click", function (e) {
    // e.target is the clicked element
    if (e.target && e.target.nodeName == "IMG") {
        // Get the modal
        var modalID = e.target.id + "-modal";
        modal = document.getElementById(modalID);
        if (modal) {
            activeImage = modal.querySelector(".project-image .active");
            modal.style.display = "block";
        } else {
            $("#modals").load("modals.html #" + modalID, function (response, status, xhr) {
                if (status == "error") {
                    console.log("Error fetching modal");
                } else {
                    console.log(modalID);
                    modal = document.getElementById(modalID);
                    activeImage = modal.querySelector(".project-image .active");
                }
            });
        }

    }
});

modalContainer.addEventListener("click", function (e) {
    // e.target is the clicked element
    if (e.target && modal) {
        if (e.target.nodeName == "BUTTON") {
            modal.style.display = "none";
            modal = null;
        } else if (e.target.nodeName == "IMG" && activeImage && e.target !== activeImage) {
            // console.log("clicked");
            modal.classList.remove("show-video");
            activeImage.src = e.target.src;
        } else if (e.target.matches(".video-item span")) {
            modal.classList.add("show-video");
        }
    }
});

document.getElementById("site-title").addEventListener("click", function (e) {
    if (modal) {
        modal.style.display = "none";
        modal = null;
    }
});


// const activeImage = document.querySelector(".product-image .active");
// const productImages = document.querySelectorAll(".image-list img");
// const navItem = document.querySelector('a.toggle-nav');

// function changeImage(e) {
//     activeImage.src = e.target.src;
// }

// function toggleNavigation(){
//   this.nextElementSibling.classList.toggle('active');
// }

// productImages.forEach(image => image.addEventListener("click", changeImage));
// navItem.addEventListener('click', toggleNavigation);