const pool = require("./../utils/bd");

const getAllByCat = async (id) => {
    const query = `
        SELECT 
            i.id, 
            i.nombre, 
            i.stock, 
            i.precio, 
            ie.estado AS nombreEstado, 
            ip.parte AS nombreParte, 
            ic.nombre AS nombreCategoria, 
            ii.uid 
        FROM ?? AS i 
        JOIN ?? AS ic ON i.id_categoria = ic.id 
        JOIN ?? AS ip ON i.id_parte = ip.id 
        JOIN ?? AS ie ON i.id_estado = ie.id 
        LEFT JOIN ?? AS ii ON i.id = ii.id_ingrediente 
        WHERE i.eliminado = 0 
        AND i.id_categoria = ?`;
    const params = [process.env.T_INGREDIENTES, process.env.T_I_CATEGORIA, process.env.T_I_PARTE, process.env.T_I_ESTADO, process.env.T_I_IMAGEN, id];
    const rows = await pool.query(query, params);
    return rows;
}

const getSingle = async (id) => {
    const query = `
        SELECT 
            i.*, 
            ie.estado AS nombreEstado, 
            ip.parte AS nombreParte, 
            ic.nombre AS nombreCategoria 
        FROM ?? AS i 
        JOIN ?? AS ic ON i.id_categoria = ic.id 
        JOIN ?? AS ip ON i.id_parte = ip.id
        JOIN ?? AS ie ON i.id_estado = ie.id
        WHERE i.eliminado = 0 
        AND i.id = ?`;
    const params = [process.env.T_INGREDIENTES, process.env.T_I_CATEGORIA, process.env.T_I_PARTE, process.env.T_I_ESTADO, id];
    const row = await pool.query(query, params);
    return row;
}

const getCategorias = async () => {
    const query = 'SELECT ic.id, ic.nombre AS nombreCategoria FROM ?? AS ic WHERE ic.eliminado = 0';
    const params = [process.env.T_I_CATEGORIA];
    const rows = await pool.query(query, params);
    return rows;
}

const createCategoria = async (obj) => {
    const query = 'INSERT INTO ?? SET ?';
    const params = [process.env.T_I_CATEGORIA, obj];
    const result = await pool.query(query, params);
    return result;
}

const deleteCategoria = async(id) => {
    const query = 'UPDATE ?? SET eliminado = 1 WHERE id = ?';
    const params = [process.env.T_I_CATEGORIA, id];
    const result = await pool.query(query, params);
    return result;
}

const getPartes = async () => {
    const query = 'SELECT ip.id, ip.parte AS nombreParte FROM ?? AS ip';
    const params = [process.env.T_I_PARTE];
    const rows = await pool.query(query, params);
    return rows;
}

const getEstados = async () => {
    const query = 'SELECT ie.id, ie.estado AS nombreEstado FROM ?? AS ie';
    const params = [process.env.T_I_ESTADO];
    const rows = await pool.query(query, params);
    return rows;
}

const createIngrediente = async (obj) => {
    const query = 'INSERT INTO ?? SET ?';
    const params = [process.env.T_INGREDIENTES, obj];
    const result = await pool.query(query, params);
    return result;
}

const createIngredienteImg = async (obj) => {
    const query = 'INSERT INTO ?? SET ?';
    const params = [process.env.T_I_IMAGEN, obj];
    const result = await pool.query(query, params);
    return result;
}

const updateIngrediente = async(id, obj) => {
    const query = 'UPDATE ?? SET ? WHERE id = ?';
    const params = [process.env.T_INGREDIENTES, obj, id];
    const result = await pool.query(query, params);
    return result;
}

const deleteIngrediente = async(id) => {
    const query = 'UPDATE ?? SET eliminado = 1 WHERE id = ?';
    const params = [process.env.T_INGREDIENTES, id];
    const result = await pool.query(query, params);
    return result;
}

module.exports = {
    getAllByCat, 
    getSingle, 
    getCategorias, 
    getPartes, 
    getEstados, 
    createIngrediente, 
    deleteIngrediente, 
    updateIngrediente, 
    createIngredienteImg, 
    createCategoria,
    deleteCategoria
};