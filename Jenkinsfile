pipeline {
    agent any 
    environment {
    DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/mis2021/ACE-BOOK-PRODUCTION.git'
            }
        }

        stage('Build and Run docker Backend') {
            steps {  
	  sh 'docker-compose up -d'
            

            }
        }
 	
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push intjborj/ace-book-api:latest'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
  }