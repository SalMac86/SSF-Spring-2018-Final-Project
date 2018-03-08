import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        MovieComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        HttpClientModule
    ],
    providers: [
        MovieService,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
