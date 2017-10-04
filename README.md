# Picam Server

Just another Node.js server in order to see and control your Raspberry Pi and it's camera module Edit
raspberry-pi-camera

## Video:

Video of the first version in action:

[![Proof os concept video](https://img.youtube.com/vi/1611GJCQz8k/0.jpg)](https://www.youtube.com/watch?v=1611GJCQz8k)

## Makes use of: 

- Nodejs
- socket.io
- expressjs
- pug
- raspberry pi
- raspberry pi camera module

## Installation:

### Clone the repository

```shell
git clone https://github.com/JordiAnderl/picam-server.git
```
You will need git for this step.

### Change into the directory

```shell
cd picam-server
```

### Install dependencies

```shell
npm install
```

You will need nodejs for this step.

### Run the server

```shell
npm start
```

Now just point your browser of choice to your raspberry's ip (or localhost) at port 3000. 

```shell
http://localhost:3000
```

You will be greeted by the index page. Hit connect to see a live preview of what the raspberry is capturing.