
        document.addEventListener('DOMContentLoaded', function() {
            // Get all navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            // Get all portfolio sections
            const portfolioSections = document.querySelectorAll('.portfolio-section');

            // Function to hide all sections
            function hideAllSections() {
                portfolioSections.forEach(section => {
                    section.classList.add('hidden'); // Add Tailwind's hidden class
                });
            }

            // Function to show a specific section
            function showSection(id) {
                const targetSection = document.querySelector(id);
                if (targetSection) {
                    targetSection.classList.remove('hidden'); // Remove hidden class to show
                }
            }

            // Initial display: show only the first section (Personal Information)
            hideAllSections();
            showSection('#personal-info');

            // Add click event listeners to navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    // Prevent default anchor behavior (jumping to anchor)
                    event.preventDefault();

                    // Get the target section ID from the href attribute
                    const targetId = this.getAttribute('href');

                    // Hide all sections, then show the target section
                    hideAllSections();
                    showSection(targetId);
                });
            });
        });