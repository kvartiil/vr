// NB! Add riajenk public key to the monstache Bitbucket repository!

cloudServerUrl = "devcenter.vmware.kit"
vmDomainName = "portaal-storybook.ci.kit" //naming schema project-component-instanceNr+NodeSymbol.domain ie project-component-1a.ci.kit
vmTemplate = "DEV-ubuntu-1804-amd64" //DEV-ubuntu-1604-amd64
vmFolder = 'dynamic' /*VM location in folder on cloud (folder is one of unit to organize items).
Available folders in VMware vSphere is: adit, aj, dvk, eid, riha, siva, tara, tera, xtee. Default folder is dynamic */
cpu = "2" // VM CPU cores number - 1,2,4,8. Max 8
memory = "2048" // VM RAM size in MB i.e 1024, 2048, 3072, 4096, Max 8192
vmSnapshotName = "FirstSnapshot"
// by default VM lease dynamic IP.
// DNS record for Static IP and host FQDN must be manually added before running first time pipeline
vmIP = ""
//staticIP = 10.0.24.X

//common functions
scp = "scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no"
ssh = "ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no"
salt = "sudo salt-call state.sls"

def vmGetIP(vmDomainName) {
    sh(script: "\$HOME/sdkperl/vmip.pl --server '$cloudServerUrl' --vmname '$vmDomainName'", returnStdout: true).trim()
}

def sendToVM(vmIP) {
    sh """
        set -x
        rsync -av  -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" . riajenk@${vmIP}:/opt/riajenk/
    """
}


