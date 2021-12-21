// Storing all the new custom scripts //
// Form processing //

const form = document.getElementById('rsvp-form');

form.addEventListener('submit')

$('#rsvp-form-2').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize();

    $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

    if (MD5($('#invite_code').val()) !== '6dd84f5f9ea3f610dbcf08b1758be6b9') {
        $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
    } else {
        $.post('https://script.google.com/macros/s/AKfycbyb3uGE6mE8hkf3_7QmUdDSZxHiwfujhqLwATM_5S8LSoyX8gcujPRDYoZMX93sAK9E/exec', data)
            .done(function (data) {
                console.log(data);
                if (data.result === "error") {
                    $('#alert-wrapper').html(alert_markup('danger', data.message));
                } else {
                    $('#alert-wrapper').html('');
                    $('#rsvp-modal').modal('show');
                }
            })
            .fail(function (data) {
                console.log(data);
                $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
            });
    }
});