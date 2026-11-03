$(document).ready(function () {
    const courses = [
        {
            id: 1,
            title: "JavaScript Basics for Beginners",
            category: "beginner",
            price: "$0"
        },
        {
            id: 2,
            title: "Advanced DOM & Event Handling",
            category: "advanced",
            price: "$49"
        },
        {
            id: 3,
            title: "React.js & Modern Frameworks",
            category: "advanced",
            price: "$99"
        },
        {
            id: 4,
            title: "HTML & CSS Core Essentials",
            category: "beginner",
            price: "$0"
        }
    ];

    const $container = $("#coursesContainer");

    if (!$container.length) {
        return;
    }

    function displayCourses(courseList) {
        $container.empty();

        courseList.forEach(function (course) {
            const $card = $("<div>")
                .addClass("course-card search-item")
                .css({
                    padding: "15px",
                    border: "1px solid #e0e0e0",
                    "border-radius": "8px",
                    background: "#f8f9fc",
                    display: "flex",
                    "justify-content": "space-between",
                    "align-items": "center"
                });

            const $description = $("<span>");
            const $title = $("<strong>").text(course.title);
            const $category = $("<em>")
                .text(course.category)
                .css("color", "#667eea");

            $description
                .append($title)
                .append(" — ")
                .append($category);

            const $price = $("<strong>").text(course.price);

            $card.append($description, $price);
            $container.append($card);
        });

        // Егер іздеу сұрауы бар болса, оны жаңа карталарға да қолдану
        $("#searchInput").trigger("input");
    }

    function getCoursesByCategory(category) {
        if (category === "all") {
            return courses;
        }

        return courses.filter(function (course) {
            return course.category === category;
        });
    }

    // Барлық курсты бастапқыда көрсету
    displayCourses(courses);

    // Санат бойынша сүзу
    $(".filter-btn").on("click", function () {
        const category = $(this).data("category");
        const filteredCourses = getCoursesByCategory(category);

        displayCourses(filteredCourses);
    });
});