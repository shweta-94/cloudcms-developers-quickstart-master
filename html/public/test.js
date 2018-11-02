$(function () {
    // Define an array of people.
    var people = [
        { id: 1, firstName: "Anthony", lastName: "Nelson" },
        { id: 2, firstName: "Helen", lastName: "Garcia" },
        { id: 3, firstName: "John", lastName: "Williams" }
    ];

    // Get the text for the Handlebars template from the script element.
    var templateText = $("#selectPersonTemplate").html();

    // Compile the Handlebars template.
    var selectPersonTemplate = Handlebars.compile(templateText);

    // Evaluate the template with an array of people.
    var html = selectPersonTemplate({ people: people });

    // Take the HTML that was created with the Handlebars template and
    // set the HTML in the myForm div element.
    $("#myForm").html(html);
});