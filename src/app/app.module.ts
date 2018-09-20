import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { StylesComponent } from './styles/styles.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { MeasurementUnitsComponent } from './measurement-units/measurement-units.component';
import { AnimationsComponent } from './animations/animations.component';
import { ScssComponent } from './scss/scss.component';
import { PlaygroundComponent } from './playground/playground.component';


const routes: Routes = [
    { path: 'playground', component: PlaygroundComponent },
    { path: 'styles', component: StylesComponent },
    { path: 'selectors', component: SelectorsComponent },
    { path: 'box-model', component: BoxModelComponent },
    { path: 'measurements-units', component: MeasurementUnitsComponent },
    { path: 'animations', component: AnimationsComponent },
    { path: 'scss', component: ScssComponent },
    { path: '**' , redirectTo: 'styles'}
];

@NgModule({
  declarations: [
    AppComponent,
    StylesComponent,
    SelectorsComponent,
    BoxModelComponent,
    MeasurementUnitsComponent,
    AnimationsComponent,
    ScssComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
