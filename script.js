$(document).ready(function(){
    console.log(".ready!")
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Consultant", "Listener", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    console.log(typed)
});