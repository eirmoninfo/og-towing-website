
//  Counter Js Here


document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(element, start, end, duration, suffix) {
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start) + " " + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    }

    function startCounters() {
        document.querySelectorAll(".count-number").forEach(counter => {
            let text = counter.textContent.trim();
            let suffix = text.includes("%") ? "%" : "+"; // Detect suffix (+ or %)
            let endValue = parseInt(text, 10); // Extract number

            counter.textContent = "0 " + suffix; // Reset before animation
            animateCounter(counter, 0, endValue, 5000, suffix); // Slow animation (5s)
        });
    }

    // Using IntersectionObserver to trigger animation when in viewport
    const counterSection = document.querySelector(".counter-area");
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startCounters();
            observer.disconnect(); // Stop observing once started
        }
    }, { threshold: 0.5 });

    observer.observe(counterSection);
});




// mobie navbar dropdown js


document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.getElementById("services");
    const dropdown = servicesLink.nextElementSibling; // Selects the dropdown menu

    servicesLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        dropdown.classList.toggle("active"); // Toggle class
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!servicesLink.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});