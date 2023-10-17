
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">DahaClown (ReactJS Shop)</h3>

  <p align="center">
    <br />
    <a href="https://github.com/haotamht/web-prj.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/haotamht/web-prj.git">View Demo</a>
    ·
    <a href="https://github.com/haotamht/web-prj/issues">Report Bug</a>
    ·
    <a href="https://github.com/haotamht/web-prj/issues">Request Feature</a>
  </p>
</div>

![Uploading image.png…]()


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


To create a Restful API for the DahaClown website, I created this API using Nodejs, ExpressJs, and more.
Using JWT to Authentication.

Send OTP by email to forget the password. Redis helps to cache OTP and not send more than 5 times within 5 minutes.

Use a queue to process purchase orders to avoid buying when there is only 1 product left that many people buy. In the future will move to microservices and use Kafka.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Frameworks/libraries used to bootstrap this project:

* [![react](./src/react.svg)](https://badges.aleen42.com/src/react.svg) A badge used for repositories that using [React](https://github.com/facebook/react)
* [![javascript](./src/javascript.svg)](https://badges.aleen42.com/src/javascript.svg) A badge used for projects that coded with JavaScript
* [![tailwindcss](./src/tailwindcss.svg)](https://badges.aleen42.com/src/tailwindcss.svg) A badge used for projects using [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
* [![redux](./src/redux.svg)](https://badges.aleen42.com/src/redux.svg) A badge used for projects using React Redux
* [![visual_studio_code](./src/visual_studio_code.svg)](https://badges.aleen42.com/src/visual_studio_code.svg) A badge for the Visual Studio Code IDE
* [![github](./src/github.svg)](https://badges.aleen42.com/src/github.svg) A badge used for GitHub repositories
* [![eslint](./src/eslint.svg)](https://badges.aleen42.com/src/eslint.svg) A badge used for projects using ESLint
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app._

1. Clone the repo
   ```sh
   git clone https://github.com/haotamht/ShopApi.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run project
   ``` 
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

-  Run the project and edit as desired : 
EXAMPLES Image : If use run in localhost
           
            ![image](https://github.com/haotamht/web-prj/assets/62649837/7d9c8fe2-8dec-4879-b7e9-4d75e79628bb)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Create React App
- [x] Add necessary libraries and update code to git
- [x] Define routes and create some pages
- [x] Add redux-toolkit
- [ ] Convert to NextJs

See the [open issues](https://github.com/haotamht/web-prj/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Đăng Hào - [Đăng Hào](fb.com/haotamht) - danghao1209@gmail.com

Project Link: (https://github.com/haotamht/web-prj)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/haotamht/ShopApi.git
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/haotamht/ShopApi/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/h%C3%A0o-%C4%91%C4%83ng-7a5249203/
[Nodejs]: https://img.shields.io/badge/Nodejs-000000?style=for-the-badge&logo=Nodejs&logoColor=white
[Nodejs-url]: https://nodejs.org/
[Cloudinary]: https://img.shields.io/badge/Cloudinary-000000?style=for-the-badge&logo=Cloudinary&logoColor=white
[Cloudinary-url]: https://cloudinary.com/
[Mongooes]: https://img.shields.io/badge/Mongooes-000000?style=for-the-badge&logo=Mongooes&logoColor=white
[Mongooes-url]: https://mongoosejs.com/
[Redis]: https://img.shields.io/badge/Redis-DD0031?style=for-the-badge&logo=Redis&logoColor=white
[Redis-url]: https://redis.io/
[ExpressJs]: https://img.shields.io/badge/ExpressJs-000000?style=for-the-badge&logo=ExpressJs&logoColor=FF3E00
[ExpressJs-url]: https://expressjs.com/
