# React-Star-Wars-Website

## Star Wars Web App

Welcome to the **Star Wars Web App** project! This web application is built using **React** and the **Chakra UI** library for building React components. It serves as an interactive platform for exploring information related to Star Wars films and characters.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Getting Started](#getting-started)


## Project Overview

The **Star Wars Web App** is a single-page application designed to provide users with information about Star Wars films and characters. The app follows modern development practices and tools, using **React** for building the user interface. The data is sourced from a JSON server, and the layout is based on a Figma design provided in the `public` folder.

## Technologies Used

The following technologies and tools were used in the development of this project:

- **React**: Building the user interface and managing application state.
- **Chakra UI**: Creating responsive and aesthetically pleasing components.
- **React Router**: Handling navigation between different pages.
- **Axios**: Making API requests to retrieve data from the JSON server.
- **Redux Toolkit**: Managing complex state and data.
- **Vite**: A fast build tool for development.
- **JSON Server**: Mock server for serving data.

## Features

### Common View

- Header with a logo on the left and a navigation menu on the right.
- The main content area displays information about episodes or characters.
- A footer at the bottom of the page.

### Episode Page

#### Sorting

- Implement a dropdown menu for sorting options by release date, episode number, and episode name.
- Sorting updates the film list based on the selected option.

#### Episode List

- Displays a list of Star Wars movies.
- Populated from the provided data source.
- Clickable film names lead to detailed film descriptions.
- The film list updates dynamically when the sorting option changes.

#### Detailed Film Description

- Separate page for displaying detailed film descriptions.
- Breadcrumb for returning to the list of movies.
- Includes relevant information about the film as indicated by the layout.

### Character Page

#### Character List

- Displays a list of Star Wars characters.
- Populated from the provided data source.
- Clickable character names lead to detailed character descriptions.
- Pagination for displaying five items per page.

#### Detailed Character Description

- Separate page for displaying detailed character descriptions.
- Breadcrumb for returning to the list of characters.
- Includes relevant information about the character as indicated by the layout.

## Usage

To run the project locally, follow the "Getting Started" instructions below.

## Getting Started

1. Clone this repository to your local machine.

   ```
   git clone https://github.com/your-username/star-wars-web-app.git


### Navigate to the project directory.

  ```
  cd star-wars-web-app
  ```


### Install project dependencies.
  ```
   yarn install
  ```


### Start the development server.
  ```
  yarn run dev
  ```

### Start the JSON server to provide data.
  ```
  yarn run devServer
  ```

#### Open your web browser and access the app at **http://localhost:3000**.
