## Robofriends
A simple React App, that filters through fetched data with a search bar and displays it on Card components
![Robofriends](https://i.imgur.com/goWtZ03.png)
[Demo](https://obleey.github.io/robofriends/)

## How I worked on this project  

This was my first ever React project, so the goal here was to:
- Get familiar with all the concepts in react and writing JSX  
- Get familiar with npm and some packages as well as working with API's
- Learn all the basics (rendering data and life cycle methods)
## How to navigate this project  
- The `src`folder contains two separate folders, one is `components`, which stores all the reusable components of the appliaction and `containers` which stores the page layout.
- The project uses [Tachyons CSS toolkit](https://tachyons.io/) for styling: [Card component example](https://github.com/obleey/robofriends/blob/main/src/Components/Card.js)
- The application fetches data from the [JSON placeholder](https://jsonplaceholder.typicode.com/users) for data and [RoboHash](https://robohash.org/) for images, then stores it into state. From there on, we wok with the stored data for the searchbar component, which filters the data from user input: [Code here](https://github.com/obleey/robofriends/blob/main/src/Containers/App.js)
- The App has a Error boundry implemeneted: [Code here](https://github.com/obleey/robofriends/blob/main/src/Components/ErrorBoundry.js)
## Why I built the project this way  
- This was a fun project to learn all about React. It taught me how to work with state and API's
- I didn't use a state management library like Redux or Hooks on purpose. For this app, i wanted to code in the old way with class based components.
- Tachyons is a good library for fast styling.  
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the  
frontend. That's why I decided to use an existing API rather to create a custom server. I have  
basic backend knowledge as well.  

## If I had more time I would change this  
- Write all tests using Jest
- Refactor the code using Hooks, which i have done in a separate repository: [Robofriends with Hooks](https://github.com/obleey/robofriends-hooks)
- Lift all state outsite of the app, using Redux, which i have done in a separate repository: [Robofriends with Redux](https://github.com/obleey/robofriends-redux)
- Since I realized that more and more projects don't use Redux anymore, i would implement GraphQL or  
react-query for data managment.
 
## Available Scripts  
First of all clone this repo and install all the needed dependencies using `npm` or `yarn`

**Dev build:**

run  `nmp start`

**Prod build:**

run  `nmp run deploy`

## Authors
[Miha Oblišar - @mihaoblisar](www.linkedin.com/in/miha-obli%C5%A1ar-8b177610a)

## Licence
This project is open-sourced under the [MIT license](https://opensource.org/licenses/MIT).
