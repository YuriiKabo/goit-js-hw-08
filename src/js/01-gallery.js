import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item">
      <a class="gallery__link" href=${img.original}>
      <img
      class="gallery__image"
      src=${img.preview}
      alt=${img.description}
    />
    </a>
    </div>`
  )
  .join("");
galleryList.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  disableRightClick: true,
});
