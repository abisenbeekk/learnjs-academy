document.addEventListener("DOMContentLoaded", function () {
    const colorBtn = document.getElementById("colorBtn");

    const colors = [
        "#f4f6f9", 
        "#fde8e8", 
        "#e8f5e9",
        "#e3f2fd", 
        "#fff8e1", 
        "#f3e5f5", 
        "#e0f7fa",
        "#fce4ec"  
    ];

    let index = 0;

    colorBtn.addEventListener("click", function () {
        index = (index + 1) % colors.length;
        document.body.style.backgroundColor = colors[index];
    });
});