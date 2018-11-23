import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-blog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'voici mon premier post , j\'espere vous l\'aimez ',
      loveIts:0,
      created_at:new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'voici mon 2eme post , j\'espere vous l\'aimez ',
      loveIts:0,
      created_at:new Date()
    },
    {
      title: 'Encore un post',
      content: 'voici mon post , j\'espere vous l\'aimez ',
      loveIts:0,
      created_at:new Date()
    }
  ];
}
