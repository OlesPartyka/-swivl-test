'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const switchElement = document.querySelector('.privacy__switch');
  const dropdownToggle = document.querySelector('.dropdown__toggle');
  const dropdown = document.querySelector('.dropdown');

  switchElement.addEventListener('click', function() {
    switchElement.classList.toggle('privacy__switch--active');
  });

  dropdownToggle.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown--active');
  });

  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('dropdown--active');
    }
  });
});
