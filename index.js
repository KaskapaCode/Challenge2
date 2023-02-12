let whut = "";
function passValue(){
    whut = document.querySelector('input[name="rating"]:checked').value;
    localStorage.setItem("text", "You selected " + whut + " out of 5");
    return false;
}

