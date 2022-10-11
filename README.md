# Currency Exchange React App

Based on monobank api [api link](https://api.monobank.ua/bank/currency).

Works with USD, EUR and UAH currencies.

Application includes two pages:

First page contains selection of base currency and calculation of currency ratios (1 USD = 1 EUR etc.)

Second page contains converter, where user is able to input string request for convertion (for example: 15 usd in uah). Validation for errors is included.

Because of api restriction (429 error) app may display this error is cases of frequent page reload. 


