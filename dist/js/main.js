const button = document.querySelector("#button");
const box1 = document.querySelector(".box");
const box2 = document.querySelector(".box-1");
const navItem = document.querySelectorAll(".nav-item");

// initial menu state
let showMenu = false;

button.addEventListener("click", toggleStart);

function toggleStart() {
	if (!showMenu) {
		box1.classList.add("show");
		box2.classList.add("show");
		navItem.forEach((item) => {
			item.classList.add("show");
		});

		// reset menu state
		showMenu = true;
	} else {
		box1.classList.remove("show");
		box2.classList.remove("show");
		navItem.forEach((item) => {
			item.classList.remove("show");
		});

		// init menu state
		showMenu = false;
	}
}
