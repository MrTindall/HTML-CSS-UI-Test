$(function () {

    // Start, Stop, Reset button 
    $("#startButton").on("click", function (e) {
        e.preventDefault();
        alert("Start was pressed");
    })

    $("#stopButton").on("click", function (e) {
        e.preventDefault();
        alert("Stop was pressed");
    })

    $("#resetButton").on("click", function (e) {
        e.preventDefault();
        if ($("#numberControl").val() != "") {
            alert("The value was: " + $("#numberControl").val());
            $("#numberControl").val('0')
        }

    })

    // Gets the cursor x and y position
    $("body").on("mouseover", function (e) {
        e.preventDefault();
        x = e.pageX;
        y = e.pageY;
    })

    // Button to submit IP address 
    // TODO get regex implemented
    $("#ipSubmitButton").on("click", function (e) {
            alert("IP Address is " + $("#ipInput").val())
    })

    // Toggle between light and dark mode
    $("#theme").on("change", function (e) {
        e.preventDefault();

        if ($(this).is(":checked") === false) {
            $("body").css("background-color", "rgb(220, 220, 220)");
            $(":root").css("--text-color", "rgb(50, 50, 50)");
            $("input").css("background-color", "white");
        }
        else {
            $("body").css("background-color", "#262626");
            $(":root").css("--text-color", "rgb(255, 255, 255)");
            $("input").css("background-color", "rgb(100, 100, 100)");
        }
    })

    // Increase and decrease button for the numeric input 
    $("#increaseButton").on("click", function (e) {
        let increaseNumVal = $("#numberControl").val();
        increaseNumVal++;
        $("#numberControl").val(increaseNumVal)
    })

    $("#decreaseButton").on("click", function (e) {
        let decreaseNumVal = $("#numberControl").val();
        decreaseNumVal--;
        $("#numberControl").val(decreaseNumVal)
    })






















    


})