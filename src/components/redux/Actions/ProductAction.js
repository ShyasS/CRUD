import { ActionType } from "../ActionTypes/ActionType";
import FakeStoreApi from "../../../API's/FakeStoreApi";
export const fetchProducts = () => async (dispatch) => {
    const response = await FakeStoreApi.get("/products")
    dispatch({ type: ActionType.FETCH_PRODUCT, payload: response.data })
}
export const fetchProduct = (id) => async (dispatch) => {
    const response = await FakeStoreApi.get(`/products/${id}`)
    dispatch({ type: ActionType.SELECTED_PRODUCT, payload: response.data })
}
export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCT
    }
}