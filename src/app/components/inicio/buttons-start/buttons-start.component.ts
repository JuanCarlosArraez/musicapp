import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-buttons-start',
  templateUrl: './buttons-start.component.html',
  styleUrls: ['./buttons-start.component.scss'],
})
export class ButtonsStartComponent implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit() {}

}
