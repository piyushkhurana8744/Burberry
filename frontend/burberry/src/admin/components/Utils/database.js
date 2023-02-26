import axios from "axios"

const getStatsApi = () => {
    return {
        pending: 20,
        delivered: 50,
        profit: 8569
    }
}

const getOrders = async () => {
    const { data } = await axios.get(`https://white-lovebird-ring.cyclic.app/cart`);
    return []
}
const updateOrder = () => {

}
const addProductApi = async (product) => {
    try {
        return await axios.post(`https://white-lovebird-ring.cyclic.app/products`, product);
    } catch (error) {
        return error
    }
}
const updateProductApi = async (id, updates) => {
    try {
        return await axios.patch(`https://white-lovebird-ring.cyclic.app/products/${id}`, updates);
    } catch (error) {
        return error
    }
}
const deleteProductApi = async (id) => {
    try {
        return await axios.delete(`https://white-lovebird-ring.cyclic.app/products/${id}`);
    } catch (error) {
        return error
    }
}
const getProducts = async () => {
    const { data } = await axios.get(`https://white-lovebird-ring.cyclic.app/products`);
    return data
}

const getUsersApi = async () => {
    const { data } = await axios.get(`https://white-lovebird-ring.cyclic.app/user`);
    return data
}
export { getStatsApi, getOrders, updateOrder, addProductApi, getProducts, updateProductApi, deleteProductApi, getUsersApi }




