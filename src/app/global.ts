// import { Injectable } from '@angular/core';

// import * as moment from 'moment';
// /**
//  * Global service for component interaction.
//  */
// @Injectable()
// export class Globals {
 
//   refno: any;
//   username: any;

//   scope:any;
//   role = {url: null, filename: null};
//   loaderstyle = '';
//   filepath = '/home/melvin/ui';
//   validatelogin: string = '';
//   loginwithnewpass: string = '';
//   //api = 'http://192.168.10.155:8087';
//   loaderstyleFull = 'fade in hide';
//   menuactive = 'dashboard';
//   reportmenu='All State';
//   offsetSeconds = 900;
//   filterstatus={status: 'All'};
//   selected:any;
//   select='any';
//   filter={status: 'null',lender:'null'};
//   exdata = {
//     expirydate: null,
//     holdername: null,
//     policyamount: null,
//     policyno: null,
//     startdate: null,
//     termsofcover: []
//   };
//   public getToken(): string {
//     return localStorage.getItem('hoswebtoken');
//   }

//   public getScope():any{
//     var scope =this.jwtHelper.decodeToken(this.getToken()).scopes;
//     return scope;

//   }

//   public isAdminRole():string{
//     var isAdmin ="";
//       this.getScope().forEach(element => {
//         if(element.authority =="ADMIN_ROLE"){
//           isAdmin = element.authority;
//         }
//       });
    
//     return isAdmin;
//   }
// }
