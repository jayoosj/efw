$(document).ready(function () {

    $("#price").hide();
});

function calculate() {

    var no_months = $("#no_months").val();
    var rent = $("#rent").val();
    var usage = $("#usage").val();
    var deposit = $("#deposit").val();

    var nyear = (no_months) / 12;

    var nyear2, efilingworkscharg, stampduty;
    if (nyear <= 1)
        nyear2 = 1;
    else if (nyear > 1 && nyear <= 2)
        nyear2 = 2;
    else if (nyear > 2 && nyear <= 3)
        nyear2 = 3;
    else if (nyear > 3 && nyear <= 4)
        nyear2 = 4;
    else if (nyear > 4 && nyear <= 5)
        nyear2 = 5;


    var totalamt = (rent * no_months) + (deposit * 0.10 * nyear2);
    var stamp = (totalamt * 0.25) / 100;

    var rno = stamp % 100;
    var dno = (stamp / 100).toFixed(0);
    var no = (dno * 100);

    if (rno >= 50) {
        stampduty = no + 100;
    }
    else if (rno < 50) {
        stampduty = no;
    }

    if (stampduty < 100) {
        stampduty = 100;
    }

    var gstRate = 18;
    var registrationfee = 1000;
    var serviceCharge = 999;
    var gstOnServiceCharges = parseInt(((999 * gstRate) / 100).toFixed(0));
    var efilingworkscharg = stampduty + registrationfee + serviceCharge;

    //$("#l_tax").html(tax);          
    $("#l_total").html(efilingworkscharg);
    $("#d_total").html(efilingworkscharg - 100);
    $("#copon_code").html("FEST100")
    $("#price").show();
}

$('.nav-link, .navbar-brand, .new-button').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
}); 

$('#submit').click(function() {      
    var sectionTo = $("#price");      
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 82
    }, 1500);
}); 
