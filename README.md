# MyStore App

This app is about Store with some products on it, you could choose the amount you want to
add to your cart.

## Description
This Application is based on 4 Major Angular Components:
- Header
- Products List [ have 2 another components ( product.item - product.detail )  ]
- Cart [ Have another component ( cart.item ) ]
- Confirmation

The 3 components have their own service:
- "Product service" which has the connection with the server - JSON file here-
- "Cart service" that has the products that were bought.
- "Confirm service" which handles the data from a form that was created in the cart component

also, I have created a custom model name item with the required properties, and a type for user information named userInfo.

## Overview
The idea I that the product list component is rendering the component item as much as there is data in the array of the component, and have a function to add the item to the cart list as a bought product.

Likewise the cart component does, with some functions like removing products and calc the total price, in addition to a form to make the final submission for your order.

after you submit the form you will be directed to the confirm page which confirms the name and total price for your order.

## Installation

1. you should cd to the app folder 

2. install npm 

```python
npm i
```
3. Now You can serve the app with
```bash
ng serve
```

## Usage
### users
the app is too simple, just choose your products and add them to your cart then submit your order after filling out the form

### developers
this application is made with love and Angular :), so feel free to apply all of Angular's command lines
like:
```python
ng g c _component_Name         // to generate a new Component
```
```python
ng g s _component_Service         // to generate a new Service
```


