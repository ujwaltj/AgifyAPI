import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { request, APIResponse } from "@playwright/test";

let apiResponse: APIResponse;
let nameParam: string | undefined;
let response : any

// Given('I have names {string}', async function (inputName: string) {
//           nameParam = inputName;
//          });

// When('I request age from the Agify API', async function () {
//            response = await this.request.get(`https://api.agify.io?name=${nameParam}`);
//          });
         
//  Then('I should get an age prediction for name', async function () {
//            const body = await response.json();
//            expect(body).toHaveProperty("name");
//             expect(body).toHaveProperty("age");
//             expect(body).toHaveProperty("count");
//            //console.log(`The name ${body.name} has the age ${body.age}`);
//          });