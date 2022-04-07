export interface Users {
   id?: number;
   username?: string;
   password?: string;
   fName: string;
   mName?: string;
   lName: string;
   isStudent: boolean;
   email: string;
   birthdate: string;
   degree: string;
   department: string;
   college: string;
   contact: string;
   gender:string;
   yearAdmit: string;
   address1: string;
   address2: string;
   address3: string;
   address4: string;
   housingunit: string;
   status: 'active' | 'inactive'

  }
  