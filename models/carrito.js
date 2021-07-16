const pool = require("./../utils/bd");

const getAll = async (id_user) => {
    const query = 'SELECT p.nombre, p.precio, c.cantidad FROM ?? AS c JOIN ?? AS p ON c.id_producto = p.id WHERE c.id_usuario = ? AND c.eliminado = 0'
    const params = [process.env.T_CARRITO, process.env.T_INGREDIENTES, id_user];
    const rows = await pool.query(query, params);
    return rows;
}

const insertCarrito = async (obj) => {
    const query = 'INSERT INTO ?? SET ?';
    const params = [process.env.T_CARRITO, obj];
    const result = await pool.query(query, params);
    return result;
}

const deleteCarrito = async(id_usuario) => {
    const query = 'UPDATE ?? SET eliminado = 1 WHERE id_usuario = ?';
    const params = [process.env.T_CARRITO, id_usuario];
    const result = await pool.query(query, params);
    return result;
}

module.exports = {getAll, insertCarrito, deleteCarrito}