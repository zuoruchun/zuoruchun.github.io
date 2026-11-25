const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const mobileLayout = window.matchMedia("screen and (max-width: 760px)");

if (menuToggle && siteNav) {
	function setExpanded(expanded) {
		menuToggle.setAttribute("aria-expanded", String(expanded));
	}

	function syncLayout() {
		menuToggle.hidden = !mobileLayout.matches;
		setExpanded(false);
	}

	syncLayout();
	mobileLayout.addEventListener("change", syncLayout);
	menuToggle.addEventListener("click", () => {
		setExpanded(menuToggle.getAttribute("aria-expanded") === "false");
	});
	document.addEventListener("click", (event) => {
		if (!menuToggle.contains(event.target) && !siteNav.contains(event.target)) {
			setExpanded(false);
		}
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
			setExpanded(false);
			menuToggle.focus();
		}
	});
}
