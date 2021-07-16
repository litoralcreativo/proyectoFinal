const pool = require("./../utils/bd");

const getAll = async () => {
    const query = 'SELECT * FROM ?? WHERE eliminado = 0'
    const params = [process.env.T_USERS];
    const rows = await pool.query(query, params);
    return rows;
}

const getSingle = async (id) => {
    const query = 'SELECT * FROM ?? WHERE id = ?';
    const params = [process.env.T_USERS, id];
    const row = await pool.query(query, params);
    return row;
}

const createUser = async (user) => {
    const query = 'INSERT INTO ?? SET ?';
    const params = [process.env.T_USERS, user];
    const result = await pool.query(query, params);
    return result;
}

const verifyUser = async (uid) => {
    const query = 'UPDATE ?? SET habilitado = 1 WHERE confirmacionEmail = ?';
    const params = [process.env.T_USERS, uid];
    const result = await pool.query(query, params);
    return result;
}

const validateLogin = async (username, pass) => {
    const query = 'SELECT id, habilitado, eliminado, admin FROM ?? WHERE username = ? AND pass = ? AND eliminado = 0';
    const params = [process.env.T_USERS, username, pass];
    const result = await pool.query(query, params);
    return result;
}

const updateUser = async(id, obj) => {
    const query = 'UPDATE ?? SET ? WHERE id = ?';
    const params = [process.env.T_USERS, obj, id];
    const result = await pool.query(query, params);
    return result;
}

module.exports = {getAll, getSingle, createUser, verifyUser, validateLogin, updateUser}