pipeline {
    //agent { label 'slave-u1604-1' }
    agent any

    options {
        timestamps() // timestamps every log record in Jenkins console output
        buildDiscarder(logRotator(numToKeepStr: '10')) //delete old builds, Max # of builds to keep
    }

    stages {
        stage('Provisioning Deploy machine') {
            steps {
                // deploy new VM from template. Deletes VM if exist. Configure VM (mnion) to Salt Master
                sh "$HOME/sdkperl/vmclone_configure.pl --server '${cloudServerUrl}' " +
                        "--vmname '${vmDomainName}' " +
                        "--template '${vmTemplate}' " +
                        "--vmfolder '${vmFolder}' " +
                        "--cpucores '${cpu}' " +
                        "--memorymb '${memory}'"
                //"--vmstaticip ${staticIP}" // deploy with Static IP
            }
        }
/**
 stage('Test Salt') {steps {script {vmIP = vmGetIP (vmDomainName)
 ssh_salt_cmd = """
 set -x
 set -e
 $salt tomcat8 test=True saltenv=devops
 """}sh "$ssh riajenk@${vmIP} '$ssh_salt_cmd'"}}*/


        stage('Install storybook') {
            steps {
                script {
                    vmIP = vmGetIP(vmDomainName)
                    ssh_salt_cmd = """
set -x
set -e

# adding nodejs package source
sudo echo 'deb http://apt.tt.kit/ubuntu-nodesource_10 bionic main' | sudo tee -a /etc/apt/sources.list.d/nodesource_10.list

# adding packege gpg key from source repository
sudo wget -O -  http://apt.tt.kit/ubuntu/apt-gpg-keys/NODESOURCE-GPG-KEY.pub | sudo apt-key add -

# update repo source lists
sudo apt update

# Install node
sudo apt-get install nodejs -y
sudo npm i -g npx
sleep 10

# Make a directory for storybook and install it there.
sudo mkdir -p /opt/storybook
cd /opt/storybook
sudo npx -p @storybook/cli sb init --type html
cd /opt/storybook
sudo npm install
sleep 3


"""
                }
                sh "$ssh riajenk@${vmIP} '$ssh_salt_cmd'"
            }
        }

        stage('Install addons') {
            steps {

                script {
                    vmIP = vmGetIP(vmDomainName)
                    ssh_salt_cmd = """
set -x
set -e

# installing Storybook addons
cd /opt/storybook
sudo npm add -D @storybook/addons @storybook/addon-actions @storybook/addon-notes @storybook/addon-storysource @storybook/addon-a11y
sleep 3
"""
                }
                sh "$ssh riajenk@${vmIP} '$ssh_salt_cmd'"
            }
        }


        stage('Configure storybook') {
            steps {
                dir('.storybook') {
                    writeFile file: 'addons.js',
                            text: 'import \'@storybook/addon-actions/register\';\n' +
                                    'import \'@storybook/addon-notes/register\';\n' +
                                    'import \'@storybook/addon-storysource/register\';\n' +
                                    'import \'@storybook/addon-a11y/register\';'
                }
                dir('.storybook') {
                    writeFile file: 'config.js',
                            text: 'import { configure, addDecorator } from \'@storybook/html\';\n' +
                                    '\n' +
                                    'import { withA11y } from \'@storybook/addon-a11y\';\n' +
                                    'addDecorator(withA11y)\n' +
                                    '\n' +
                                    '// automatically import all files ending in *.stories.js\n' +
                                    'const req = require.context(\'../stories\', true, /\\.stories\\.js$/);\n' +
                                    'function loadStories() {\n' +
                                    '  req.keys().forEach(filename => req(filename));\n' +
                                    '}\n' +
                                    '\n' +
                                    'configure(loadStories, module);'
                }
                dir('.storybook') {
                    writeFile file: 'webpack.config.js',
                            text: 'module.exports = async ({ config }) => console.dir(config.plugins, { depth: null }) || config;\n' +
                                    ' \n' +
                                    'const path = require("path");\n' +
                                    ' \n' +
                                    'module.exports = {\n' +
                                    'module: {\n' +
                                    'rules: [\n' +
                                    '{\n' +
                                    'test: /.stories.jsx?$/,\n' +
                                    'loaders: [require.resolve("@storybook/addon-storysource/loader")],\n' +
                                    'test: path.resolve(__dirname, "../stories"),\n' +
                                    'enforce: "pre"\n' +
                                    '}\n' +
                                    ']\n' +
                                    '}\n' +
                                    '};'
                }
                writeFile file: 'startUp.sh',
                        text: '#!/bin/sh\n' +
                                'nohup sudo  npm run storybook > /dev/null 2>&1 &\n'

                script {
                    vmIP = vmGetIP(vmDomainName)
                    sendToVM(vmIP)
                    ssh_salt_cmd = """
              cd /opt/storybook/.storybook
              sudo cp ../../riajenk/.storybook/* .
              sudo cp ../../riajenk/startUp.sh ../
              sudo chmod +x ../startUp.sh
              echo '@reboot riajenk /opt/storybook/startUp.sh' | sudo tee -a /etc/cron.d/storybook
              sudo update-rc.d cron defaults
              sleep 3
              """
                }

                sh "$ssh riajenk@${vmIP} '$ssh_salt_cmd'"

            }

        }


        stage('Run storybook') {
            steps {
                script {
                    vmIP = vmGetIP(vmDomainName)
                    ssh_salt_cmd = """#!/bin/bash
set -x
set -e

# starting Storybook
cd /opt/storybook
nohup sudo  npm run storybook > /dev/null 2>&1 &

"""
                }
                sh "$ssh riajenk@${vmIP} '$ssh_salt_cmd'"
            }
        }


/**
 stage('Take Snapshot') {steps {script {sh "\$HOME/sdkperl/vmsnapshot.pl --server '$cloudServerUrl' " +
 "--operation 'create' " +
 "--vmname '${vmDomainName}' " +
 "--snapshotname '${vmSnapshotName}' " +
 "--shutdown 'true' --poweron 'true'"}}}stage('Revert from Snapshot') {steps {script {sh "\$HOME/sdkperl/vmsnapshot.pl --server '$cloudServerUrl' " +
 "--operation 'goto' " +
 "--vmname '${vmDomainName}' " +
 "--snapshotname '${vmSnapshotName}' " +
 "--poweron 'true'"}}}stage('Destroy VM') {steps {script {sh "\$HOME/sdkperl/vmdelete_salt.pl --server '$cloudServerUrl' " +
 "--vmname '${vmDomainName}'"}}}*/

    }
    post {
        always {
            cleanWs()
        }
    }
}
