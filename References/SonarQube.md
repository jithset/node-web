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
  -Dsonar.login=squ_c8b8ef23fb3525c7de4ae5211079fd12435e389b
```

 sh "sonar-scanner -Dsonar.login=$sonar_login -Dsonar.host.url=http://52.190.40.168 -Dsonar.projectKey=sonarqube-test -Dsonar.sources=. -Dsonar.java.binaries=target/demo-1.0-SNAPSHOT.jar -X"   
     

sonar-scanner -Dsonar.projectKey=trademe_node_rds -Dsonar.branch.name=${env.BRANCH_NAME} -Dsonar.login=42da72506e9f28107cff53275b6354a42ff1edef -Dsonar.host.url=http://192.168.1.3:9000"
                    }


## Webhooks

Administration -> Configuration -> Webhooks

Name: jenkins
Url : http://localhost:8080/sonarqube-webhook/

Administration > General Settings > Security, setting “Enable local webhooks validation” to false.

## Add secret text

```
withCredentials([string(credentialsId: 'sonar-token', variable: 'sonartoken')]) {
                        sh """
                            sonar-scanner --version
                            sonar-scanner \
                                -Dsonar.projectKey=node-project \
                                -Dsonar.sources=. \
                                -Dsonar.host.url=http://localhost:9000 \
                                -Dsonar.login=$sonartoken
                            """
                    }
```