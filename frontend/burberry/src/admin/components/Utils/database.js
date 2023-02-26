import axios from "axios"

const getStatsApi = () => {
    return {
        pending: 20,
        delivered: 50,
        profit: 8569
    }
}

const getOrders = async () => {
    const { data } = await axios.get(`http://localhost:8080/cart`);
    return data
}
const updateOrder = () => {

}
const addProductApi = async (product) => {
    try {
        return await axios.post(`http://localhost:8080/products`, product);
    } catch (error) {
        return error
    }
}
const updateProductApi = async (id, updates) => {
    try {
        return await axios.patch(`http://localhost:8080/products/${id}`, updates);
    } catch (error) {
        return error
    }
}
const deleteProductApi = async (id) => {
    try {
        return await axios.delete(`http://localhost:8080/products/${id}`);
    } catch (error) {
        return error
    }
}
const getProducts = async () => {
    const { data } = await axios.get(`http://localhost:8080/products`);
    return data
}

const getUsersApi = async () => {
    const { data } = await axios.get(`http://localhost:8080/user`);
    return data
}
export { getStatsApi, getOrders, updateOrder, addProductApi, getProducts, updateProductApi, deleteProductApi, getUsersApi }




