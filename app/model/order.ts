import {OrderConfirmation} from "./order-confirmation";

export class Order {

    purchOrderNum: Number;
    jobName: string;
    materialType: string; // (ISO, Material, Metal, Skylites)
    salesOrderNum: number;
    orderDate: Date;
    pickupDate: Date;
    city: string;
    orderPlaced: boolean;
    orderConfirmations: OrderConfirmation[];
    isShipped: boolean;

    public toString = () => {
        return `Order = (${
        "\nPurchase order number = " + this.purchOrderNum
        + "\nJob name = " + this.jobName
        + "\nMaterial type = " + this.materialType
        + "\nSales Order Number = " + this.salesOrderNum
        + "\nOrder date = " + this.orderDate
        + "\nPickup date = " + this.pickupDate
        + "\nCity = " + this.city
        + "\nOrder Placed = " + this.orderPlaced
        + "\nOrder Confirmations = " + this.orderConfirmations
        + "\nOrder Shipped = " + this.isShipped
            })`
    }

}