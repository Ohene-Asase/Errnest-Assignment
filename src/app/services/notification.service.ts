import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSucess(message, title?){
    this.toastr.success(message,title);
  }

  showError(message?,title?){
   this.toastr.error(message,title, { timeOut: 0, extendedTimeOut: 0 })
  }


}
