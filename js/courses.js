document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { id: 1, title: "JavaScript Basics for Beginners", category: "beginner", price: "$0" },
        { id: 2, title: "Advanced DOM & Event Handling", category: "advanced", price: "$49" },
        { id: 3, title: "React.js & Modern Frameworks", category: "advanced", price: "$99" },
        { id: 4, title: "HTML & CSS Core Essentials", category: "beginner", price: "$0" }
    ];

    const container = document.getElementById("coursesContainer");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function displayCourses(items) {
        container.innerHTML = "";
        items.forEach(course => {
            const card = document.createElement("div");
            card.style.cssText = "padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; background: #f8f9fc; display: flex; justify-content: space-between; align-items: center;";
            card.innerHTML = `<span><strong>${course.title}</strong> — <em style="color:#667eea;">${course.category}</em></span> <strong>${course.price}</strong>`;
            container.appendChild(card);
        });
    }

    displayCourses(courses);

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            if (category === "all") {
                displayCourses(courses);
            } else {
                const filteredCourses = courses.filter(course => course.category === category);
                displayCourses(filteredCourses);
            }
        });
    });
});