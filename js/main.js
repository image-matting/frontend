const API_URL = "http://localhost:5000/upload"

Dropzone.options.inputImageDropzone = {
    maxFilesize: 100,
    maxThumbnailFilesize: 100,
    maxFiles: 1,
    thumbnailWidth: 250,
    thumbnailHeight: 250,
    autoProcessQueue: false,
    uploadProgress: 'totaluploadprogress',
    init: function () {
        this.on('addedfile', function (file) {
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
        });
    }
};

Dropzone.options.backgroundImageDropzone = {
    maxFilesize: 100,
    maxThumbnailFilesize: 100,
    maxFiles: 1,
    thumbnailWidth: 250,
    thumbnailHeight: 250,
    autoProcessQueue: false,
    uploadProgress: 'totaluploadprogress',
    init: function () {
        this.on('addedfile', function (file) {
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
        });
    }
};

function changeBackground() {
    const inputImageDropzone = document.getElementById("input-image-dropzone").dropzone;
    const inputImageFile = inputImageDropzone.getAcceptedFiles()[0];
    if (inputImageFile == null) {
        console.log("Please enter an input image!")
    }

    const backgroundImageDropzone = document.getElementById("background-image-dropzone").dropzone;
    const backgroundImageFile = backgroundImageDropzone.getAcceptedFiles()[0];
    if (backgroundImageFile == null) {
        console.log("Please enter a background image!")
    }

    const formData = new FormData();
    formData.append('action', 'uploadImages');
    formData.append('input_image', inputImageFile);
    formData.append('background_image', backgroundImageFile);

    $.ajax({
        url: API_URL,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log("Successfully sent the files!")
        }
    });

    inputImageDropzone.removeAllFiles();
    backgroundImageDropzone.removeAllFiles();
}
