document.addEventListener('DOMContentLoaded', () => {
  const floatingItems = document.querySelectorAll('.floating-item');

  floatingItems.forEach(item => {
    // Assign random animation duration between 5s to 8s
    const duration = Math.random() * 3 + 5; // 5 to 8 seconds
    // Assign random animation delay between 0s to 3s
    const delay = Math.random() * 3;

    item.style.animationDuration = `${duration}s`;
    item.style.animationDelay = `${delay}s`;

    // Click event to open link
    item.addEventListener('click', () => {
      const link = item.getAttribute('data-link');
      window.open(link, '_blank');
    });
  });
});
