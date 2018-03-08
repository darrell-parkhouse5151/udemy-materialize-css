$('.section').hide();

setTimeout(function() {
    $(document).ready(function() {
        $('.section').fadeIn();
        $('.loader').fadeOut();
        $('.button-collapse').sideNav();

        // counter
        $('.counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counters: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        $('.approve').on('click', function(e) {
            Materialize.toast('Comment approved', 30000);
            e.preventDefault();
        });

        $('.deny').on('click', function(e) {
            Materialize.toast('comment denied', 3000);
            e.preventDefault();
        })
    }, 1000);
});