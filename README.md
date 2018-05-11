# Gretsch Guitars

#### A clone of http://www.gretschguitars.com that allows users view Gretsch guitars.

#### By _**Matt Miller**_

## Description

This webpage is a clone of the Gretsch guitars webpage as of May 11, 2018. It will allow users to view a list of Gretsch guitar models filtered by various attributes such as body style, newness, and artist affiliation.

## Setup/Installation Requirements

* View program by visiting: https://gretsch-guitars.firebaseapp.com/
* To modify program, clone repository from https://github.com/mattfmiller/gretsch-guitars
* Create a firebase database using the sample-guitars.json file located in the root directory.
* Using your firebase database credentials, create a file `/src/app/api-keys.ts` of the form:<br>
    export let masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
* Run `npm install` in project root directory in terminal.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* Run `ng test` to execute the unit tests via Karma.
* Run `ng e2e` to execute the end-to-end tests via Protractor.

#### Specifications

| Implemented Feature | Input | Output |
| --- | --- | --- |
| As a user I would like to view all Gretsch guitars | Input: Click "Gear" button on nav bar | Output: A list of all Gretsch guitars |
| As a user I would like to view all new Gretsch guitars | Input: click "Newest Models" button  | Output: A list of all new Gretsch guitars |
| As a user I would like to view all hollowbody Gretsch guitars | Input: click "The Big Body Soound" button  | Output: A list of all hollowbody Gretsch guitars |
| As a user I would like to view all artist model Gretsch guitars | Input: click "Artist Models" button  | Output: A list of all artist model Gretsch guitars |
| As a user I would like to link to the Gretsch Instagram page | Input: Click "Instagram" button | Output: Gretsch Guitars Instagram page opens in new window |
| As a user I would like to link to the Gretsch Facebook page | Input: Click "Facebook" button | Output: Gretsch Guitars Facebook page opens in new window |
| As a user I would like to link to the Gretsch YouTube page | Input: Click "YouTube" button | Output: Gretsch Guitars YouTube page opens in new window |
| As a user I would like to link to the Gretsch Artists page | Input: Click "Artists" button | Output: Gretsch Guitars Artists page opens in new window |
| As a user I would like to click on a guitar list item to view further details of the guitar | Input: Click guitar item in list | Output: The details page of the selected guitar is displayed |

| Planned Feature | Input | Output |
| --- | --- | --- |
| As a user I would like to be able to navigate to a guitar and then click on categories to view guitar specs | Input: Click "Body" tab | Output: Table displays guitar body specs such as material, finish, binding, etc... |
| As a user I would like to view news related to Gretsch guitars | Input: Click "News" button on nav bar | Output: A list of recent Gretsch news |
| As a user I would like to view information about the Gretsch Custom Shop | Input: Click "Custom Shop" button on nav bar | Output: Information about the Gretsch Custom Shop and a list of recent Gretsch Custom Shop guitars |
| As a user I would like to view Gretsch Guitar support article | Input: Click "Support" button on nav bar | Output: Information about the Gretsch Custom Shop and a list of recent Gretsch Guitars support articles |



#### Structure
src <br>
├ app <br>
│   ├ guitar-detail <br>
│   │   ├ guitar-detail.component.css <br>
│   │   ├ guitar-detail.component.html <br>
│   │   ├ guitar-detail.component.spec.ts <br>
│   │   ├ guitar-detail.component.ts <br>
│   ├ guitar-filter-list <br>
│   │   ├ guitar-filter-list.component.css <br>
│   │   ├ guitar-filter-list.component.html <br>
│   │   ├ guitar-filter-list.component.spec.ts <br>
│   │   ├ guitar-filter-list.component.ts <br>
│   ├ guitar-list <br>
│   │   ├ guitar-list.component.css <br>
│   │   ├ guitar-list.component.html <br>
│   │   ├ guitar-list.component.spec.ts <br>
│   │   ├ guitar-list.component.ts <br>
│   ├ guitar-list-artist <br>
│   │   ├ guitar-list-artist.component.css <br>
│   │   ├ guitar-list-artist.component.html <br>
│   │   ├ guitar-list-artist.component.spec.ts <br>
│   │   ├ guitar-list-artist.component.ts <br>
│   ├ guitar-list-hollow <br>
│   │   ├ guitar-list-hollow.component.css <br>
│   │   ├ guitar-list-hollow.component.html <br>
│   │   ├ guitar-list-hollow.component.spec.ts <br>
│   │   ├ guitar-list-hollow.component.ts <br>
│   ├ guitar-list-new <br>
│   │   ├ guitar-list-new.component.css <br>
│   │   ├ guitar-list-new.component.html <br>
│   │   ├ guitar-list-new.component.spec.ts <br>
│   │   ├ guitar-list-new.component.ts <br>
│   ├ models <br>
│   │   ├─guitar.model.ts <br>
│   │   ├ guitar-filter.model.ts <br>
│   │   ├ social-link.model.ts <br>
│   ├ social-link-list <br>
│   │   ├ social-link-list.component.css <br>
│   │   ├ social-link-list.component.html <br>
│   │   ├ social-link-list.component.spec.ts <br>
│   │   ├ social-link-list.component.ts <br>
│   ├ welcome <br>
│   │   ├ welcome.component.css <br>
│   │   ├ welcome.component.html <br>
│   │   ├ welcome.component.spec.ts <br>
│   │   ├ welcome.component.ts <br>
│   ├ app.component.css <br>
│   ├ app.component.html <br>
│   ├ app.component.spec.ts <br>
│   ├ app.component.ts <br>
│   └ app.module.ts <br>
│   └ app.routing.ts <br>
│   └ app.service.spec.ts <br>
│   └ app.service.ts <br>


## Known Bugs

* Guitars are missing some data such as price.
* Not all nav bar buttons route to related components.

## Support and contact details

For support, contact: matt.f.miller@live.com

## Technologies Used

* HTML
* CSS _(Bootstrap 4.1.1)_
* JavaScript _(jQuery 3.2.1)_
* Node.js
* npm
* Webpack
* ESLint
* Babel
* Jasmine
* Karma
* Angular CLI

### License

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2018 **Matt Miller**
