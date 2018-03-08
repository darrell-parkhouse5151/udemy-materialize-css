$(document).ready(function() {
    $('.button-collapse').sideNav();

    $('.slider').slider({
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });

    $('.autocomplete').autocomplete({
        data: {
            "Aruba": null,
            "Cancun Mexico": null,
            "Hawaii": null,
            "Florida": null,
            "California": null,
            "Jamaica": null,
            "Europe": null,
            "The Bahamas": null,
        }
    });

    $('.scrollspy').scrollSpy()
});