makeBtn();

async function makeBtn() {

// Go ahead and create our button
var btn = document.createElement("button");
btn.type = "button";

// Get the current tab from background.js
let queryOptions = { active: true, lastFocusedWindow: true };
let [currTab] = await chrome.tabs.query(queryOptions);

// Change the text of our button according to the URL
if (currTab.url.slice(0, 24) == "https://portal.ubif.net/") {
	btn.style.background = "LightGreen";
	btn.innerHTML = "Download Available";
} else {
	btn.style.background = "LightCoral";
	btn.innerHTML = "Download Unavailable";
}

// Add the button to the document
document.body.appendChild(btn);

}
