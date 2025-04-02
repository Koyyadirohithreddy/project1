
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", function () {
        let name = document.getElementById("textInput1").value;
        alert("Hello from JavaScript");
        alert(name);
    });
});
