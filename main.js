document.addEventListener('DOMContentLoaded', function() {
    // Select all blocks
    const blocks = document.querySelectorAll('.list__block');

    // Function to toggle visibility
    function toggleContent(event) {
        // Check if the clicked element is the header or within it
        const header = event.target.closest('.block__header');
        if (!header) return;
        ;

        // Find the content related to the header
        const content = header.nextElementSibling;
        const svg = header.querySelector('svg')
        
        // Toggle display style
        if (content.style.display === 'block') {
            content.style.display = 'none';
            svg.classList.toggle('rotated');
        } else {
            content.style.display = 'block';
            svg.classList.toggle('rotated');
        }
    }

    // Attach click event listener to each block
    blocks.forEach(block => {
        block.addEventListener('click', toggleContent);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nowButton = document.getElementById('nowButton');
    const futureButton = document.getElementById('futureButton');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    nowButton.addEventListener('click', () => {
        image1.classList.add('show');
        image1.classList.remove('hidden');
        image2.classList.add('hidden');
        image2.classList.remove('show');
    });

    futureButton.addEventListener('click', () => {
        image1.classList.remove('show');
        image1.classList.add('hidden');
        image2.classList.remove('hidden');
        image2.classList.add('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var mobileBtn = document.querySelector('.mobile-btn');
    var headerLinks = document.querySelector('.header__links');
    var iconDefault = document.querySelector('.mobile-btn .default');
    var iconClose = document.querySelector('.mobile-btn .close');

    mobileBtn.addEventListener('click', function() {
        headerLinks.classList.toggle('active');
        iconDefault.style.display = headerLinks.classList.contains('active') ? 'none' : 'block';
        iconClose.style.display = headerLinks.classList.contains('active') ? 'block' : 'none';
    });
});




