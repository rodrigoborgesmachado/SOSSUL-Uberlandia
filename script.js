window.onload = function() {
    fetchMedia();
};

async function fetchMedia() {
        const fileList = ['WhatsApp Image 2024-05-12 at 19.56.05.jpeg', 'WhatsApp Image 2024-05-13 at 09.14.46.jpeg', 'WhatsApp Image 2024-05-13 at 09.34.21.jpeg', 'WhatsApp Image 2024-05-13 at 09.34.22.jpeg', 'WhatsApp Image 2024-05-13 at 09.34.23.jpeg', 'WhatsApp Image 2024-05-13 at 09.51.07.jpeg', 'WhatsApp Image 2024-05-13 at 11.16.15.jpeg', 'WhatsApp Image 2024-05-13 at 12.36.40.jpeg', 'WhatsApp Image 2024-05-13 at 13.54.56.jpeg', 'WhatsApp Image 2024-05-13 at 14.17.35.jpeg', 'WhatsApp Image 2024-05-13 at 14.54.19.jpeg', 'WhatsApp Image 2024-05-13 at 18.12.27.jpeg', 'WhatsApp Image 2024-05-13 at 18.43.59.jpeg', 'WhatsApp Image 2024-05-13 at 18.46.04.jpeg', 'WhatsApp Image 2024-05-13 at 18.53.14.jpeg', 'WhatsApp Image 2024-05-13 at 18.57.02.jpeg', 'WhatsApp Image 2024-05-13 at 18.58.12.jpeg', 'WhatsApp Image 2024-05-13 at 19.22.05.jpeg', 'WhatsApp Image 2024-05-13 at 19.39.51.jpeg', 'WhatsApp Image 2024-05-13 at 19.42.53.jpeg', 'WhatsApp Image 2024-05-13 at 21.39.52.jpeg', 'WhatsApp Image 2024-05-13 at 21.39.53 (1).jpeg', 'WhatsApp Image 2024-05-13 at 21.39.53.jpeg', 'WhatsApp Image 2024-05-13 at 21.39.54.jpeg', 'WhatsApp Image 2024-05-13 at 22.50.19.jpeg', 'WhatsApp Image 2024-05-14 at 12.43.00.jpeg', 'WhatsApp Image 2024-05-14 at 13.41.45.jpeg', 'WhatsApp Image 2024-05-14 at 19.01.12.jpeg', 'WhatsApp Image 2024-05-14 at 19.15.57.jpeg', 'WhatsApp Image 2024-05-15 at 10.28.19.jpeg', 'WhatsApp Image 2024-05-15 at 11.21.46.jpeg', 'WhatsApp Image 2024-05-15 at 11.31.32.jpeg', 'WhatsApp Image 2024-05-15 at 11.35.46.jpeg', 'WhatsApp Image 2024-05-15 at 11.35.47.jpeg', 'WhatsApp Image 2024-05-15 at 12.50.15.jpeg', 'WhatsApp Image 2024-05-15 at 12.50.16.jpeg', 'WhatsApp Image 2024-05-15 at 15.28.10.jpeg', 'WhatsApp Image 2024-05-15 at 16.51.58.jpeg', 'WhatsApp Image 2024-05-15 at 16.56.45.jpeg', 'WhatsApp Image 2024-05-15 at 17.25.24.jpeg', 'WhatsApp Image 2024-05-15 at 18.45.13.jpeg', 'WhatsApp Image 2024-05-16 at 07.54.07.jpeg', 'WhatsApp Image 2024-05-16 at 08.46.21.jpeg', 'WhatsApp Image 2024-05-16 at 08.53.26.jpeg', 'WhatsApp Image 2024-05-16 at 09.15.26.jpeg', 'WhatsApp Image 2024-05-16 at 09.17.56.jpeg', 'WhatsApp Image 2024-05-16 at 12.06.59.jpeg', 'WhatsApp Image 2024-05-16 at 12.07.00.jpeg', 'WhatsApp Image 2024-05-16 at 12.07.02.jpeg', 'WhatsApp Image 2024-05-16 at 13.14.27.jpeg', 'WhatsApp Image 2024-05-16 at 15.31.57 (1).jpeg', 'WhatsApp Image 2024-05-16 at 15.31.57 (2).jpeg', 'WhatsApp Image 2024-05-16 at 15.31.57 (3).jpeg', 'WhatsApp Image 2024-05-16 at 15.31.57.jpeg', 'WhatsApp Image 2024-05-16 at 16.42.07.jpeg', 'WhatsApp Image 2024-05-16 at 18.27.06.jpeg', 'WhatsApp Image 2024-05-16 at 18.40.06.jpeg', 'WhatsApp Image 2024-05-16 at 19.02.24.jpeg', 'WhatsApp Image 2024-05-16 at 20.35.07.jpeg', 'WhatsApp Image 2024-05-16 at 20.52.31.jpeg', 'WhatsApp Image 2024-05-16 at 21.55.14.jpeg', 'WhatsApp Image 2024-05-16 at 21.58.26.jpeg', 'WhatsApp Image 2024-05-16 at 23.16.19.jpeg', 'WhatsApp Image 2024-05-17 at 00.01.35.jpeg', 'WhatsApp Image 2024-05-17 at 00.32.13.jpeg', 'WhatsApp Image 2024-05-17 at 08.13.37.jpeg', 'WhatsApp Image 2024-05-17 at 11.37.58.jpeg', 'WhatsApp Image 2024-05-17 at 11.39.03.jpeg', 'WhatsApp Image 2024-05-17 at 11.57.34.jpeg', 'WhatsApp Image 2024-05-17 at 12.02.20.jpeg', 'WhatsApp Image 2024-05-17 at 12.03.56.jpeg', 'WhatsApp Image 2024-05-17 at 13.23.20.jpeg', 'WhatsApp Image 2024-05-17 at 17.06.23.jpeg', 'WhatsApp Image 2024-05-17 at 19.07.00.jpeg', 'WhatsApp Image 2024-05-17 at 19.48.57.jpeg', 'WhatsApp Image 2024-05-17 at 20.23.41.jpeg', 'WhatsApp Image 2024-05-17 at 20.29.11.jpeg', 'WhatsApp Image 2024-05-18 at 09.34.40.jpeg', 'WhatsApp Image 2024-05-18 at 10.27.44.jpeg', 'WhatsApp Image 2024-05-18 at 11.31.53.jpeg', 'WhatsApp Image 2024-05-18 at 11.45.39.jpeg', 'WhatsApp Image 2024-05-18 at 12.11.31.jpeg', 'WhatsApp Image 2024-05-18 at 12.38.43.jpeg', 'WhatsApp Image 2024-05-18 at 13.40.21.jpeg', 'WhatsApp Image 2024-05-18 at 13.59.50.jpeg', 'WhatsApp Image 2024-05-18 at 14.37.02.jpeg', 'WhatsApp Image 2024-05-19 at 11.00.15.jpeg', 'WhatsApp Image 2024-05-19 at 20.47.11.jpeg', 'WhatsApp Image 2024-05-20 at 09.35.44.jpeg', 'WhatsApp Image 2024-05-20 at 10.08.59.jpeg', 'WhatsApp Video 2024-05-13 at 07.41.07.mp4', 'WhatsApp Video 2024-05-13 at 08.12.02.mp4', 'WhatsApp Video 2024-05-13 at 08.13.37.mp4', 'WhatsApp Video 2024-05-13 at 09.05.12.mp4', 'WhatsApp Video 2024-05-13 at 09.23.44.mp4', 'WhatsApp Video 2024-05-13 at 11.07.35.mp4', 'WhatsApp Video 2024-05-13 at 11.40.50.mp4', 'WhatsApp Video 2024-05-13 at 12.11.10.mp4', 'WhatsApp Video 2024-05-13 at 13.03.39.mp4', 'WhatsApp Video 2024-05-13 at 13.07.36.mp4', 'WhatsApp Video 2024-05-13 at 14.58.14.mp4', 'WhatsApp Video 2024-05-13 at 15.53.24.mp4', 'WhatsApp Video 2024-05-13 at 16.21.38.mp4', 'WhatsApp Video 2024-05-13 at 16.21.40.mp4', 'WhatsApp Video 2024-05-13 at 16.39.28.mp4', 'WhatsApp Video 2024-05-13 at 17.16.23.mp4', 'WhatsApp Video 2024-05-13 at 18.34.09.mp4', 'WhatsApp Video 2024-05-13 at 19.13.24.mp4', 'WhatsApp Video 2024-05-13 at 19.21.42.mp4', 'WhatsApp Video 2024-05-13 at 19.41.31.mp4', 'WhatsApp Video 2024-05-13 at 20.49.41.mp4', 'WhatsApp Video 2024-05-13 at 20.51.32.mp4', 'WhatsApp Video 2024-05-13 at 21.42.33.mp4', 'WhatsApp Video 2024-05-14 at 08.18.45.mp4', 'WhatsApp Video 2024-05-14 at 10.37.44.mp4', 'WhatsApp Video 2024-05-14 at 11.18.54.mp4', 'WhatsApp Video 2024-05-14 at 12.37.35.mp4', 'WhatsApp Video 2024-05-14 at 12.37.47.mp4', 'WhatsApp Video 2024-05-14 at 16.03.54.mp4', 'WhatsApp Video 2024-05-14 at 19.09.02.mp4', 'WhatsApp Video 2024-05-14 at 19.43.39.mp4', 'WhatsApp Video 2024-05-14 at 23.00.49.mp4', 'WhatsApp Video 2024-05-15 at 12.50.12.mp4', 'WhatsApp Video 2024-05-15 at 13.46.54.mp4', 'WhatsApp Video 2024-05-15 at 15.14.51.mp4', 'WhatsApp Video 2024-05-15 at 15.25.47.mp4', 'WhatsApp Video 2024-05-15 at 16.19.02.mp4', 'WhatsApp Video 2024-05-15 at 16.34.05.mp4', 'WhatsApp Video 2024-05-15 at 16.51.40.mp4', 'WhatsApp Video 2024-05-15 at 16.57.04.mp4', 'WhatsApp Video 2024-05-15 at 16.58.45.mp4', 'WhatsApp Video 2024-05-15 at 17.06.26.mp4', 'WhatsApp Video 2024-05-15 at 17.08.21.mp4', 'WhatsApp Video 2024-05-15 at 17.32.54.mp4', 'WhatsApp Video 2024-05-15 at 23.44.01.mp4', 'WhatsApp Video 2024-05-16 at 13.14.28.mp4', 'WhatsApp Video 2024-05-16 at 13.14.29.mp4', 'WhatsApp Video 2024-05-16 at 14.01.21.mp4', 'WhatsApp Video 2024-05-16 at 15.35.39.mp4', 'WhatsApp Video 2024-05-16 at 16.12.53.mp4', 'WhatsApp Video 2024-05-16 at 19.04.41.mp4', 'WhatsApp Video 2024-05-16 at 19.19.26.mp4', 'WhatsApp Video 2024-05-16 at 20.35.32.mp4', 'WhatsApp Video 2024-05-16 at 21.17.00.mp4', 'WhatsApp Video 2024-05-16 at 21.17.01.mp4', 'WhatsApp Video 2024-05-20 at 10.07.08.mp4', 'WhatsApp Video 2024-05-20 at 10.36.06.mp4', 'WhatsApp Video 2024-05-20 at 10.37.18.mp4', 'WhatsApp Video 2024-05-20 at 10.49.47.mp4'];
    
        const gallery = document.getElementById('gallery');
    
        fileList.forEach(file => {
            const fileType = getFileType(file);
            const container = document.createElement('div');
            container.className = 'bloco';
            const header = document.createElement('h3');
            container.appendChild(header);
            
            if (fileType.startsWith('image')) {
                const date = montaData(file.replace('WhatsApp Image ', '').slice(0, 10));
                header.textContent = date;
                const img = document.createElement('img');
                img.src = `/Images/Midia/${file}`;
                img.alt = file;
                container.appendChild(img);
            } else if (fileType.startsWith('video')) {
                const date = montaData(file.replace('WhatsApp Video ', '').slice(0, 10));
                header.textContent = date;
                const video = document.createElement('video');
                video.controls = true;
                const source = document.createElement('source');
                source.src = `/Images/Midia/${file}`;
                source.type = 'video/mp4';
                video.appendChild(source);
                container.appendChild(video);
            }
            
            gallery.appendChild(container);
        });
    }
    
    function getFileType(file) {
        const extension = file.split('.').pop().toLowerCase();
        const imageExtensions = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
        const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'webm'];
    
        if (imageExtensions.includes(extension)) {
            return 'image';
        } else if (videoExtensions.includes(extension)) {
            return 'video';
        } else {
            return 'unknown';
        }
    }
    
    function montaData(dateString) {
        // Implementação da função montaData, que converte a data para o formato desejado
        // Supondo que a string seja algo como '2024-05-12', transforme-a para o formato desejado
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }