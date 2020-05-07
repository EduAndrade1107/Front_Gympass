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
                sh "npm run test:ci"
            }
        }
        stage('Staging') {
            steps {
                sh "npm run test:ci"
            }
        }
    }
}