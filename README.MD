# Social media of sorts

## Description

Just a bare bones mock up of a social network of sorts. Post,comments and users you can edit posts also. Uses some basic authetication and sessions to keep track of some things.


## Table Of Cotents

- [Description](#description)
- [Installation And Usage](#installation)
- [Hosting](#host)

## Installation
To get this up and runing simply download the repo. Extract and navigate your command prompt to the folder.Your then going to want to run `npm i`. This will download all the require node modules.
Next go into the `.env` file that was generated change the Database name, pasword and username.Then you are going to want to do `cd seeds` and run `node index`. This should populate the database with a few users, comments and posts so the functionality can be tested.
Then you can do `cd ..` and `node server`. Then run `node server` and connect at localhost:3001



## Example

If you would like to view this live. Github has this great utility called Gitpages where you can host stuff.
If you click [here](https://github.com/Hahkeye/techno-blog)