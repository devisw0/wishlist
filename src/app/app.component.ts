import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishitem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wishlist';

  items: WishItem[] = [

    new WishItem('To Learn Angular', true),
    new WishItem('To Learn NodeJs' ,false),
    new WishItem('Idk I just put sumn random', true)

  ];

  newWishText = '';
  //binded the input element with newWishText

  listFilter : String = '0';
  //since we bound this property with ngModel we can set it to 0
  //and the default choice for the select is what we set it to 

  visibleItems : WishItem[] = this.items;
  //initialized this with our items array

  addnewWish() {
    //adds wish to items array
    //clear the text box
    if (this.alreadyexists() == true){
      console.log("this item already exists")
    }
    else {
      this.items.push(new WishItem(this.newWishText));
    }

    if (this.newWishText == '') {
      alert("This is not possible, you are trying to input an empty wish") 
    }
    //when we are calling this function we push an instance of WishItem
    //where where the parameter it takes is the newWishText string
    //and its this isntance of the addnewWish function
    //in the html with teh newWishText we are two way binding, since we
    //indicated it in the html in the input, we are binding input with our placeholder
    //string
    //we push an instance of the WishItem export class into the items array using that
    //arguement from the double binding

    this.newWishText = '';
    //clears the textbox
    



  }

  filterChanged(value: any){
    console.log(value);
    if (value ==0){ 
      this.visibleItems = this.items;
    }
    else if (value == 1) {
      this.visibleItems = this.items.filter(item => !item.isComplete)
    }
    else if (value == 2) {
      this.visibleItems = this.items.filter(item => item.isComplete)
    }
  }



  toggleitem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item)

  }

alreadyexists(): boolean{
  if (this.visibleItems.some(item => item.wishText === this.newWishText)) {
    alert("This wish already exists")
    return true
  }
  else{
    return false
  }
}



}
