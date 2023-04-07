$(document).ready(function () {

    $("button#member").click(function (e) {
        e.preventDefault();
        toggleFunciton('member');


    });
    $("button#merchant").click(function (e) {
        e.preventDefault();
        toggleFunciton('merchant');


    });
    $("button#order").click(function (e) {
        e.preventDefault();
        toggleFunciton('order');


    });

    $("input#mutipleDay").on("change", function (e){
        e.preventDefault();

        var isChecked = $(this).is(":checked");

        const lineA = $("th#mutipleColA");
        const lineB = $("tr#mutipleColB");

        if(isChecked){
            lineA.attr("rowspan","2");
            lineB.removeClass("table__components--hidden")
        }   
        else{
            lineA.attr("rowspan","1");
            lineB.addClass("table__components--hidden")
        }
    });
});

function toggleFunciton(f) {
    /*
        Function list:
            'member'    : modify member data
            'merchant'  : modify merchant data
            'order'     : modify all orders
    */

    const memberButton = $("button#member");
    const merchantButton = $("button#merchant");
    const orderButton = $("button#order");

    const memberForm = $("form#form__member");
    const merchantForm = $("form#form__merchant");
    const orderForm = $("form#form__order");

    memberButton.removeClass("btn-secondary");
    merchantButton.removeClass("btn-secondary");
    orderButton.removeClass("btn-secondary");

    merchantButton.removeClass("btn-primary");
    memberButton.removeClass("btn-primary");
    orderButton.removeClass("btn-primary");

    orderForm.removeClass("form--hidden");
    merchantForm.removeClass("form--hidden");
    memberForm.removeClass("form--hidden");

    if (f == "member") {
        memberButton.addClass("btn-primary");
        merchantButton.addClass("btn-secondary");
        orderButton.addClass("btn-secondary");

        orderForm.addClass("form--hidden");
        merchantForm.addClass("form--hidden");
        //memberForm.addClass("form--hidden");
    }
    else if (f == "merchant") {
        memberButton.addClass("btn-secondary");
        merchantButton.addClass("btn-primary");
        orderButton.addClass("btn-secondary");

        orderForm.addClass("form--hidden");
        //merchantForm.addClass("form--hidden");
        memberForm.addClass("form--hidden");
    }
    else if (f == 'order') {
        memberButton.addClass("btn-secondary");
        merchantButton.addClass("btn-secondary");
        orderButton.addClass("btn-primary");

        //orderForm.addClass("form--hidden");
        merchantForm.addClass("form--hidden");
        memberForm.addClass("form--hidden");
    }
}