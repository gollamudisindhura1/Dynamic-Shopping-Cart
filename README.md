# Dynamic Shopping Cart

## Overview

This lab is a Dynamic Shopping Cart built with HTML, CSS, Bootstrap, and JavaScript. 

The app lets us to:

- Add new products with names and prices

- Increase or decrease product quantities

- Remove products from the cart

- See the total price update automatically

It is a hands-on way to practice DOM manipulation, event handling, and real-time updates in JavaScript.

## Learnings

I was able to:

- Dynamically create and modify elements in the DOM

- Handle user interactions like adding, updating, and removing products

- Use JavaScript functions to update totals in real time

- Validate inputs to avoid invalid or empty entries

## Features

- Add items dynamically to the cart
- Update quantity with + and – buttons
- Automatically update total price
- Remove items and recalculate total
- Validation for empty or invalid input

## Reflection Questions

1. How did you dynamically create and append new elements to the DOM?
- I used document.createElement() to create list items for each product and appendChild() to insert them into the cart. I also used template literals to insert the product’s name, price, and control buttons.

2. What steps did you take to ensure accurate updates to the total price?
- Each time a product was added, removed, or its quantity changed, I called a function updateTotalPrice() that recalculates the total by adding or subtracting the correct amount.

3. How did you handle invalid input for product name or price?
- Before creating a product, I checked if the name field was not empty and if the price was a valid positive number. If not, an alert appears.

4. What challenges did you face when implementing the remove functionality?
- At first, removing items didn’t properly update the total. I fixed this by storing each item’s base price and subtracting the correct amount from the total before removing the element.

5. What did you learn from your previous labs that helped here?
 - From my previous task management lab, I learned to always check the browser console for errors.

## Helpful Resources

1. MDN Web Docs – DOM Manipulation

2. freeCodeCamp – Use Local Storage in Modern Applications

3. W3Schools – JavaScript DOM Tutorial

