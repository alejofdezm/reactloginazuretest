import * as msal from "@azure/msal-node";
 
export const config ={
  auth: {
     clientId: configuracionGlobal.apiKey,
     authority: configuracionGlobal.authority, 
     knownAuthorities: ["bccrtestloginv2.b2clogin.com","https://bccrtestloginv2.b2clogin.com","bccrtestloginv2.onmicrosoft.com","https://bccrtestloginv2.onmicrosoft.com","https://login.microsoftonline.com/bccrtestloginv2"] ,     
     clientSecret: configuracionGlobal.clientSecret
   } ,
   cache: {
       cacheLocation: "sessionStorage",
       storeAuthStateInCookie: false
   }
 }
 console.log(config)
 export const auth  = new msal.PublicClientApplication(config);
 