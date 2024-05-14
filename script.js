window.onload = function() {
    fetchMedia();
};

async function fetchMedia() {
    const fileList = ['WhatsApp Image 2024-05-12 at 19.56.05.jpeg','WhatsApp Image 2024-05-13 at 09.14.46.jpeg','WhatsApp Image 2024-05-13 at 09.34.21.jpeg','WhatsApp Image 2024-05-13 at 09.34.22.jpeg','WhatsApp Image 2024-05-13 at 09.34.23.jpeg','WhatsApp Image 2024-05-13 at 09.51.07.jpeg','WhatsApp Image 2024-05-13 at 11.16.15.jpeg','WhatsApp Image 2024-05-13 at 12.36.40.jpeg','WhatsApp Image 2024-05-13 at 13.54.56.jpeg','WhatsApp Image 2024-05-13 at 14.17.35.jpeg','WhatsApp Image 2024-05-13 at 14.54.19.jpeg','WhatsApp Image 2024-05-13 at 18.12.27.jpeg','WhatsApp Image 2024-05-13 at 18.43.59.jpeg','WhatsApp Image 2024-05-13 at 18.46.04.jpeg','WhatsApp Image 2024-05-13 at 18.53.14.jpeg','WhatsApp Image 2024-05-13 at 18.57.02.jpeg','WhatsApp Image 2024-05-13 at 18.58.12.jpeg','WhatsApp Image 2024-05-13 at 19.22.05.jpeg','WhatsApp Image 2024-05-13 at 19.39.51.jpeg','WhatsApp Image 2024-05-13 at 19.42.53.jpeg','WhatsApp Image 2024-05-13 at 21.39.52.jpeg','WhatsApp Image 2024-05-13 at 21.39.53 (1).jpeg','WhatsApp Image 2024-05-13 at 21.39.53.jpeg','WhatsApp Image 2024-05-13 at 21.39.54.jpeg','WhatsApp Image 2024-05-13 at 22.50.19.jpeg','WhatsApp Video 2024-05-13 at 07.41.07.mp4','WhatsApp Video 2024-05-13 at 08.12.02.mp4','WhatsApp Video 2024-05-13 at 08.13.37.mp4','WhatsApp Video 2024-05-13 at 09.05.12.mp4','WhatsApp Video 2024-05-13 at 09.23.44.mp4','WhatsApp Video 2024-05-13 at 11.07.35.mp4','WhatsApp Video 2024-05-13 at 11.40.50.mp4','WhatsApp Video 2024-05-13 at 12.11.10.mp4','WhatsApp Video 2024-05-13 at 13.03.39.mp4','WhatsApp Video 2024-05-13 at 13.07.36.mp4','WhatsApp Video 2024-05-13 at 14.58.14.mp4','WhatsApp Video 2024-05-13 at 15.53.24.mp4','WhatsApp Video 2024-05-13 at 16.21.38.mp4','WhatsApp Video 2024-05-13 at 16.21.40.mp4','WhatsApp Video 2024-05-13 at 16.39.28.mp4','WhatsApp Video 2024-05-13 at 17.16.23.mp4','WhatsApp Video 2024-05-13 at 18.34.09.mp4','WhatsApp Video 2024-05-13 at 19.13.24.mp4','WhatsApp Video 2024-05-13 at 19.21.42.mp4','WhatsApp Video 2024-05-13 at 19.41.31.mp4','WhatsApp Video 2024-05-13 at 20.49.41.mp4','WhatsApp Video 2024-05-13 at 20.51.32.mp4','WhatsApp Video 2024-05-13 at 21.42.33.mp4','WhatsApp Video 2024-05-14 at 08.18.45.mp4'];

    const gallery = document.getElementById('gallery');

    fileList.forEach(file => {
        const fileType = getFileType(file);
        if (fileType.startsWith('image')) {
            gallery.innerHTML += `<div class="bloco"><h3>${montaData(file.replace('WhatsApp Image ', '').slice(0, 10))}</h3><img src="/Images/Midia/${file}" alt="/Images/Midia/${file}"></div>`;
        } else if (fileType.startsWith('video')) {
            //gallery.innerHTML += `<video controls><source src="${file}" type="${fileType}"></video>`;
        }
    });
}

function montaData(data){
    console.log(data);
    const parts = data.split('-');
    
    // Extract year, month, and day from the parts array
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    
    // Create a new Date object with the extracted year, month, and day
    const date = new Date(year, month - 1, day); // Note: Month is zero-based in JavaScript Date object
    
    // Format the date to 'dd/MM/yyyy'
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    
    return formattedDate;
}

function getFileType(filename) {
    const extension = filename.split('.').pop();
    switch (extension.toLowerCase()) {
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
            return 'image';
        case 'mp4':
        case 'webm':
            return 'video';
        default:
            return 'image';
    }
}