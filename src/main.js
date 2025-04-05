const author = document.getElementById('author');
const pfp = document.getElementById('pfp');
const info = document.getElementById('info');
const job = document.getElementById('job');

const prevbtn = document.getElementById('previous-btn');
const nextbtn = document.getElementById('next-btn');

let curItem = 0;
let reviews = [];

fetch('reviews.json')
    .then(response => response.json())
    .then(data => {
        reviews = data;
        showReview(curItem);
    })
    .catch(error => {
        console.error("Error loading the JSON file:", error);
    });

function showReview(id) {
    const review = reviews[id];
    if (review) {
        pfp.src = review['image_link'];
        author.textContent = review['author'];
        job.textContent = review['job'];
        info.textContent = review['review_info'];
    }
}

prevbtn.addEventListener('click', (e) => {
    e.preventDefault();
    curItem--;
    if (curItem < 0) {
        curItem = reviews.length - 1;
    }
    showReview(curItem);
})

nextbtn.addEventListener('click', (e) => {
    e.preventDefault();
    curItem++;
    if (curItem >= reviews.length) {
        curItem = 0;
    }
    showReview(curItem);
})
