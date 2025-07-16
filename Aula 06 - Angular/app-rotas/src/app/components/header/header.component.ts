import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  readonly nomeFicyicio = input<string>('Arena Chess Store');

  pageTitle: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.pageTitle = data['title'] || 'Angular 19 com Componentes e Rotas\n' + this.nomeFicyicio();
    });
  }
}
