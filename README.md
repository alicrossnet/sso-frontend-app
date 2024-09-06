This a Demo app for implementing SSO. You can follow this https://medium.com/@ali.ravian1308/implementing-sso-using-authentik-74a727826c3b DEMO to implement and understand how SSO work.

# Get start with

-> install the required packages
    npm i

-> replace the ClientID and Secret according to IdP application configuration 
    These setting are place in index.js file

-> The application configured to run on 3001. you can change it according to your choice. 
     1) in package.json file Change the PORT value from 3001 to your desired
     2) change all redirect uri according to your port.

-> To run the applicaiton
     npm start
