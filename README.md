# Random Image API using Node.js and Express.js

## Description

This project is a simple REST API built with Node.js and Express.js that returns a random image on a GET request to `/api/image/random`.

## How It Works

- Server is created using Express.
- When a GET request is made, it returns a URL to a random image from [Picsum Photos](https://picsum.photos/).
- The random image is generated by appending a random query parameter.

## Technologies Used

- Node.js
- Express.js
- Axios
- Picsum API

## How to Run

```bash
npm install
node index.js
