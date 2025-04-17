const image = document.getElementById('image');
const after = document.getElementById('after');
const before = document.getElementById('before');

const images = [
  'assets/image/Screenshot (19).png',
  'assets/image/Screenshot (22).png',
  'assets/image/Screenshot (272c).png',
];

let counter = 0;

image.src = images[counter];

function showImage() {
  image.classList.add('fade-out');

  setTimeout(() => {
    image.src = images[counter];
    image.classList.remove('fade-out');
  }, 300);
}

after.addEventListener('click', function () {
  counter = (counter + 1) % images.length;
  showImage();
});

before.addEventListener('click', function () {
  counter = (counter - 1 + images.length) % images.length;
  showImage();
});
