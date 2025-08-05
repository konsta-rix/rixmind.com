document.addEventListener("DOMContentLoaded", function(){
    var user = "info";
    var domain = "rixmind.com";
    var link = document.createElement("a");
    link.href = "mailto:" + user + "@" + domain;
    link.textContent = user + "@" + domain;
    document.getElementById("email-holder").appendChild(link);
});