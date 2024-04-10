import {atom} from 'recoil';

export const productListState = atom({
    key: 'productList',
    default: [
        {
            id: 1, price: 150000, title: "Ao thun nam"
        },
        {
            id: 2, price: 2500000, title: "Ao so mi nu"
        },
        {
            id: 3, price: 300000, title: "Ao khoac thoi trang"
        }
    ]
})