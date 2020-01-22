#!groovy

node('master') {
  stage('Setup Environment') {
    ENVIRONMENT_NAME = 'dev'
    AWS_REGION = 'us-east-1'
    APPLICATION_CONTEXT = 'plantmate'
  }
}

pipeline {
  agent { label "AWS-PLANTMATE-DEV && REGION-us-east-1 && docker && linux && terraform" }

  environment {
    AWS_DEFAULT_REGION="${AWS_REGION}"
    ECR_HOST =
  }

  stages {

  }
}