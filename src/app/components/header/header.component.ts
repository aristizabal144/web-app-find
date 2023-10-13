import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() emitData: EventEmitter<string> = new EventEmitter<string>();

  inputSearch: string = ""
  resultData: any;

  constructor(private userService: UserService) {}

  async handleSearch(){

    const maxRegistros = 10;

    let result = await this.userService.getUserListPromise(this.inputSearch);

    this.emitData.emit(result?.items.length > maxRegistros ? result.items.slice(0, maxRegistros) : result.items);
  }
}
