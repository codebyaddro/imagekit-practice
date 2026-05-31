const ImageKit = require('@imagekit/nodejs');

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_KEY
});

const uploadFile = async (buffer, fileName) => {
    const response = await client.files.upload({
        file: buffer.toString("base64"),
        fileName,
    });

    return response;
};

module.exports = uploadFile;