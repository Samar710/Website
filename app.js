(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

})();

$(document).ready(function() {
    $("#hiddenInputRate").hide();
    $("#Hiring").click(function() {
        $("#hiddenInputRate").show();
    });
    $("#Question").click(function() {
        $("#hiddenInputRate").hide();
    });
    $("#Comment").click(function() {
        $("#hiddenInputRate").hide();
    });
});


$('#PostalCode').on('keypress', function(event) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});