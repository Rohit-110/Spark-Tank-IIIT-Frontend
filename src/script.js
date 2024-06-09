document.getElementById('openBoxBtn').addEventListener('click', function() {
    var box = document.getElementById('box');
    if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        box.style.display = 'block';

        // Fetch the content of the HTML file and insert it into the box
        fetch('content.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('boxContent').innerHTML = data;
            })
            .catch(error => console.error('Error fetching the HTML content:', error));
    } else {
        box.classList.add('hidden');
        box.style.display = 'none';
    }
});
