function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}