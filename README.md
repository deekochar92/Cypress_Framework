
# About the project

Automated tests for miro signup page.

## Built With
Javascript

Cypress

## Documentation

[Requirements](https://drive.google.com/file/d/1iEXIm_0R3X4lxNCD8uIGOqQK6P7_Dbrz/view?usp=share_link)

[Test Scenarios](https://docs.google.com/spreadsheets/d/1hxF3tjdUGIWNCBgN5ZIMFZqtXdyGrg6GvqEB3tBy6Do/edit?usp=sharing) 


## Project Structure

```
├───cypress
│   ├───downloads
│   ├───e2e
│   │   └───miro
│   │       ├───pages
│   │       └───tests
│   ├───fixtures
│   ├───reports
│   │   └───html
│   │       └───.jsons
│   ├───screenshots
│   │   └───sign-up.cy.js
│   ├───support
│   └───videos
├───node_modules
├───cypresss.config.js
├───Dockerfile
└───package.json
```
## Getting Started

### Prerequisites
NodeJS
### Installation
1. Clone the repo
```
git clone https://github.com/deekochar92/miro_assignment.git
```
2. Install NPM packages
```
$ npm install
```

## Running Tests

```
npm run test
```


## Docker Setup

The tests can also be executed in a docker container without having to install all the dependencies.

### Installing Docker

Download and install docker engine from this url : https://docs.docker.com/engine/install/

### Getting Docker Image
To run tests, you can build your own docker image from Dockerfile.

Building your own Docker image:
```
docker build -t <image_name>:<tag_name> .
```
Verify that the built image is available by running:
```
docker images 
```
To run tests, run the following command
```
docker run <imagename>:<tagname>
```
