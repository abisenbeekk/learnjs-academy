document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreText = document.getElementById('moreText');

    if (readMoreBtn && moreText) {
        readMoreBtn.addEventListener('click', () => {
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                moreText.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    }

    const factBtn = document.getElementById('factBtn');
    const factBox = document.getElementById('factBox');

    const jsFacts = [
        "JavaScript was created by Brendan Eich in 1995 in just 10 days!",
        "Initially, JavaScript was named LiveScript before being renamed.",
        "Node.js allows developers to run JavaScript on the server-side.",
        "Arrays in JavaScript are a special type of objects.",
        "JavaScript is one of the core technologies of the World Wide Web."
    ];

    if (factBtn && factBox) {
        factBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * jsFacts.length);
            factBox.textContent = jsFacts[randomIndex];
        });
    }
});