document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            const titleInput = form.querySelector('input[name="title"]');
            const title = titleInput.value.trim();

            // Simple validation
            if (title.length === 0) {
                alert('Please enter a task title.');
                event.preventDefault(); // Prevent form submission
            } else {
                alert(`Task "${title}" has been added!`);
            }
        });
    }
});