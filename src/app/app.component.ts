import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ItemFormComponent } from '../app/admin/item-form/item-form.component';
import { ItemListComponent } from '../app/admin/item-list/item-list.component';
@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule, HttpClientModule, ItemListComponent, ItemFormComponent]
})
export class AppComponent {
  title = 'food-delight';
}
