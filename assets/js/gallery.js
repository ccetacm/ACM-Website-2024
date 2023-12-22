let galleryContainers = document.querySelectorAll(".gallery_img_container");
let galleryModal = document.querySelector(".gallery_modal");

galleryContainers.forEach((imgContainer) => {
	let imgSpan = document.createElement("span");
	imgSpan.classList.add("gallery_img_span");
	imgSpan.style.backgroundImage = `url(assets/${
		imgContainer.querySelector(".gallery_img").src.split("/assets")[1]
	})`;
	imgContainer.appendChild(imgSpan);
	imgContainer.addEventListener("click", () => {
		let modalImg = document.querySelector(".gallery_modal_img");
		modalImg.src = `assets/${
			imgContainer.querySelector(".gallery_img").src.split("/assets")[1]
		}`;
		modalImg.setAttribute(
			"alt",
			imgContainer.querySelector("h4").innerText
		);
		galleryModal.showModal();
	});
});

function closeModal() {
	galleryModal.close();
}
