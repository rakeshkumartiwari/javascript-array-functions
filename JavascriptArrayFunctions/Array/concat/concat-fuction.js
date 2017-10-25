$(function () {

    $btnList = $("#btnList");
    $btnNewList = $("#btnNewList");
    $lblResult = $("#lblResult");

    var people = [

        { name: "Rakesh" }, { name: "Ritesh" }, { name: "Rupesh" }, { name: "Rajnish" }
    ];
    var people1 = [
        { name: "Shivam" }, { name: "Rishi" }
    ];

    $btnList.click(function () {
        var lblResult = "";
        $lblResult.html("");
        $.each(people, function () {
            lblResult += this.name + "<br>";
        });
        $lblResult.html(lblResult)

    });


    $btnNewList.click(function () {
        var lblResult = "";
        $lblResult.html("");

        // here i used concat function
        $.each(people.concat(people1), function () {
            lblResult += this.name + "<br>";
        });
        $lblResult.html(lblResult)

    });
});