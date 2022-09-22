
import Masonry from "masonry-layout";

window.addEventListener("load", () => {
    const grid = document.querySelector(".inner-tile-container");
  
    const masonry = new Masonry(grid, {
      itemSelector: ".grid-item",
    });
  });