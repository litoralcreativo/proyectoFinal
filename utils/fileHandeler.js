const fs = require('fs');
const {v4: uuid} = require('uuid');
const allowedImgExtensions = ['png', 'jpg', 'jpeg'];

const saveFile = (file, allowE, destFolder = './public/images') => {
    try {
        const [type, extension] = file.mimetype.split('/')
        if (!allowE.includes(extension)) throw "Formato incorrecta";
        const uid = uuid();
        const fileName = `${uid}.${extension}`
        const fileNameOut = `${destFolder}/${fileName}`;
        fs.createReadStream(file.path).pipe(fs.createWriteStream(fileNameOut))
        fs.unlink(file.path, err => {console.log(err);})
        return fileName;
    } catch (err) {
        fs.unlink(file.path, err => {console.log(err);})
        console.log(err);
    }
}

const imgFile = (file) => saveFile(file, allowedImgExtensions)

module.exports = {imgFile};