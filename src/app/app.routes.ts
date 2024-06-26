import { Routes } from '@angular/router';
import { ItemFormComponent } from '../app/admin/item-form/item-form.component';
import { ItemListComponent } from '../app/admin/item-list/item-list.component';
export const routes: Routes = [
    { path: '', component: ItemListComponent },
    { path: 'add', component: ItemFormComponent },
    { path: 'edit/:id', component: ItemFormComponent }
];