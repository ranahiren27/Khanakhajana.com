var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
document.getElementById('get_corx').value= position.coords.latitude;
document.getElementById('get_cory').value=position.coords.longitude;
}