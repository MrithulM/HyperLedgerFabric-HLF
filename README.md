# Hyperledger Fabric
> Efficient blockchain solution for buisnesses

  Hyperledger Fabric is a blockchain platform designed specifically for enterprise-level application within buisnesses. Its modular architecture provides the stability    and confidentiality necessary to build a network of multiple organisations with shared data. One of the most notable features of the fabric is its ability to write smart contracts or chaincode in various programming languages like Go, Java, and Node.js (Here Node.js). This flexibility allows easier integration with a wider availability of language support. The platform is open-sourced and also offers comprehensive documentation, making it an accessible blockchain solution for developers and buisnesses.
  
  Additionally, Hyperledger provides robust identity management, allowing participants to control their data and access to the network. This permissioned architecture makes it a secure and efficient blockchain solution for enterprise-level applications.
  
  ## Prerequisites
  
  1. cURL
  2. Git
  3. Docker Desktop
  4. WSL2 (Windows Subsystem for Linux 2)
  5. NPM (Node Package Manager)
  
  ### Installation
   <h3>cURL</h3>
   Install the latest version of <a href="https://curl.se/download.html" target="blank">cURL</a> , if not already installed.
   
   ```console
   $ sudo apt-get install curl 
   ```
   
   <h3>Git</h3>
   Install the latest version of <a href="https://git-scm.com/downloads" target="blank">Git</a> , if not already installed.
   
   ```console
   $ sudo apt-get install git 
   ```
   
   <h3>Docker Desktop</h3>
   Install the latest version of <a href="https://docs.docker.com/get-docker/" target="blank">Docker Desktop</a> , if it is not already installed.
   
   <h3>WSL2 (Windows Subsytem for Linux 2)</h3>
   Install a Linux distribution such as Ubuntu-20.04 and make sure it’s set to using version 2 of WSL. Refer to <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="blank">Install WSL</a> for more information.<br/><br/>
   
   >
   >**_NOTE 📝_**
   ><h4> Challenges faced during installation </h4>
   >
   > * WSL has to be of version 2 instead of version 1 to support Docker desktop integration. Hence, if the system has WSL1 installed it has to be upgraded to WSL2. To upgrade, the upgrade the user needs to download the latest WSL 2 kernel update package and enable it through PowerShell or CMD.
   > ```$ wsl --set-version <distro-name> 2``` replacing <distro name> with the name of the Linux distribution that you want to update. For example, wsl --set-version Ubuntu-20.04 2 will set your Ubuntu 20.04 distribution to use WSL 2.
   
    
   
  
  
  
  
  
