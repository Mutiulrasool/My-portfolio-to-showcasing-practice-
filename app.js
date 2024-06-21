document.addEventListener("DOMContentLoaded", function () {

    function myFunction() {
        var a = document.getElementById("dropdown-li");
        if (a.querySelector("select")) {
            return;
        }
        var b = document.createElement("select");
        var option1 = document.createElement("option");
        option1.text = "Javascript";
        option1.value = "#Js-section"
        var option2 = document.createElement("option");
        option2.text = "CSS";
        option2.value = "#CSS-section"
        var option3 = document.createElement("option");
        option3.text = "HTML";
        option3.value = "#HTML-section"
        b.add(option1);
        b.add(option2);
        b.add(option3);
        a.appendChild(b);
        b.style.margin = "5px 5px";
        b.addEventListener("change", function() {
            var selectedValue = b.value;
            if (selectedValue) {
                window.location.href = selectedValue;
            }
        });
    }
    document.getElementById("dropdown-li").addEventListener("click", myFunction);








})