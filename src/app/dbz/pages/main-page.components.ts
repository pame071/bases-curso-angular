import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-components.html',
  standalone: false
})

export class MainPageComponent {
  constructor(private dbservices: DbzServices){}

  get characters() : Character[] {
    return [...this.dbservices.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbservices.deleteCharacterById(id)
  }

  onNewCharacter(character: Character):void{
    this.dbservices.addCharacter(character);
  }
}
