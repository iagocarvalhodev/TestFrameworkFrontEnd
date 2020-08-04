import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  isActive(key: string) {
    return this.location.path().includes(key)
  }
}
