document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    const imageFile = document.getElementById('profileImage').files[0];
    formData.append('profileImage', imageFile);
  
    fetch('http://localhost:3000/uploadProfileImage', { // Cambiado a localhost:3000
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            // Actualiza la imagen de perfil en la página
            document.querySelector('.perfil-usuario-avatar img').src = data.filePath;
        } else {
            alert('Error al subir la imagen');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al procesar la respuesta del servidor');
    });
});
