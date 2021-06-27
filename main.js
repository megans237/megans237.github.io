function showAlert() {
    window.alert("You've just clicked the button!")
}

function changeHeading() {
    document.getElementById("title").innerHTML = "Bananas";
}

function changeHeadingDynamic() {
    // 1. Get the value from the input
    let content = document.getElementById("text-input").value;
    // 2. Update the value in the heading
    if (content === "") {
        content = "Pls reset";
    }
    document.getElementById("title").innerHTML = content;
}

function toFunctionality() {
    
}
