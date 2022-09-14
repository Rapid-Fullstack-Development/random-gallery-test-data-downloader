# Random gallery test data generator

This program generates random test data for the Photosphere application using the Unsplash API.

This code was created to support the book [Rapid Fullstack Development](https://rapidfullstackdevelopment.com/).

Follow on [Twitter](https://twitter.com/codecapers) for updates.

## Pre-reqs

You need [Node.js](https://nodejs.org/) installed to run this code.

## Unsplash setup

You must create an account on Unsplash and then create an "Application" through [the Unsplash developer portal](https://unsplash.com/oauth/applications).

After creating an Unsplash Application look up the access key for it and set it in an environment variable.

Under MacOS and Linux like this:

```bash
export UNSPLASH_ACCESS_KEY=<your access key>
```

Under Windows like this:

```bash
set UNSPLASH_ACCESS_KEY=<your access key>
```

## Setup

Clone this repo, change into the directory and install dependencies:

```bash
npm install
```

## Run the code

Run the code like this:

```bash
npm start
```

Test data (jpeg and json files) are downloaded to the `downloads` directory.



