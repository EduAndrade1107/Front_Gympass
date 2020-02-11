pipeline{
    agent {
        docker {image "eduqa/node-wd"}
    }
    stages {
        stage('Build') {
            steps{
                sh "npm install"
            }
        }
        stage('Tests') {
            steps {
                sh "npm test"
            }
        }
    }
}