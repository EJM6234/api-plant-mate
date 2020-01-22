#!groovy

pipeline {
  agent { docker { image 'ubuntu:latest' } }

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