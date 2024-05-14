window.onload = function() {
    fetchMedia();
};

async function fetchMedia() {
    const response = await fetch('/Images/Midia');
    const files = await response.text();
    console.log(files.slice(files.indexOf('</span></a></li>') + 17, files.indexOf('</span></a></li></ul>')));
    const fileList = files.slice(files.indexOf('</span></a></li>') + 17, files.indexOf('</span></a></li></ul>')).split('\n').filter(file => file.trim() !== '');

    const gallery = document.getElementById('gallery');

    fileList.forEach(file => {
        file = getFile(file);
        const fileType = getFileType(file);
        if (fileType.startsWith('image')) {
            gallery.innerHTML += `<div class="bloco"><h3>${montaData(file.replace('/Images/Midia/WhatsApp%20Image%20', '').slice(0, 10))}</h3><img src="${file}" alt="${file}"></dib>`;
        } else if (fileType.startsWith('video')) {
            //gallery.innerHTML += `<video controls><source src="${file}" type="${fileType}"></video>`;
        }
    });
}

function montaData(data){
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

function getFile(file){
    const hrefRegex = /href="([^"]*)"/;
    const matches = file.match(hrefRegex);

    if (matches && matches.length > 1) {
        const hrefValue = matches[1];
        file = hrefValue;
    } else {
        console.log('Href attribute not found in the HTML string.');
    }
    return file;
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