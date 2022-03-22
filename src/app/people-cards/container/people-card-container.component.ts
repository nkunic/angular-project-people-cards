import { Component } from '@angular/core';
import {CardModel} from '../model/card.model';

@Component({
  selector: 'app-people-card-container',
  templateUrl: './people-card-container.component.html',
  styleUrls: ['./people-card-container.component.scss'],
})
export class PeopleCardContainerComponent {

  title = 'People Card & People Card Grid';

  cards: CardModel[] = [
    {
      id: 1,
      name: 'Evan You',
      imgName: 'user-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 2,
      name: 'Russell Keith-Magee',
      imgName: 'user-2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 3,
      name: 'Kris Nova',
      imgName: 'user-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 4,
      name: 'Jess Frazelle',
      imgName: 'user-4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 5,
      name: 'Evan You',
      imgName: 'user-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 6,
      name: 'Russell Keith-Magee',
      imgName: 'user-2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 7,
      name: 'Kris Nova',
      imgName: 'user-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 8,
      name: 'Jess Frazelle',
      imgName: 'user-4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 9,
      name: 'Evan You',
      imgName: 'user-1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 10,
      name: 'Russell Keith-Magee',
      imgName: 'user-2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 11,
      name: 'Kris Nova',
      imgName: 'user-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    },
    {
      id: 12,
      name: 'Jess Frazelle',
      imgName: 'user-4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in mauris a mauris faucibus ullamcorper tincidunt et massa. Integer condimentum condimentum nunc vel convallis.'
    }
  ];

}
