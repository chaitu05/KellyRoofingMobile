import {Component, OnInit} from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
import {Order} from "../../model/order";
import {ItemEventData} from "tns-core-modules/ui/list-view";

elementRegistryModule.registerElement("CardView",
    () => require("nativescript-cardview").CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    public orders: Array<Order> = [];

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        this.dummyOrderInitialize();
    }


    onOrderTap(args: ItemEventData): void {
        console.log('$$$$$$$$$ Item tapped: ' + args);
    }

    private dummyOrderInitialize() {
        this.orders.push({purchOrderNum: 12345, salesOrderNum:2789, licenseNum:2,
            jobName:'wal-mart', materialType: 'ISO', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 12346, salesOrderNum:3789, licenseNum:2,
            jobName:'wal-mart', materialType: 'Material', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: true, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 12347, salesOrderNum:4789, licenseNum:2,
            jobName:'wal-mart', materialType: 'Skylites', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 12348, salesOrderNum:5789, licenseNum:2,
            jobName:'Target', materialType: 'Metal', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: true, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 12349, salesOrderNum:6789, licenseNum:2,
            jobName:'Target', materialType: 'Material', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 22345, salesOrderNum:7789, licenseNum:2,
            jobName:'Smiths', materialType: 'Metal', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: true, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 22345, salesOrderNum:8789, licenseNum:2,
            jobName:'Smiths', materialType: 'Skylites', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: false, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 22345, salesOrderNum:9789, licenseNum:2,
            jobName:'Smiths', materialType: 'ISO', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: true, priorDays: 1}], isShipped: true
        });
        this.orders.push({purchOrderNum: 22345, salesOrderNum:10789, licenseNum:2,
            jobName:'Smiths', materialType: 'ISO', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
    }
}
