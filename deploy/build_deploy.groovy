
node('master') {

}

pipeline {
    agent { docker { image 'node:10.17' } }

    stages
}