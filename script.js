$(document).ready(function(){
    console.log(".ready!")
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Restaurant Consultant", "Sales Professional","Brand Ambassador", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["Restaurant Consultant", "Sales Professional","Brand Ambassador", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    console.log(typed)
});