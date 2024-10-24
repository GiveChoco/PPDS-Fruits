# What can you do with Fruits\! 

## What is this application? 

### We know you don’t eat enough fruits. But how about fruit-falvored food? 
I used the API to collect all fruit related food you can easily get your hands on. Some are healthy (ex.fig bar, yogurt) and some may not (protien shake, fruit snacks). But that's a start to get familiar with the fruits! 

This way, we can consume more fruits and build a habit of eating real ones.  

## API used 

I used [nutritionIX](https://www.nutritionix.com/business/api?creative=249135079381&keyword=restaurant%20api&matchtype=b&network=g&device=c&utm_source=google&utm_medium=cpc&utm_campaign=NutritionAPI&gad_source=1)’s food database API. For the endpoint I used, it returns a list of branded / common food with the keyword included in the header. 

The GET request is set up in the api-service.js, and the actual endpoint (URL) is each written in the respectable fruits page (ex. apple, banana, grapes)

This is not for commercial use and strictly for educational purposes 

## Where GPT was used 

### Comments will include where it was used inside the affected files. 

* To start, file structure was designed by GPT (pages, components)  
* For complex functions (navigation, React hooks, useState)   
* Reformatting the tailwind UI to meet my data

## How to run this repository 
1. git clone [https://github.com/GiveChoco/PPDS-Fruits](https://github.com/GiveChoco/PPDS-Fruits)  
2. cd to daily fruit
   ```
   cd daily-fruit
   ```
3. install package
   ```
   npm install 
   ```
4. Create a .env file and place it in the daily-fruit directory (not src, pages or anywhere else)
5. In the .env file put
   ```
   REACT\_APP\_API\_ID: "YOUR API KEY"
   REACT\_APP\_API\_KEY: "YOUR API KEY
   ```
   generated from [https://developer.nutritionix.com/](https://developer.nutritionix.com/)  
6. run the project
   ```
   npm start
   ```


