pipeline{
    environment {
        registry = "jithset/node-sample"
        registryCredential = 'docker-hub'
        containerName = 'node-web'
    }

    agent{
        label "label1"
    }
    stages{
        stage("Starting Container"){
            steps{
                echo "========executing A========"
                sh """
                    docker stop $containerName && docker rm $containerName;
                    docker run -p 3000:3000 -d --name $containerName $registry:latest
                """
            }
        }
    }
}