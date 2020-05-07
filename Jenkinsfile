pipeline{
    agent {
        docker {
            image "eduqa/node-wd"
            args "--network=skynet"
        }
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
                junit testResults: "tests_output/*.xml"
            }
        }
        stage('Staging') {
            steps {
                sh "npm run test"
                junit testResults: "tests_output/*.xml"
            }
        }
    }
}