import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterLink]
})
export class ItemFormComponent implements OnInit {
  item: any = { name: '',description: '',location:'',contact:'',menu:[]};
  id: any;
  items: any[] = [];
  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.restaurantService.getItem(this.id).subscribe(data => {
        this.item = data;
        console.log(this.item)
        this.items = this.item.menu;
      });
    }
  }
  saveItem(): void {
    if (this.id) {
      this.restaurantService.updateItem(this.id, this.item).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.restaurantService.createItem(this.item).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
 
}
