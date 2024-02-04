import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-area-preloader',
  templateUrl: './content-area-preloader.component.html',
  styleUrls: ['./content-area-preloader.component.css'],
})

export class ContentAreaPreloaderComponent {

  ngOnDestroy() {
    console.log('destroy')
  }

}
