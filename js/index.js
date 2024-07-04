/* Left Menu (Using .css() for direct manipulation) */
$(".open").click(function() {
    $("#leftMenu").css("width", "250px");
    $("#home-content").css("marginLeft", "250px");
});

$(".closebtn").click(function() {
    $("#leftMenu").css("width", "0px");
    $("#home-content").css("marginLeft", "0px");
});

/* Scroll Menu (Using .on() for event delegation) */
$("#leftMenu").on("click", "a", function(event) {
    event.preventDefault();
    var sectionId = $(this).attr("href");
    var $section = $(sectionId);

    if ($section.length) {
        var positionOfSection = $section.offset().top;
        $("html, body").animate({
            scrollTop: positionOfSection
        }, 2000, "swing"); // Use "swing" easing for smoother scrolling
    }
});

/* Accordion (Using .slideUp() and .slideDown()) */
$('#slider .toggle').click(function() {
    var $nextInner = $(this).next('.inner');
    $('.inner').not($nextInner).slideUp(500);
    $nextInner.stop(true, true).slideToggle(500);
});

/* Counter (Using a single interval) */
$(document).ready(function() {
    countDownToTime("10 October 2021 9:56:00");

    setInterval(function() {
        countDownToTime("10 October 2021 9:56:00");
    }, 1000);
});

function countDownToTime(countTo) {
    let futureDate = new Date(countTo).getTime();
    let now = new Date().getTime();
    let timeDifference = (futureDate - now) / 1000;

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference % 3600) / 60);
    let secs = Math.floor(timeDifference % 60);

    $(".days").text(`${days} D`);
    $(".hours").text(`${hours} h`);
    $(".minutes").text(`${mins} m`);
    $('.seconds').text(`${secs} s`);
}

/* Textarea (Using .text() for text content update) */
var maxLength = 100;
$('textarea').keyup(function() {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("Your available characters have finished");
    } else {
        $("#chars").text(AmountLeft);
    }
});
