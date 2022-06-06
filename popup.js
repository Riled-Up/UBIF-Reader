function makeBtn() {

// Go ahead and create our button
var btn = document.createElement("button");
btn.type = "button";

// Get the current tab from background.js
var bgPage = chrome.extension.getBackgroundPage();
var currTab =  bgPage.getCurrentTab();

// Change the text of our button according to the URL
if (currTab.url.slice(0, 24) == "https://portal.ubif.net/") {
	btn.innerHTML = "Download Available";
} else {
	btn.innerHTML = "Download Unavailable";
}

// Add the button to the document
document.body.appendChild(btn);

}