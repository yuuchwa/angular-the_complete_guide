import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';
import { AccountsService } from './../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status:string) => alert('new Status ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // const service = new LoggingService(); // Wrong Service Usage !!!
    // service.logStatusChange(accountName);
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountName);
  }
}
