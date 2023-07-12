import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as moment  from 'moment';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent  {
  constructor( 
    private auth:AuthService, 
    private router: Router
  ) { }
  ngOnInit(): void { }
  xulyDN_old(data:any){
    this.auth.login( data.un, data.pw).subscribe( ()=>{ 
         console.log("Đăng nhập thành công");
         this.router.navigateByUrl('/');
      }
    )
  }
  xulyDN(data:any){    
    console.log(data, data.un , data.pw);
    this.auth.login( data.un, data.pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/');
      },
      error => {
        console.log('oops loiiiiii roiii', error);
        this.router.navigateByUrl('/dangnhap');
      }
    )
   } //xulyDN
}
