import {Component} from "@angular/core";
import {CarPart} from "./car-part";
import {CARPARTS} from "./mocks";

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-part/car-part.component.html',
    styleUrls: ['app/car-part/car-part.component.css']
})
export class CarPartComponent {

    carParts: CarPart[] = CARPARTS;
    carPartsResult : CarPart[];

    constructor() {
        this.carPartsResult = this.carParts;
    }

    totalCarParts(): number {

        let sum: number = 0;
        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }
        return sum;
    }

    upQuantity(carPart) {
        if(carPart.quantity < carPart.inStock)
            carPart.quantity++;

        console.log(carPart.quantity);
    }

    downQuantity(carPart) {
        if(carPart.quantity != 0) carPart.quantity--;
    }
    searchName(name) {
        //console.log(event.target.value + " " + event.target.tagName+ " " + event.target.type);

        if(name == '') {
            alert("입력해 주세요");
        }else {
            console.log("입력된 값"  + name);
            this.carPartsResult=[];
            for(let carPart of this.carParts) {
                if(carPart.name.indexOf(name) != -1) { // 아니면 -1
                    this.carPartsResult.push(carPart);
                }
            }
        }

    }
}
