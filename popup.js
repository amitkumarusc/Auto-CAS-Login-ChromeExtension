function saveSettings(){
	var username = document.getElementById("beagle_username").value;
	var token_code = document.getElementById("beagle_token_code").value;

	localStorage["beagle_username"] = username;
	localStorage["beagle_token_code"] = token_code;

	chrome.storage.sync.set({'beagle_username': username, 'beagle_token_code': token_code}, function() {
      console.log('Settings saved');
    });
};

function getSettings(){
	var beagle_username_element = document.getElementById("beagle_username");
	var beagle_token_code_element = document.getElementById("beagle_token_code");

	var beagle_username = localStorage["beagle_username"] || "";
	var beagle_token_code = localStorage["beagle_token_code"] || "";

	beagle_username_element.value = beagle_username;
	beagle_token_code_element.value = beagle_token_code;
};

function eraseSettings(){
	localStorage.removeItem("beagle_username");
	localStorage.removeItem("beagle_token_code");
	location.reload();
};

document.addEventListener('DOMContentLoaded', getSettings);

document.addEventListener("focus", saveSettings, true);

document.getElementById('save').addEventListener('click', saveSettings);

document.getElementById('erase').addEventListener('click', eraseSettings);