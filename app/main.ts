
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';

import {AppComponent} from "./app.component";
import {CarPartComponent} from "./car-part/car-part.component";

@NgModule({
    declarations: [
        AppComponent,
        CarPartComponent
    ],
    imports: [ BrowserModule, FormsModule ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);