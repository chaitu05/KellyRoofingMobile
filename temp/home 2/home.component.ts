import {Component, OnInit} from "@angular/core";
import * as elementRegistryModule from 'nativescript-angular/element-registry';
import {Order} from "../../model/order";
import {ItemEventData} from "tns-core-modules/ui/list-view";
import {SegmentedBar, SegmentedBarItem} from "tns-core-modules/ui/segmented-bar";

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
    public segBarItems: Array<SegmentedBarItem> = [];

    public searchableProps = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
        "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        this.segBarItems.push(this.segBarItemInit('All'));
        this.segBarItems.push(this.segBarItemInit('Today'));
        this.segBarItems.push(this.segBarItemInit('Next 7 days'));
        console.log('');
        this.dummyOrderInitialize();
    }


    onOrderTap(args: ItemEventData): void {
        console.log('$$$$$$$$$ Item tapped: ' + args);
    }

    public onSelectedIndexChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        console.log('selected index: ' + segmentedBar.selectedIndex);
        // todo: update showing orders
    }

    private segBarItemInit(title:string): SegmentedBarItem {
        const sbi = new SegmentedBarItem();
        sbi.title = title;
        return sbi;
    }

    public getOrderStatus(order:Order):string {

        if (order.isShipped)
            return "Shipped";
        else if (!order.orderPlaced)
            return "Not-Ordered";
        else if (order.orderConfirmations.length == 0 && order.orderPlaced)
            return "Ordered";

        return "Confirmed " + order.orderConfirmations[0].priorDays +
            (order.orderConfirmations[0].priorDays > 1 ? "day " : "days " + "prior");

    };

    private dummyOrderInitialize() {
        this.orders.push({purchOrderNum: 12345, salesOrderNum:2789, licenseNum:2,
            jobName:'wal-mart', materialType: 'ISO', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: true,
            orderConfirmations: [{confirmed: true, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false,
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
        this.orders.push({purchOrderNum: 32345, salesOrderNum:100789, licenseNum:2,
            jobName:'Sams club', materialType: 'Meta', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 42345, salesOrderNum:110789, licenseNum:2,
            jobName:'Costco', materialType: 'Material', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 52345, salesOrderNum:120789, licenseNum:2,
            jobName:'Costco', materialType: 'Skylites', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
        this.orders.push({purchOrderNum: 62345, salesOrderNum:130789, licenseNum:2,
            jobName:'Lees', materialType: 'ISO', orderDate:new Date(),
            pickupDate: new Date(), city: 'Salt lake', orderPlaced: false,
            orderConfirmations: [{confirmed: false, priorDays: 4 },
                { confirmed: false, priorDays: 1}], isShipped: false
        });
    }
}
