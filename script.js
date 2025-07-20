'use strict';

const toggleBtn = document.querySelector('.toggle__btn');
const toggleIcon = document.querySelectorAll('.toggle__icon');

toggleBtn.addEventListener('click', function () {
  document.querySelector('html').classList.toggle('dark');

  toggleIcon.forEach((icon) => icon.classList.toggle('toggle__icon--hidden'));
});
