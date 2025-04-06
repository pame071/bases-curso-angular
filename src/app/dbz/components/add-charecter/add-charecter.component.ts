import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-charecter',
  standalone: false,
  templateUrl: './add-charecter.component.html',
  styleUrl: './add-charecter.component.css'
})

export class AddCharecterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    name: '',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);

    if(this.character.name.length === 0) return; // valida que nombre venga vacio

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0}
  }
}
