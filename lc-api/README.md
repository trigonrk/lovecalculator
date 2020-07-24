## Stack

* Backend: [Node.js](http://nodejs.org/)

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.10.0)
* Install Gulp as global npm modules:

    ```
    npm install
    ```

### Run Server


    ```
    npm run start
    ```

### Folders structure

At the top level, the repository is split into a client, server, dist and e2e folder.
* `node_modules` contains build tasks for Grunt along with other, user-installed, Node packages
* `server` contains a very basic Express based webserver that delivers and supports the application

### Testing API

curl -i -X POST -H "Content-Type:application/json" http://localhost:5000/api/v1/match -d '{"male":{"birth":"06/12/1982","location":"Melbourne","latitude":-37.8511,"longitude":144.9932,"timezone":11},"female":{"birth":"03/07/1987","location":"Los Angeles","latitude":34.0453,"longitude":-118.2413,"timezone":-8}}'