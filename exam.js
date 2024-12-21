// exam.js
var siteData = [
    {
        content: `
CREATE TO USERS SERVER AND CLIENT ADJUST NETWORKS ADAPTER 1 TO NAT AND ADAPTER 2 TO HOST-ONLY ADAPTER
ADJUST THE ETHERNET BOTH SERVER AND CLIENT IN ADAPTER 2 
 
SERVER
 - Choose IPV4
 - Manual
 - IPv4 Address: 192.168.3.10
 - Subnet Mask: 255.255.255.0
 - Default Gateway: 192.168.3.1
CLIENT
 - Choose IPV4
 - Manual
 - IPv4 Address: 192.168.3.11
 - Subnet Mask: 255.255.255.0
 - Default Gateway: 192.168.3.1

PING SERVER FROM CLIENT
ping 192.168.3.10
PING CLIENT FROM SERVER
ping 192.168.3.11

Task 2: Group/User Creation (Manual UID/GID Alignment)
- SERVER
sudo su
sudo groupadd --gid 1001 WebDev_Team
sudo useradd --uid 1500 --gid 1001 --create-home llenard 

sudo usermod -aG WebDev_Team $(whoami)
sudo usermod -aG WebDev_Team devuser

getent group WebDev_Team

- CLEINT
sudo su
sudo groupadd --gid 1001 WebDev_Team
sudo useradd --uid 1500 --gid 1001 --create-home llenard 

sudo usermod -aG WebDev_Team $(whoami)
sudo usermod -aG WebDev_Team devuser

getent group WebDev_Team

Task 3: Networking
For both the NFS Server and Client, set up network configurations as follows:

Virtual Host Machine 1 (NFS Server):
Adapter 1: NAT
Adapter 2: Host-only (IP Address: 192.168.3.10)
Virtual Host Machine 2 (NFS Client):
Adapter 1: NAT
Adapter 2: Host-only (IP Address: 192.168.3.11)

ping 192.168.3.10    # From the client machine
ping 192.168.3.11    # From the server machine

Task 4: NFS & User Administration
- SERVER
1. Install NFS Server
sudo apt update
sudo apt install nfs-kernel-server -y

2. Create and setup a share directory (directory to be exported) in the Ubuntu server's home directory named share_<your initial>. Example: share_IPB
mkdir ~/share_JLPN

3. Inside the directory to be exported, create one text file named Email_to_<your firstname and lastname>. Example: Email_to_IanBenitez.txt
sudo touch ~/share_JLPN/Email_to_JohnLlenardNagal.txt
ls -l

4. Using chgrp command, change the group's ownership of the directory "share_<your initial>" as well as its file to the group "WebDev Team"
sudo chgrp -R WebDev_Team ~/share_JLPN
sudo chgrp WebDev_Team ~/share_JLPN/Email_to_JohnLlenardNagal.txt

5. Using chown command, change the ownership of the file inside the directory "share_<your initial>" to your default account (regular user)
sudo chown llenard:WebDev_Team ~/share_JLPN/Email_to_JohnLlenardNagal.txt

6. Set a read, write, & execute (full access) privilege on the shared directory to all users.
sudo chmod -R 770 ~/share_JLPN 

7. Change the attribute (permission) of the file inside the shared directory named "share_<your initial>" so the owner of the file has full access, the group has read only access, while others have no access to the file. Use the Numeric (binary) mode in changing the file's attribute.
sudo chmod 740 ~/share_JLPN/Email_to_JohnLlenardNagal.txt

8. Export the shared directory by editing /etc/exports:
echo "~/share_JLPN 192.168.3.11(rw,sync,no_subtree_check)" | sudo tee -a /etc/exports

9. Apply the export configuration:
sudo exportfs -a
sudo systemctl restart nfs-kernel-server

- CLEINT
sudo apt update
sudo apt install nfs-common -y


1. Create a directory named "clientresource_holder" in your home directory (your mount point).
mkdir ~/clientresource_holder

2. Mount the NFS server's exported directory to the directory you've just created in Step 3.
sudo mount 192.168.3.10:~/share_JLPN ~/clientresource_holder

3. Switch account to the user who is a member of the group WebDev Team.
su - llenard

4. Edit the file inside the clientresource_holder by typing "NFS is fun!". The system should not allow it due to read-only mode for the group.
nano ~/clientresource_holder/Email_to_JohnLlenardNagal.txt

5. Now, switch to the file's owner edit the file by typing "NFS is fun!". The system should allow it due to full-access mode for the file's owner.
su - llenard
nano ~/clientresource_holder/Email_to_JohnLlenardNagal.txt


6. Use the command cat "filename" to view the content of the file.
cat ~/clientresource_holder/Email_to_JohnLlenardNagal.txt










`}
];

