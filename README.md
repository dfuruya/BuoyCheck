# Mega Buoy Checker 5000

A demo application that fetches RSS feeds of buoy stations within 100 nautical miles of lat=40N and long=73W. You can also store all of your favorite stations by clicking on them!

![BuoyCheck preview](http://i.imgur.com/dpjU4jL.gif)

## Table of Contents

1. [Requirements](#requirements)
2. [Setup](#setup)
3. [Usage](#usage)
4. [Notices](#notices)

## Requirements

- Node 5.9.x
- MongoDB 3.2.x

## Setup

> Initial setup

- Fork and clone down the repo, then use Terminal/iTerm/etc to cd into the root directory
- Install dependencies by typing:

  ```sh
  npm install
  ```

> Database initialization/setup

- In Terminal, start Mongo DB server by typing:

  ```sh
  mongod
  ```

- Open another Terminal tab by pressing `CMD+T`, and cd into the root directory of the application

- Seed the database (empty Favorites table) by typing:

  ```sh
  npm run seed
  ```

## Usage

- To bootstrap the application, point to the root directory in Terminal and type:

  ```sh
  npm start
  ```

- Point your browser to localhost (in dev mode) and the PORT shown.

## notices

> The two most current branches are `master` and `styling`. The current bundled file for the `master` branch should load normally, but if you are having trouble loading the application with the `styling` branch, cd into the root directory and type `npm run watch` to re-bundle. Once bundling is complete, you can hit `Ctrl+C` to stop the watcher from re-bundling if there are any saved code modifications.
