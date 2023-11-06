"use strict"

const num_photos = 8;

const gallery = document.querySelector(".gallery");
const toggle_gallery_button = document.querySelector('#toggle_gallery_display');
const shuffle_gallery_button = document.querySelector('#shuffle_gallery');


for (let i = 0; i < num_photos; i++) {
    const img = document.createElement('img');
    img.src = `img/${i}.jpg`;
    let is_toggled = false;
    img.addEventListener("dblclick", (e) => {
        is_toggled = !is_toggled;

        if (is_toggled == true)
        {
            img.src = `img/default.jpg`;
        } else {
            img.src = `img/${i}.jpg`
        }
    });

    gallery.appendChild(img);
}

// show/hide gallery
toggle_gallery_button.addEventListener('click', (e) => {
    e.preventDefault();

    gallery.style.display = "grid";

    toggle_gallery_button.style.display = "none";
})

// shuffle gallery
shuffle_gallery_button.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = gallery.children.length; i >= 0; i--) {
        gallery.appendChild(gallery.children[Math.floor(Math.random() * i)]);
    }
})

