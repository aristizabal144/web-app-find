import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  inputSearch: string = ""
  result: any;

  constructor(private userService: UserService) {}

  async handleSearch(){
    let result = await this.userService.getUserListPromise(this.inputSearch);
      this.result = result;

    console.log(this.result);
  }
}
