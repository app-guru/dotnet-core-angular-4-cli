import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= filename.toKebabCase() %>',
  templateUrl: './<%= filename.toKebabCase() %>.component.html'
})
export class <%= (componentname.toString().length > 0) ? componentname.toProperCase() : filename.toProperCase() %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
