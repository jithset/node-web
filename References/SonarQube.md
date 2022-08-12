## Docker container

```
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

> default admin

## Jenkins Plugin

```
SonarQube Scanner 2.14
https://plugins.jenkins.io/sonar/
```

## Set Sonarqube

```
Manage Jenkins -> Configure System -> SonarQube servers
 
Environment variables Check

Name: node-sq
Url: http://localhost:9000
Credential : jenkins-sonar
 
```

## Sonarqube Admin 

Administration -> Security -> Users -> Tokens

jenkins : squ_c8b8ef23fb3525c7de4ae5211079fd12435e389b

squ_c8b8ef23fb3525c7de4ae5211079fd12435e389b

jenkins-sonar

## Running Sonar Scanning

```
sonar-scanner \
  -Dsonar.projectKey=node-project \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=sqp_69cbe979cf713b82918fa566aeb4ae9a8f89ec00
```