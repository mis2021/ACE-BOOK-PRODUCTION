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
	  sh 'docker-compose app-api up -d'

            }
        }

         stage('Build and Run docker Frontend') {
                    steps {
        	  sh 'docker-compose app-front up -d'

                    }
                }
 	
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push acemcbmis/ace-book-system:latest'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
  }