# GretschGuitars

#### A clone of http://www.gretschguitars.com that allows users view Gretsch guitars and related news and information.

#### By _**Matt Miller**_

## Description

This webpage is a clone of the Gretsch guitars webpage as of May 4, 2018. It will allow users to view a list of Gretsch guitar models filtered by various attributes such as body style, newness, and artist affiliation. I will also display news and custom shop information.

## Setup/Installation Requirements

* View program by cloning repository from https://github.com/mattfmiller/doctor-lookup
* Run `npm install` in project root directory in terminal.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* Run `ng test` to execute the unit tests via [Karma].
* Run `ng e2e` to execute the end-to-end tests via [Protractor].

#### Specifications

| Specification | Input | Output |
| --- | --- | --- |
| As a user I would like to view all Gretsch guitars | Input: Click "Gear" button  | Output: A list of all Gretsch guitars |
| As a user I would like to view new Gretsch guitars | Input: click "Newest Models" button  | Output: A list of all new guitars |
| As a user I would like to access the Gretsch Instagram page | Input: Click "Instagram" button | Output: linked to Gretsch Guitars Instagram |
| As a user I would like to view news related to Gretsch guitars | Input: Click "News" button  | Output: A list of recent news related to Gretsch |

#### Structure
src
├── app
│   ├── guitar-list
│   │   ├── guitar-list.component.css
│   │   ├── guitar-list.component.html
│   │   ├── guitar-list.component.spec.ts
│   │   ├── guitar-list.component.ts
│   ├── guitar-filter-list
│   │   ├── guitar-filter-list.component.css
│   │   ├── guitar-filter-list.component.html
│   │   ├── guitar-filter-list.component.spec.ts
│   │   ├── guitar-filter-list.component.ts
│   ├── models
│   │   ├── guitar.model.ts
│   │   ├── guitar-filter.model.ts
│   │   ├── news.model.ts
│   │   ├── social-link.model.ts
│   ├── news-list
│   │   ├── news-list.component.css
│   │   ├── news-list.component.html
│   │   ├── news-list.component.spec.ts
│   │   ├── news-list.component.ts
│   ├── social-link-list
│   │   ├── social-link-list.component.css
│   │   ├── social-link-list.component.html
│   │   ├── social-link-list.component.spec.ts
│   │   ├── social-link-list.component.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts


## Known Bugs

N/A

## Support and contact details

For support, contact: matt.f.miller@live.com

## Technologies Used

* HTML
* CSS _(Bootstrap 4.1)_
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
