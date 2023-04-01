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
        $("button#cancel").removeClass("table__components--hidden");
        $("button#saveModify").removeClass("table__components--hidden");
        $("button#clearModify").removeClass("table__components--hidden");
        $("button#modify").addClass("table__components--hidden");
    });

    //  Upload File
    $("input[type=file]").change(function (e){
        e.preventDefault();

        var file = $('input[type=file]').val().replace(/.*(\/|\\)/, '');;
        var output = "";
        if (file === "") {
            output = "Select a file";
        }
        else {
            output = file;
        }

        $("label#inputFileName").text(output);
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

        checkData += "File Name: ";
        var file = $('input[type=file]').val().replace(/.*(\/|\\)/, '');;

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

        backToViewPage();
    });

    // Cancel Modify
    $("button#cancel").click(function (e) {
        e.preventDefault();
        backToViewPage();
    });

    // Change Password
    $("button#changePassword").click(function (e) {
        e.preventDefault();

        $("form#form-main").addClass("form--hidden");
        $("form#form-password").removeClass("form--hidden");

    });

    // Cancel Change Password
    $("button#cancelPassword").click(function (e) {
        e.preventDefault();

        $("form#form-main").removeClass("form--hidden");
        $("form#form-password").addClass("form--hidden");
    });

    // Confirm Password Change
    $("button#confirmPassword").click(function (e) {
        e.preventDefault();

        const curForm = $("div#errorMessage");
        //alert($("div#div--errorMessage"));

        var curPass = $("input#currentPassword").val();
        var newPass = $("input#newPassword").val();
        var conNewPass = $("input#newPasswordConfirm").val();

        if (curPass == "" || newPass == "" || conNewPass == "") {
            setFormMessage(curForm, "error", "Colunms can't not be empty!");
            return;
        }
        if (curPass.length < 6 || newPass.length < 6 || conNewPass.length < 6) {
            setFormMessage(curForm, "error", "There must at least 6 charachters in the password field");
            return;
        }
        if (newPass != conNewPass) {
            setFormMessage(curForm, "error", "The two colunms of new password are not equal");
            return;
        }

        var noUpper = true;
        var noLower = true;
        var noNum = true;

        for (i = 0; i < newPass.length; i++) {
            if (newPass[i] >= 'A' && newPass[i] <= 'Z')
                noUpper = false;
            if (newPass[i] >= 'a' && newPass[i] <= 'z')
                noLower = false;
            if (newPass[i] >= '0' && newPass[i] <= '9')
                noNum = false;
        }

        var errMsg = "New password must contain at least one character of ";
        var cnt = 0;
        if (noUpper) {
            if (cnt == 1)
                errMsg += ","
            else if (cnt == 2)
                errMsg += " and "
            errMsg += "Upper alphabet ";
        }
        if (noLower) {
            if (cnt == 1)
                errMsg += ","
            else if (cnt == 2)
                errMsg += " and "
            errMsg += "Lower alphabet ";
        }
        if (noNum) {
            if (cnt == 1)
                errMsg += ","
            else if (cnt == 2)
                errMsg += " and "
            errMsg += "Number ";
        }

        if (errMsg != "New password must contain at least one character of ") {
            setFormMessage(curForm, "error", errMsg);
            return;
        }



        if (1) {
            setFormMessage(curForm, "sucess", "Password Change Suceed");
            $("input#currentPassword").val("");
            $("input#newPassword").val("");
            $("input#newPasswordConfirm").val("");
        }
    });

    // Reset Change Password
    $("button#clearPass").click(function (e) {
        e.preventDefault();
        $("input#currentPassword").val("");
        $("input#newPassword").val("");
        $("input#newPasswordConfirm").val("");
        setFormMessage($("div#errorMessage"), "error", "");
    });

    // Previous Page
    $("button#formerPage").click(function (e) {
        e.preventDefault();
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

function backToViewPage() {
    //  Final Block    

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
    $("button#cancel").addClass("table__components--hidden");
    $("button#saveModify").addClass("table__components--hidden");
    $("button#clearModify").addClass("table__components--hidden");
    $("button#modify").removeClass("table__components--hidden");

}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement;

    messageElement.html(message);
    messageElement.removeClass("form__message--sucess", "form__message--error");
    messageElement.addClass(`form__message--${type}`);
}