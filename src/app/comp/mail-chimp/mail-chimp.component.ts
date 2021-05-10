import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-chimp',
  templateUrl: './mail-chimp.component.html',
  styleUrls: ['./mail-chimp.component.scss'],
})
export class MailChimpComponent implements OnInit {
  constructor() {}
  url =
    'https://millionairefan.us1.list-manage.com/subscribe/post?u=6e4dedf53a93d94d5f1311c15&amp;id=02bb71788a';
  ngOnInit(): void {}
}
