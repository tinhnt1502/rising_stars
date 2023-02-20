pipeline {
    agent { 
        label 'docker'
        }
    stages {
        stage('clone') {
            steps {
                git branch: 'main', url: 'https://github.com/tinhnt1502/rising_stars.git'
            }
        }

         stage('build') {
            steps {
              // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/') {
                // some block

                sh 'docker build -t tinhnt1501/rising_stars: v1.0.0 .'

                sh 'docker push -t tinhnt1501/rising_stars: v1.0.0 .'
                }
            }
        }
    }
}