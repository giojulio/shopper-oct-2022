import { IItem } from "./Item"

export class IProduct extends IItem {
    constructor(
        id: number, 
        name: string,
        price: number,
        private qty_stock: number
    ){
        super(
            id,
            name,
            price
        )
    }

    getPrice() {
        return this.price
    }

    getStock() {
        return this.qty_stock
    }

    

    // setQtyStock(value: number) {
    //     this.qty_stock = value
    // }
};