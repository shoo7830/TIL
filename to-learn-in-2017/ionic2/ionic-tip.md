# ionic 2
* 사이드 메뉴의 이동은 button에 end를 추가하고
~~~ html
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle end>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Tasty Art</ion-title>
  </ion-navbar>
</ion-header>
~~~

* side="right"를 추가한다.
~~~ html
<ion-menu [content]="content" side="right">
  <ion-header>
    <ion-toolbar>
      <ion-title>메뉴</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {{p.title}}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>
~~~