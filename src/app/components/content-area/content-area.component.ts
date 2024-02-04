import {Component, Input} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

// @ts-ignore
@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css'],
  animations: [
    trigger('hidePreloader', [
      transition(':leave', [
        animate(190, style({ opacity: 0, transform: 'scale(0.4)' }))
      ])
    ]),
    trigger('showContent', [
      state('hidden', style({
        opacity: 0,
        transform: 'scale(0.4)'
      })),
      state('showed', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('hidden => showed', [
        animate('0.19s 500ms')
      ])
    ])
  ]
})
export class ContentAreaComponent {

  @Input() isShowedLogoPreloader: boolean | null = null;

  ngOnInit() {
    if (window.localStorage.getItem('dga_isShowedLogoPreloader')) {
      this.isShowedLogoPreloader = true;
      return undefined
    }

    if (this.isShowedLogoPreloader) {
      return undefined
    }

    setTimeout(() => {
      this.isShowedLogoPreloader = true;
      window.localStorage.setItem('dga_isShowedLogoPreloader', 'true');
    }, 3000)

    return true
  }

}
