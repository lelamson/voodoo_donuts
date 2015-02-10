# voodoo_donuts

The voodooDonutsModels.html contains my JS code to model an Object constructor to for a Voodoo Donuts store. Each new Object will be passed the 4 parameters listed on the spreadsheet on canvas.  In addition to those 4 parameters, I declared 2 additional global variables that store the value of my open & traffic functions.
The open function takes the time as 24 hour military clock, and verifies if the voodoo store will be open.
My traffic function creates a random number between 1-100, calculates the range amount from taking the difference of the maximum and minimum amount of hourly foot rate.  Those two values are multipled to each other before adding the minimum hourly rate, to determine the random hourly foot rate, that falls within the range provided.
The purchased function uses the traffic functions calculated value, and multiplies it by the percentage of customers that will enter store along with multiplying it the average donuts purchased per transaction.
The supply function will iterate through a 24 hour period and forecast how many donuts will be purchased for each hour and console.log the results.  The function will provide lastly provide the total forecasted donuts in that 24 hour period.
Created 5 Voodoo objects utilizing the canvas spreadsheet and the results of how many each store is forecasted in donuts below via developers console within Chrome:


Donuts needed during 800 hour of the day may be 51 donuts.
Donuts needed during 900 hour of the day may be 77 donuts.
Donuts needed during 1000 hour of the day may be 38 donuts.
Donuts needed during 1100 hour of the day may be 70 donuts.
Donuts needed during 1200 hour of the day may be 61 donuts.
Donuts needed during 1300 hour of the day may be 46 donuts.
Donuts needed during 1400 hour of the day may be 34 donuts.
Donuts needed during 1500 hour of the day may be 64 donuts.
Donuts needed during 1600 hour of the day may be 52 donuts.
Donuts needed during 1700 hour of the day may be 85 donuts.
Total donuts forecasted are 578 donuts.
Donuts needed during 800 hour of the day may be 25 donuts.
Donuts needed during 900 hour of the day may be 27 donuts.
Donuts needed during 1000 hour of the day may be 20 donuts.
Donuts needed during 1100 hour of the day may be 32 donuts.
Donuts needed during 1200 hour of the day may be 37 donuts.
Donuts needed during 1300 hour of the day may be 18 donuts.
Donuts needed during 1400 hour of the day may be 34 donuts.
Donuts needed during 1500 hour of the day may be 20 donuts.
Donuts needed during 1600 hour of the day may be 13 donuts.
Donuts needed during 1700 hour of the day may be 35 donuts.
Total donuts forecasted are 261 donuts.
Donuts needed during 800 hour of the day may be 71 donuts.
Donuts needed during 900 hour of the day may be 74 donuts.
Donuts needed during 1000 hour of the day may be 58 donuts.
Donuts needed during 1100 hour of the day may be 73 donuts.
Donuts needed during 1200 hour of the day may be 65 donuts.
Donuts needed during 1300 hour of the day may be 67 donuts.
Donuts needed during 1400 hour of the day may be 71 donuts.
Donuts needed during 1500 hour of the day may be 72 donuts.
Donuts needed during 1600 hour of the day may be 62 donuts.
Donuts needed during 1700 hour of the day may be 54 donuts.
Total donuts forecasted are 667 donuts.
Donuts needed during 800 hour of the day may be 9 donuts.
Donuts needed during 900 hour of the day may be 11 donuts.
Donuts needed during 1000 hour of the day may be 12 donuts.
Donuts needed during 1100 hour of the day may be 7 donuts.
Donuts needed during 1200 hour of the day may be 12 donuts.
Donuts needed during 1300 hour of the day may be 14 donuts.
Donuts needed during 1400 hour of the day may be 12 donuts.
Donuts needed during 1500 hour of the day may be 9 donuts.
Donuts needed during 1600 hour of the day may be 14 donuts.
Donuts needed during 1700 hour of the day may be 16 donuts.
Total donuts forecasted are 116 donuts.
Donuts needed during 800 hour of the day may be 33 donuts.
Donuts needed during 900 hour of the day may be 38 donuts.
Donuts needed during 1000 hour of the day may be 57 donuts.
Donuts needed during 1100 hour of the day may be 49 donuts.
Donuts needed during 1200 hour of the day may be 15 donuts.
Donuts needed during 1300 hour of the day may be 52 donuts.
Donuts needed during 1400 hour of the day may be 37 donuts.
Donuts needed during 1500 hour of the day may be 22 donuts.
Donuts needed during 1600 hour of the day may be 56 donuts.
Donuts needed during 1700 hour of the day may be 20 donuts.
Total donuts forecasted are 379 donuts.
Voodoo's total donuts forecasted to sell by all stores are 2001 donuts.
