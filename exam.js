var siteData = [
    {
        title: ` CREATE TO USERS SERVER AND CLIENT ADJUST NETWORKS ADAPTER 1 TO NAT AND ADAPTER 2 TO HOST-ONLY ADAPTER ADJUST THE ETHERNET BOTH SERVER AND CLIENT IN ADAPTER 2 `,
        content: `
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
    `},
    {
        title: `Task 2: Group/User Creation (Manual UID/GID Alignment)`,
        content: `
- SERVER
sudo groupadd --gid 1001 WebDev_Team
sudo useradd --uid 1500 -m devuser

sudo usermod -aG WebDev_Team $(whoami)
sudo usermod -aG WebDev_Team devuser

getent group WebDev_Team

- CLEINT
sudo groupadd --gid 1001 WebDev_Team
sudo useradd --uid 1500 -m devuser

sudo usermod -aG WebDev_Team $(whoami)
sudo usermod -aG WebDev_Team devuser

getent group WebDev_Team
    `},
    {
        title: `Task 3: Networking For both the NFS Server and Client, set up network configurations as follows:
`,
        content: `
Virtual Host Machine 1 (NFS Server):
Adapter 1: NAT
Adapter 2: Host-only (IP Address: 192.168.3.10)
Virtual Host Machine 2 (NFS Client):
Adapter 1: NAT
Adapter 2: Host-only (IP Address: 192.168.3.11)

ping 192.168.3.10    # From the client machine
ping 192.168.3.11    # From the server machine
    `},
    {
        title: `Task 4: NFS & User Administration - SERVER`,
        content: ``
    },
    {
        title: `1. Install NFS Server`,
        content: `
sudo apt update
sudo apt install nfs-kernel-server -y
    `},
    {
        title: `2. Create and setup a share directory (directory to be exported) in the Ubuntu server's home directory named share_<your initial>. Example: share_IPB`,
        content: `
    mkdir ~/share_JLPN
    `},
    {
        title: `3. Inside the directory to be exported, create one text file named Email_to_<your firstname and lastname>. Example: Email_to_IanBenitez.txt`,
        content: `
    sudo touch ~/share_JLPN/Email_to_JohnLlenardNagal.txt
ls -l
    `},
    {
        title: `4. Using chgrp command, change the group's ownership of the directory "share_<your initial>" as well as its file to the group "WebDev Team"`,
        content: `
    sudo chgrp -R WebDev_Team ~/share_JLPN
sudo chgrp WebDev_Team ~/share_JLPN/Email_to_JohnLlenardNagal.txt
    `},
    {
        title: `5. Using chown command, change the ownership of the file inside the directory "share_<your initial>" to your default account (regular user)`,
        content: `
    sudo chown llenard ~/share_JLPN/Email_to_JohnLlenardNagal.txt
    `},
    {
        title: `6. Set a read, write, & execute (full access) privilege on the shared directory to all users.`,
        content: `
    sudo chmod 777 ~/share_JLPN
    `},
    {
        title: `7. Change the attribute (permission) of the file inside the shared directory named "share_<your initial>" so the owner of the file has full access, the group has read only access, while others have no access to the file. Use the Numeric (binary) mode in changing the file's attribute.`,
        content: `
    sudo chmod 740 ~/share_JLPN/Email_to_JohnLlenardNagal.txt
    `},
    {
        title: `8. Export the shared directory by editing /etc/exports:`,
        content: `
        sudo nano /etc/exports
   /home/llenard/share_JLPN 192.168.3.0/24(rw,sync,no_root_squash,no_subtree_check)
    `},
    {
        title: `9. Apply the export configuration:`,
        content: `
    sudo exportfs -a
sudo systemctl restart nfs-kernel-server
    `},
    {
        title: `Verify the Exports:`,
        content: `
    sudo exportfs -v
    `},
    {
        title: `Output:`,
        content: `
    /home/llenard/share_JLPN  192.168.3.0/24(rw,sync,no_root_squash,no_subtree_check)
    `},
    {
        title: `- CLEINT`,
        content: `
    sudo apt update
sudo apt install nfs-common -y
    `},
    {
        title: `1. Create a directory named "clientresource_holder" in your home directory (your mount point).`,
        content: `
mkdir ~/clientresource_holder
        `
    },
    {
        title: `2. Mount the NFS server's exported directory to the directory you've just created in Step 3.`,
        content: `
sudo mount 192.168.3.10:/home/llenard/share_JLPN ~/clientresource_holder
        `
    },
    {
        title: `Verify the mount by listing the contents of the mounted directory:`,
        content: `
ls ~/clientresource_holder
        `
    },
    {
        title: `3. Switch account to the user who is a member of the group WebDev Team.`,
        content: `
sudo su devuser
        `
    },
    {
        title: `4. Edit the file inside the clientresource_holder by typing "NFS is fun!". The system should not allow it due to read-only mode for the group.`,
        content: `
cd /home/llenard/clientresource_holder
nano Email_to_JohnLlenardNagal.txt
        `
    },
    {
        title: `5. Now, switch to the file's owner edit the file by typing "NFS is fun!". The system should allow it due to full-access mode for the file's owner.`,
        content: `
exit
su llenard

cd ~/clientresource_holder
nano Email_to_JohnLlenardNagal.txt
        `
    },
    {
        title: `6. Use the command cat "filename" to view the content of the file.`,
        content: `
cat Email_to_JohnLlenardNagal.txt
        `
    }
];

// ,
// {
//     title: `Title`,
//     content: `
// hello
// `}
