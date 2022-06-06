pipeline {
    agent any 
    environment {
    DOCKERHUB_CREDENTIALS = credentials('jack-hub')
    }
    stages { 
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/mis2021/ACE-BOOK-PRODUCTION.git'
            }
        }

        stage('Build docker image') {
            steps {  
                sh 'docker build ./api -t jacksemis101/ace-book-api'
		   
            }
        }
 	 stage('Build run') {
            steps {  
                sh 'docker run -d -p "4000:4000" jacksemis101/ace-book-api'
		    
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push jacksemis101/ace-book-api:latest'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
}