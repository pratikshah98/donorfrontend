export class transaction{
    constructor(
      public pay_to_ngo_email:string,
      public donate_from_donor_email:string,
      public transaction_amt:number,
      public fk_nop_name:string
    ){}
  }
  


