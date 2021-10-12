# Image Processing API
An API that can be utilized in two ways.
* The first is a basic placeholder API that allows you to quickly prototype by inserting photos into your frontend with the size defined by URL parameters (and other stylization if desired).
* The second application is as a library for serving properly scaled copies of your images to the front end in order to reduce page load time. Rather than having to resize and upload several copies of the same image for use across your site, the API you establish will do it for you.

## Getting Started

### Backend

#### Dependencies

* [Node JS](https://nodejs.org/en/download/)  

#### Installation

1. Clone or download this repository and change directory (cd) to this repository - [cd image-processor-api].
2. To install the dependencies run command ```npm install```.
3. To start the server run command ```npm run start```.
4. Open a browser and navigate to the url: [http://localhost:3000/api/images?name=palmtunnel&width=600&height=400]

## Testing

Once you have completed the above installation, you should also be able to run the included unit tests to verify basic functionality as you complete it. To run unit tests:

1. Run command ```npm run test```.
