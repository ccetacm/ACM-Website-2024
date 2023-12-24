let galleryContainers = document.querySelectorAll(".gallery_img_container");
let galleryModal = document.querySelector(".gallery_modal");

document.addEventListener("DOMContentLoaded", () => {
	galleryContainers.forEach((imgContainer) => {
		let imgSpan = document.createElement("span");
		imgSpan.classList.add("gallery_img_span");
		if ("IntersectionObserver" in window) {
			imgSpan.style.backgroundImage =
				"url(assets/images/gallery/placeholder.webp)";
		} else {
			imgSpan.style.backgroundImage = `url(assets/${
				imgContainer
					.querySelector(".gallery_img")
					.src.split("/assets")[1]
			})`;
		}
		imgContainer.appendChild(imgSpan);
		imgContainer.addEventListener("click", () => {
			let modalImg = document.querySelector(".gallery_modal_img");
			modalImg.src = `assets/${
				imgContainer
					.querySelector(".gallery_img")
					.src.split("/assets")[1]
			}`;
			modalImg.setAttribute(
				"alt",
				imgContainer.querySelector("h4").innerText
			);
			galleryModal.showModal();
		});
	});

	if ("IntersectionObserver" in window) {
		let lazyImageLoader = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					let img = entry.target;
					img.src = img.dataset.src;
					entry.target.nextSibling.nextSibling.style.backgroundImage = `url(${img.src})`;
					img.classList.remove("lazy");
					lazyImageLoader.unobserve(img);
				}
			});
		});
		document.querySelectorAll(".lazy").forEach((img) => {
			lazyImageLoader.observe(img);
		});
	}
});

function closeModal() {
	galleryModal.close();
}
