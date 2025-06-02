document.addEventListener("DOMContentLoaded", async function () {
	const views = await getViews(); //from views.js
	const displayEl = document.getElementById("display-views");
	if (displayEl) {
		displayEl.textContent = views;
	}
});
