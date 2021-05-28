import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.status == "Success") {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        }
        if (!res.ok){
          this.toastr.error(res.message);
            // switch (res.message) {
            //   case 'User Already Exist':
            //     this.toastr.error('User is Already Exist');
            //     break;

            //   default:
            //   this.toastr.error('Failed to register new user');
            //     break;
            // }
        }
      },
      err => {
        this.toastr.error(err.error.message);
        console.log(err);
      }
    );
  }

}
