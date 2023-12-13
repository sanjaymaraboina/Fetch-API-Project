
// const url = "https://fakestoreapi.com/products";
// const imageContainer = document.getElementById('grid');
// const loadMoreBtn = document.getElementById('loadMoreBtn');
// let currentPage = 1;

// function fetchImages(page) {
//     return fetch(`${url}?page=${page}`)
//         .then(response => response.json());
// }

// function displayImages(images) {
//     images.forEach(image => {
//         const imgElement = document.createElement('img');
//         imgElement.src = image.image;
//         imgElement.alt = image.title;
//         imageContainer.appendChild(imgElement);
//     });
// }

// function loadMoreImages() {
//     currentPage++;
//     fetchImages(currentPage)
//         .then(images => {
//             displayImages(images);
//         })
//         .catch(error => {
//             console.error('Error fetching images:', error);
//         });
// }

// loadMoreBtn.addEventListener('click', loadMoreImages);

// // Initial load of 15 images
// window.addEventListener('load', function() {
//     fetchImages(currentPage)
//         .then(function(initialImages) {
//             const initialImagesToShow = initialImages.slice(0, 15);
//             displayImages(initialImagesToShow);
//         })
//         .catch(function(error) {
//             console.error('Error fetching initial images:', error);
//         });
// });



document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById('grid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  let apiUrl = "https://fakestoreapi.com/products";
  let startIndex = 0;
  let itemsPerPage = 6; // You can adjust this based on your layout

  function fetchAndDisplayItems() {
      fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
              for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
                  if (i < data.length) {
                      let item = data[i];
                      let box = document.createElement('div');
                      box.classList.add('box');

                      let img = document.createElement('img');
                      img.classList.add('image');
                      img.src = item.image;

                      box.appendChild(img);
                      grid.appendChild(box);
                  } else {
                      loadMoreBtn.style.display = 'none';
                      break;
                  }
              }

              startIndex += itemsPerPage;
          })
          .catch((error) => console.error('Error fetching data:', error));
  }

  loadMoreBtn.addEventListener('click', fetchAndDisplayItems);

  // Initial load
  fetchAndDisplayItems();
});
