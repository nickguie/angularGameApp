export class Game{
  id? : number;
  name: string;
  genre = '';
  platform = '';
  status = 'na';

  constructor(name:string){
    this.name = name;
  }

}
