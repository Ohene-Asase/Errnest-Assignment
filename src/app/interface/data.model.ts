export interface numberVerificationModel {
   number: string,
   country_code: string ,
   error?: error,
 
}

export interface  alphaCodeModel {
    country_name: string,
    dialing_code: string
}

export interface error {
    info: any;
    valid: any;
    invalid: any;
}