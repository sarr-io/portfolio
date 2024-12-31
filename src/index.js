// add click and auxclick events to all social media buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.socials').forEach(button => {
        const link = button.getAttribute('data-link');
        button.addEventListener('click', () => {
            location.href = link;
        });
        button.addEventListener('auxclick', (event) => {
            if (event.button === 1) {
                window.open(link, '_blank');
            }
        });
    });
});