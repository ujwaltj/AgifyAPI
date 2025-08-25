# Agify API Testing with Playwright & TypeScript

## Project Overview
This project contains automated tests for the [Agify.io](https://agify.io) API using Playwright, TypeScript, and Cucumber (BDD).

## Features
- Feature name: identifyAge.feature <br>
It has the below 2 scenarios <br>
- To predict age by entering name of a person
- Agify API - Predict ages for names

## Run
### Run the below command in the commandline
npm test

## Project Structure
src/ <br>
 ├─ test/
 │   ├─ steps/        # Cucumber step definitions
 │   ├─ features/     # Feature files

cucumber.json file links the Feature file with the Step Definition  

## Notes

Increase step timeout for API calls if network is slow