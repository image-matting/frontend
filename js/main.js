Dropzone.options.inputImageDropzone = {
    paramName: "input_image",
    maxFilesize: 100,
    maxThumbnailFilesize: 100,
    maxFiles: 1,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
    init: function () {
        this.on('addedfile', function (file) {
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
        });
    }
}

Dropzone.options.backgroundImageDropzone = {
    paramName: "background_image",
    maxFilesize: 100,
    maxThumbnailFilesize: 100,
    maxFiles: 1,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
    init: function () {
        this.on('addedfile', function (file) {
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
        });
    }
}
