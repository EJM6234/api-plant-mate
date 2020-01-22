#!groovy

node('master') {
  stage('Setup Environment') {
    ENVIRONMENT_NAME = 'dev'
    AWS_REGION = 'us-east-1'
    APPLICATION_CONTEXT = 'plantmate'
  }
}

pipeline {
  agent { docker { image 'node:10.16' } }

  environment {
    AWS_DEFAULT_REGION="${AWS_REGION}"
  }

  stages {
    stage('Setting up environment') {
      steps {
        sh 'echo BUILDING'
      }
    }
  }
}