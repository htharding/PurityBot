# PurificationBot | Making Reddit a Better Place, One Comment at a Time!

This is a reddit bot that I built which processes over 45,000 comments per hour. It easily receives reddit comments, and replies with text saying various phrases that essentially say REPENT!, linking to a picture of a priest holding out a cross. I'm having a lot of fun with this project, and will continue to update it in the future.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.JS, NPM, Dotenv, Snoostorm, Snoowrap (Instructions below to install these)!
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
1. You must create a reddit application, noting the app ID and the secret phrase.
2. You must install Node.JS with NPM, both come from one installation here: https://nodejs.org/en/
3. Open the cmd in a new directory, and create a nodeJS package by typing npm init. Press enter/yes while going through the prompts.
4. Do npm i -S dotenv and npm i -S snoostorm snoowrap to install our dependencies.
5. In the root project folder, create a filed called ".env." on PC or ".env" on other OS to create an environment variable file.
6. Paste the following in this file, replacing the values with your personal ones:
	CLIENT_ID=ASDFBASDF
	CLIENT_SECRET=ASDFASDF
	CLIENT_USER=ASDFASDF
	CLIENT_PASS=ASDFASDF
7. Now, open CMD in the base directory of the project, and type node app to start the bot.
8. Edit to your needs!
```


## Built With

* [Node.js](https://nodejs.org/en/) - Backend server
* [Dotenv](https://github.com/motdotla/dotenv) - Storing environment variables safely
* [Snoowrap](https://github.com/not-an-aardvark/snoowrap) - Used to wrap snoostorm
* [Snoostorm](https://github.com/MayorMonty/Snoostorm) - Used to bring in reddit comments

## Contributing

Please feel free to submit a pull requests to me.


## Authors

* **Hunter Harding** - *Creator* - [My Portfolio](http://www.hunterharding.com)


## Acknowledgments

* Thank you to https://blog.syntonic.io for the help getting it started!