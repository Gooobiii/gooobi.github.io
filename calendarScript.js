document.addEventListener('DOMContentLoaded', function() {
    // Handle click event for the 14th
    var clickable14 = document.getElementById('14');
    clickable14.addEventListener('click', function() {
        var selectedDateInput = document.getElementById('selectedDate');
        selectedDateInput.value = '2024-02-14'; // Set the value to February 14th
        clickable14.classList.add('selected');
        alert('DI KANA VACANT SA FEB 14! mine kana po :)');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var date14 = document.getElementById('14');
    date14.addEventListener('click', function() {
        window.location.href = 'combined.html';
    });
});
