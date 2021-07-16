// insertar prod al carrito
// disminuir stock del prod

const { insertCarrito } = require('./../models/carrito');
const { updateIngrediente, getSingle } = require('./../models/ingredientes');


const addToCart = async (id_p, obj) => {
    try {
        const res1 = await insertCarrito(obj);
        let [{stock : stk}] = await getSingle(id_p);
        if (stk - obj.cantidad >= 0) {
            stk -= obj.cantidad;
            const res2 = await updateIngrediente(id_p, {stock: stk});
            return res2
        } else {
            throw "El stock no puede ser inferior a 0"
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {addToCart}