import {requester} from './requester.js';

export const createLine =  (name, price, quantity) => async (dispatch) => {
    const list = await requester.put('list', {
        name,
        price,
        quantity
    })      
    dispatch({type: 'LOAD_LIST', list})
}

export const removeLine = (id) => async (dispatch) => {
    const list = await requester.delete(`list/${id}`)
    dispatch({type:'LOAD_LIST', list})
}

export const incrementQuantity = (id) => async (dispatch) => {
    const list = await requester.post(`list/${id}/increment`)
    dispatch({type: 'INCREMENT_QUANTITY', list})
}


export const decrementQuantity = (id) => async (dispatch) => {
    const list = await requester.post(`list/${id}/decrement`, {
        id
    })
    dispatch({type: 'DECREMENT_QUANTITY', list})
}

export const showAll = (search, field, direction) => async (dispatch) => {
    const queryParams = [];
    search && queryParams.push(`search=${search}`);
    field && queryParams.push(`field=${field}`);
    direction && queryParams.push(`direction=${direction}`);
    
    const list = await requester.get(`list?${queryParams.join('&')}`)
    dispatch({type: 'LOAD_LIST', list})
}



