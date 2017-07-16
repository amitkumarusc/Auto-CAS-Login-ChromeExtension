document.addEventListener('DOMContentLoaded', function () {
    var beagle_username_element = document.getElementById("beagle_username");
	var beagle_token_code_element = document.getElementById("beagle_token_code");

	var beagle_username = localStorage["beagle_username"];
	var beagle_token_code = localStorage["beagle_token_code"];

	beagle_username_element.value = beagle_username;
	beagle_token_code_element.value = beagle_token_code;
});


document.getElementById('save').addEventListener('click', function (){
	var username = document.getElementById("beagle_username").value;
	var token_code = document.getElementById("beagle_token_code").value;

	localStorage["beagle_username"] = username;
	localStorage["beagle_token_code"] = token_code;

	chrome.storage.sync.set({'beagle_username': username, 'beagle_token_code': token_code}, function() {
      console.log('Settings saved');
    });
});

document.getElementById('erase').addEventListener('click', function (){
	localStorage.removeItem("beagle_username");
	localStorage.removeItem("beagle_token_code");
	location.reload();
});