pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            sh 'pwd'
          }
        }

        stage('test') {
          steps {
            sh 'ls'
          }
        }

      }
    }

    stage('production') {
      steps {
        sh '''npm run build
'''
      }
    }

  }
}