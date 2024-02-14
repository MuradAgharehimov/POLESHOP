function toggleDropdown(dropdownId, show) {
    var dropdownMenu = document.getElementById(dropdownId);
    if (show) {
        dropdownMenu.classList.add('show');
    } else {
        dropdownMenu.classList.remove('show');
    }
}