import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms'; 
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule,NgClass], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() navClick = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  activeLink: string = 'home';
  searchItem: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    this.activeLink = this.router.url.substring(1) || 'home'; 
  }

  onNavClick(type: string, link: string): void {
    this.navClick.emit(type);  
    this.activeLink = link;    
    this.router.navigate([`/${link}`]);  
  }

  onSearch(): void {
    if (this.searchItem.trim()) {
      this.search.emit(this.searchItem.trim());
    }
  }
}
