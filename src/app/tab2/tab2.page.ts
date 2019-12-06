import { Component } from '@angular/core';
// import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // @ViewChild('search') search:IonSearchbar;
  textoBuscar = '';
  ideas: string[]= ['Spiderman', 'Scary Movie', 'Mia Khalifa', 'Avengers'];
  constructor() {}

  onSearchChange( event ) {
    console.log(event.target.value);
  }

  // setIdea(event){
  //  console.log(event.target.textContent);
  // //  this.search.value = event.target.textContent;
  // }

}
