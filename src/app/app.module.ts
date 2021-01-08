import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Recipe } from './recipe/recipe.component';
import { RecipeItemsComponent } from './recipe/recipe-items/recipe-items.component';
import { RecipeListsComponent } from './recipe/recipe-lists/recipe-lists.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Recipe,
    RecipeItemsComponent,
    RecipeListsComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
