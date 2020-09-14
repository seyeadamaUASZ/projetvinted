import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    {
      title: 'accueil',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'suivi du dossier',
      url: '/menu/etat',
      icon: 'code-working'
    },

    {
      title: 'settings',
      url: '/menu/settings',
      icon: 'settings'
    },

  ]; 
  constructor() { }

  ngOnInit() {
  }

}
