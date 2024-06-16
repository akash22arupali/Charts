import { Component } from '@angular/core';

import { SignalsComponent } from './signals/signals.component';

import { ChartsComponent } from './advanced/charts/charts.component';
import { AreaChartComponent } from './advanced/area-chart/area-chart.component';
import { BarChartComponent } from './advanced/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './advanced/bubble-chart/bubble-chart.component';
import { PieChartComponent } from './advanced/pie-chart/pie-chart.component';
import { DonutChartComponent } from './advanced/donut-chart/donut-chart.component';
import { RadorChartComponent } from './advanced/rador-chart/rador-chart.component';
import { PolarAreaChartComponent } from './advanced/polar-area-chart/polar-area-chart.component';
import { MixedChartComponent } from './advanced/mixed-chart/mixed-chart.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
        SignalsComponent,
        ChartsComponent,
        AreaChartComponent,
        BarChartComponent,
        BubbleChartComponent,
        PieChartComponent,
        DonutChartComponent,
        RadorChartComponent,
        PolarAreaChartComponent,
        MixedChartComponent
    ]
})
export class AppComponent { }
