$(document).ready(function () {
    //  Modify Data
    $("#modify").click(function (e) {
        e.preventDefault();
        //alert('123');

        // Name && Age
        $("input#name").removeAttr("disabled");
        $("input#age").removeAttr("disabled");

        // Email && Address 
        $("input#email").removeAttr("disabled");
        $("input#address").removeAttr("disabled");

        //  Gender
        $("input#gender").addClass("table__components--hidden");
        $("button#genderF").removeClass("table__components--hidden");
        $("button#genderM").removeClass("table__components--hidden");

        //  Phone
        $("select#nationCode").removeClass("table__components--hidden");
        $("input#phoneNation").addClass("table__components--hidden");
        $("input#phoneLocal").removeAttr("disabled");

        // Img (Need Fixed)
        $("tr#uploadImg").removeClass("table__components--hidden");

        //  Bottom Button
        $("button#saveModify").removeClass("table__components--hidden");
        $("button#clearModify").removeClass("table__components--hidden");
        $("button#modify").addClass("table__components--hidden");
    });

    //  Gender Button Switch
    $("button#genderM").click(function (e) {
        e.preventDefault();
        $("button#genderM").removeClass("btn-light");
        $("button#genderM").addClass("btn-primary");

        $("button#genderF").removeClass("btn-primary");
        $("button#genderF").addClass("btn-light");
    });

    $("button#genderF").click(function (e) {
        e.preventDefault();
        $("button#genderF").removeClass("btn-light");
        $("button#genderF").addClass("btn-primary");

        $("button#genderM").removeClass("btn-primary");
        $("button#genderM").addClass("btn-light");
    });

    //  Save Modify Data
    $("button#saveModify").click(function (e) {
        e.preventDefault();

        var checkData = "";

        checkData += "Pics route: ";
        var file = $('input[type=file]').val();

        if (file === "") {
            checkData += "No Data Selected\n";
        }
        else {
            checkData += file + "\n";
        }

        checkData += "Name: " + $("input#name").val() + "\n";

        //  Gender Boolean Value
        //  Male: true;  Female: false
        var gender = $("button#genderM").hasClass("btn-primary");

        checkData += "Gender: ";
        if (gender) {
            checkData += "Man\n";
        }
        else {
            checkData += "Woman\n";
        }

        checkData += "Age: " + $("input#age").val() + "\n";

        checkData += "Telphone Number: " + $("select#nationCode :selected").text() + " " + $("input#phoneLocal").val() + "\n";

        checkData += "Email: " + $("input#email").val() + "\n";

        checkData += "Shipping Address: " + $("input#address").val() + "\n";

        checkData += "\nAre the data above all corrected ?"

        if (confirm(checkData)) {
            //Ajax Modify Here
            var saveSucess = true;

            if (saveSucess) {
                alert("Personal Data Change Sucessful");
            }
            else {
                alert("Personal Data Change Failed");
            }
        }
        else {

            return;
        }

        //  Final Block    
        {
            // Name && Age
            $("input#name").attr("disabled", "disabled");
            $("input#age").attr("disabled", "disabled");

            // Email && Address 
            $("input#email").attr("disabled", "disabled");
            $("input#address").attr("disabled", "disabled");

            //  Gender
            $("input#gender").removeClass("table__components--hidden");
            $("button#genderF").addClass("table__components--hidden");
            $("button#genderM").addClass("table__components--hidden");

            //  Phone
            $("select#nationCode").addClass("table__components--hidden");
            $("input#phoneNation").removeClass("table__components--hidden");
            $("input#phoneLocal").attr("disabled", "disabled");

            // Img (Need Fixed)
            $("tr#uploadImg").addClass("table__components--hidden");

            //  Bottom Button
            $("button#saveModify").addClass("table__components--hidden");
            $("button#clearModify").addClass("table__components--hidden");
            $("button#modify").removeClass("table__components--hidden");
        }
    });

    $("button#formerPage").click(function (e) {
        var modifyPage = $("button#modify").hasClass("table__components--hidden");
        if (modifyPage) {
            if (confirm("Data not save, do you sure you want to quit this page ?")) {
                
            }
            else {
                return;
            }
        }
        window.location.assign("../MemberCenter.html");
    });

});
