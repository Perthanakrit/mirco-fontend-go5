import {Component, input, Input, InputSignal, output} from '@angular/core';
import {firstValueFrom, Subscription} from "rxjs";
import {CategoriesModel} from "../../../../bootcamp/src/app/models/categories.model";
import {CategoriesService} from "../../services/categories.service";
import {FormsModule, NgForm} from "@angular/forms";
import {CategoryRequest} from "../../models/category-request";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent {
  private _categories?: Subscription;
  protected category: CategoryRequest = new CategoryRequest();

  name = input<string>("Default");
  nameChange = output();

  constructor(private categoriesService: CategoriesService) {
  }

  onFormSubmit() {}

  addCategory() {
    firstValueFrom(this.categoriesService.addCategory(this.category)).then(
      res => {
        console.log(res);
      }
    );
  }
}
