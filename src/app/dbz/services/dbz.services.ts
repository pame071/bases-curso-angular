import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzServices {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1500
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 18000
    }
  ];

  addCharacter(character: Character): void{

    const newCharacter: Character = {
      id: uuidv4(),
      ...character
    }

    this.characters.push(newCharacter);
  }

  /* onDeleteCharacter(index: number):void{
    console.log({index});
    this.characters.splice(index, 1);
  } */

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id );
  }

}
