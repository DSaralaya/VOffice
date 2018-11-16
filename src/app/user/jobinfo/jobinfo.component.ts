import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobinfo',
  templateUrl: './jobinfo.component.html',
  styleUrls: ['./jobinfo.component.css']
})
export class JobinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
