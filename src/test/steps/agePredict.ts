import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { request as pwRequest, APIResponse } from "@playwright/test";

let apiResponse: APIResponse;
let nameParam: string | undefined;
let response : any
Given('I have a name {string}', async function (name: string) {
           // Write code here that turns the phrase above into concrete actions
           nameParam = name;
         });

When('I request the age prediction from the API', async function () {
        const apiContext = await pwRequest.newContext();
           const url = nameParam
            ? `https://api.agify.io/?name=${nameParam}`
            : `https://api.agify.io/`; // no parameter case
         apiResponse = await apiContext.get(url);
         });        
         
 Then('the response status should be {int}', async function (statusCode: number) {
        console.log("The status code is", statusCode);
        expect(apiResponse.status()).toBe(statusCode);
         });         

 Then("the response should contain an {string}", async function (field: string) {
        const body = await apiResponse.json();
        console.log(body[field]);
        expect(body).toHaveProperty(field);
});         

Given('I have names {string}', async function (inputName: string) {
          nameParam = inputName;
         });

When('I request age from the Agify API', async function () {
           const apiContext = await pwRequest.newContext();
           response = await apiContext.get(`https://api.agify.io?name=${nameParam}`)
         });
         
 Then('I should get an age prediction for name', async function () {
           const body = await response.json();
           console.log(body);
           
           expect(body).toHaveProperty("name");
            expect(body).toHaveProperty("age");
            expect(body).toHaveProperty("count");
           //console.log(`The name ${body.name} has the age ${body.age}`);
        });

         