# Donnie Thornberry Discord Bot

Plays Donnie Thornberry annoying sound when someone speaks, detects if they join channel, bot joins too ;)

This project won't be maintained, just for fun.

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

Additionally, you need `FFMPEG` installed on your system.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.0.0

    $ npm --version
    7.11.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/LegendNed/Donnie-Thornberry-bot.git
    $ cd Donnie-Thornberry-bot
    $ yarn install 
    or
    $ npm install

## Configure app

Open `config.json` then edit it with your settings. You will need:

- Input Discord Token
- Add users to ignore in the `bypass`, you can remove ones present in config

## Running the project

    $ node .
