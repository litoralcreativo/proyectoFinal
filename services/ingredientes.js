// insertar ingrediente
// subir imagen
// insertar ingredientes_imagen

const {createIngrediente : create, createIngredienteImg : createImg} = require('./../models/ingredientes')
const {imgFile} = require('./../utils/fileHandeler');

const createIngrediente = async (body, file) => {
    try {
        const {insertId : id_ingrediente} = await create(body);
        const uid = imgFile(file);
        const obj = {id_ingrediente, uid};
        const {insertId : idImg} = await createImg(obj);
        return idImg;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {createIngrediente}