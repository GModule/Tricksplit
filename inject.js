// INJECTION 
// By Amy
(function() {
    var x = document.createElement("script");
    x.src = "URL//";
    x.onload = alert("Loaded GModule!");
    document.head.appendChild(x);
})()
