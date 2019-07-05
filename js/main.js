$(document).ready(function () {
    rightbar();
    passwordvisibility();
    checkbokall();
    productpopups();
    // Navbar menu
    function rightbar() {
        $('.right-bar').hide();
        $('.more-details').hide();
        $('#rightBar').on('click',function (e) {
            $('.right-bar').css({
                'right':'0',
                'display':'block'
            });
            e.preventDefault();
        });
        $('.right-bar-toggle').on('click',function (e) {
            e.preventDefault();
            $('.right-bar').css({
                'right':'-270px',
                'display':'none'
            });
        });
        $('#more-details').on('click',function (e) {
            $('.more-details').toggle();
            e.preventDefault();
        })

    }

    // click  Password Visibility
    function passwordvisibility() {

        var password = $('#confirm_password').val();
        $('').on('click',function (e) {
            if (password.type === "password") {
                password.type = "text";
            } else {
                password.type = "password";
            }
            e.preventDefault();
        });
    }
    //   tooltip
    $('.bs-tooltip').tooltip();

   //   Popovers

    $('.bs-popover').popover();

    // Select all checkbok
    function checkbokall() {

        $('#gridCheck1').on('click',function (e) {
            var selectall = $('.form-check-input');
            selectall.prop('checked', $(this).prop('checked'));

        })
    }

    // Product id popups

    function productpopups() {
        $('#product-popups').hide();
        $('#producpopupid').on('click',function () {

            $('#product-popups').addClass('fadeInUp');
            $('#product-popups').show();
            $('#product-popups').height('65%');
            $('.close').show();
        });
        $('.close').click(function () {

            $('#product-popups').removeClass('fadeInUp');

            $('#product-popups').css({
                'bottom':'0',
            });
            $('#product-popups').height(0);
            $('.close').hide();
        });

    }
});