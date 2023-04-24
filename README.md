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
   > * **WSL has to be of version 2 instead of version 1** to support Docker desktop integration. Hence, if the system has WSL1 installed it has to be upgraded to WSL2. To upgrade, the upgrade the user needs to download the latest WSL 2 kernel update package and enable it through PowerShell or CMD.
   > ```$ wsl --set-version <distro-name> 2``` replacing <distro name> with the name of the Linux distribution that you want to update. For example, wsl --set-version Ubuntu-20.04 2 will set your Ubuntu 20.04 distribution to use WSL 2.
   > * ** The LAN Network or the Wifi network that has security rules enabled wouldn't support the installation, as it blocks the links that are necessary to install the required packages (Eg: NodeJS)
   > * **Virtualization has to be enabled** in the BIOS to make WSL 2 work: WSL 2 requires hardware virtualization to work correctly. If the system has hardware virtualization disabled in the BIOS, WSL2 will not function correctly and **Docker Desktop will not run. The user must: 
   >   * Reboot the computer.
   >   * Tap F10 or Esc during Loadup to enter BIOS.
   >   * Search for configuration items related to CPU.
   >   * Enable virtualization; the setting may be called VT-x, AMD-V, SVM, or Vanderpool.
   > * **Hyper-V has to be enabled** to make Docker Desktop to work with WSL2 integration : Docker Destop for Windows relies on Hyper-V, Microsoft's Virtualization technology, to run containers. If Hyper-V is not enabled, Docker Desktop will not start. To enable Hyper-V, the user has to:
   >   * Search for "Windows Features" in the start menu.
   >   * Select "Turn Windows Features on or off" and turn it on.
   >   * Reboot the system.
   <div id="install">
     
   ## Setting up the test network
     
   </div>
   <h3> 1) Install the fabric samples, docker images and binaries </h3>
  
   
   * Prepare a working directory - for example, **```$HOME/src/scripts```** directory to download the scripts and open the directory.
   > ```console
   >$ mkdir $HOME/src/scripts
   >$ cd $ HOME/src/scripts
   >```
   * Curl the install scripts and execute them with **chmod** command.
  
  >```console 
  >$ curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh 
  >```
   * Running the script to install necessary components.
  
  >```console
  >./install-fabric.sh docker samples binary
  >or
  >./install-fabric.sh d s b
  >```<br/>
  * **`docker (d)`**: to use Docker to download the Fabric Container Images<br/>
  * **`binary (b)`**: to download the Fabric binaries<br/>
  * **`samples (s)`**: to clone the fabric-samples github repo to the current directory<br/>
  
  <div align=center>
    
  ![Screenshot (4)](https://user-images.githubusercontent.com/129254225/229087729-24e74bb4-ddf7-4c15-a09c-ab56838a3a69.png)
    
  </div>
  <br/>
  
  >**Tip**:
  > If docker throws an error saying "Image not found", Try updating the docker desktop to latest version.<br/>
  
  The above command initializes the fabric setup with all the necessary base that are required to work with. Start the test network to confirm whether the setup is properly installed.<br/><br/>
  
  The most important files that are required to run the peer and orderer nodes are '**bin**' and '**config**'. <br/><br/>
  <div align=center>
  
  ![Screenshot (13)](https://user-images.githubusercontent.com/129254225/230036745-d0783a90-4297-49ba-8120-8ae4cc8dbe71.png)
  
  </div>
  
  The bin folder contains the following important binary files:
  * configtxgen  
  * configtxlator  
  * cryptogen  
  <br/>
  
  **`configtxgen`** allows users/orderers to create and inspect channel configuration settings. 
  **`configrxlator`**  provides a true stateless REST API, to simplify configuration tasks in Hyperledger Fabric blockchain networks. 
  **`cryptogen`** provides the necessary certificates to work on a dev environment before deploying it on production. 
  
  <h3> 2) Run the test network </h3>
  
  The scripts that bring up the test network are present in the `test-network` directory of the `fabric-samples` repository. Now open the directory:
  
  ```console
  $ cd fabric-samples/test-network
  ```
  In the directory, find a script file named `network.sh` - this script file is used to spin up/terminate all the docker containers that are needed for the fabric netowork.
  
  ```console
  $ cd ./network.sh down
  ```
  This command removes any containers that are present or running from the previous runs.
  
  Now to start the test-network, Enter:
  
  ```console
  $ cd ./network.sh up
  ```
  This creates a Fabric-network that consists of two peer nodes, one ordering node
  
  ![Screenshot (5)](https://user-images.githubusercontent.com/129254225/229087740-2aa3d9cb-c514-4a61-85cb-cf64c0f9b285.png)
  
  In the above image, `peer0.org1.example.com` and `peer0.org2.example.com` are the two peer node containers and `orderer.example.com` is the orderer node container and `cli` is the command line that interacts with the fabric network and helps in chaincode deployment.
  
  <h3>Channels</h3> 
  
  **Channels** are a type of subnet that allows a private connection between two or more organizations that allows transactions to happen between them. Each transaction on the network requires authentication and authorization. This is done on a channel where each party is identified by a Membership Service Provider(MSP).
  When creating a new channel, confidential information is stored on the `channel ledger`, including the details about the polices, members, and the anchor peers.
  
  To create a new channel - Type 
  ```console
  ./network.sh createChannel -c {channel name}
  ```
  
  ![Screenshot (6)](https://user-images.githubusercontent.com/129254225/229087745-f7f21bb7-c1ca-4782-8592-0784154c5739.png)
  
  
  ## Working in MS Azure
  
   >
   >**_Constraints ⚠️_**
   ><h4> Challenges faced in windows</h4>
   >
   > * WSL couldn't reach the internet due to the firewall rules. Hence couldn't:
   >   * Update it's package files
   >   * Curl the setup files
   >   * Couldn't install the nodejs package
   > * Docker creates a seperate IP address in desktop. Hence, couldn't be identified as localhost 
   > * The server, network, and chaincode files are present in the WSL linux machine and editing and working with them will be hard without SSH.
   
   ### Using MS Azure VM's and configuring the network firewall rules
  
   * Spinning up two VM's - A Ubuntu VM to hold the chaincode and fabric network related files (Click <a href="#install">here</a> to view the installation steps) and a Windows VM to work with writing the WebApp frontend scripts.
  * Configure the port rules under the **`networking`** tab and open ports **` 3000 `** (for react) and port **` 8080 `** for the server
  
  ![Screenshot (17)(1)](https://user-images.githubusercontent.com/129254225/231134548-7272a368-b77f-4ca5-8882-aaf3fdfba24c.png)

  ![Screenshot (18)](https://user-images.githubusercontent.com/129254225/231133347-866d6314-7e9d-47c8-b8b5-dd8833ad450c.png)

  ![Screenshot (19)](https://user-images.githubusercontent.com/129254225/231136215-cd29edc4-162e-462b-804b-c6c1b92bf55e.png)
  <br/>
  * Initiate a remote desktop connection to the windows VM using the `Remote Desktop Connection` app in the local PC.
    * Enter the username, IP address and mention the port **`3389`**.
    * A RDP connection is usually established through the **`3389`** port, thereby check if 3389 inboud rule is already present in the VM under the `networking` tab.
    * Click the "Connect" button to initiate the connection.
    * You may see a security warning about the remote computer's identity. Click "Yes" to proceed.
    * Enter your credentials for the Azure VM, which should be the same as the credentials you used when setting up the VM.
    * Click "OK" to connect to the Azure VM.
   
  ![Screenshot (20)](https://user-images.githubusercontent.com/129254225/231447306-e81cb352-c8e4-488d-b99e-5e75ea38d520.png)

  ![Screenshot (21)](https://user-images.githubusercontent.com/129254225/231447335-31232ce8-860f-4177-8dbc-c359a9457220.png)

  ![Screenshot (22)](https://user-images.githubusercontent.com/129254225/231447350-d20ece51-80e8-4083-8b58-b5f54be8d0db.png)


  
  
  
  
  
  
  
  
  
   
    
   
  
  
  
  
  
