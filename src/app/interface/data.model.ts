export interface NumberVerificationResponse{
   number: string,
   country_code: string ,
   error?: Error,
   valid?: boolean;

}

export interface Country{
    country_name: string,
    dialing_code: string,
    alphaTwoCode: string

}

interface Error {
    info: any;
}