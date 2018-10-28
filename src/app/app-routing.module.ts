import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { StudentDetailsComponent } from './studends/student-details/student-details.component';


const appRoutes : Routes = [
    { path: "student/details", component:StudentDetailsComponent}
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);