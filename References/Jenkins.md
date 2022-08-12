## Dockerize

```properties
docker build . -t jithset/node-web:latest 
docker run -p 3000:3000 --name node-web jithset/node-web:latest
```

## Installation

## Jenkins 

> Reference [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-22-04)

```properties
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key |sudo gpg --dearmor -o /usr/share/keyrings/jenkins.gpg

sudo sh -c 'echo deb [signed-by=/usr/share/keyrings/jenkins.gpg] http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

sudo apt update

sudo apt install jenkins

sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

## Docker Plugin

```
docker-workflow

Declarative Pipeline
```

## Nodes Issue

```
Manage Jenkins -> Nodes

```