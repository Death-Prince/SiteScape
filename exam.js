// exam.js
var siteData = [
    {
        content: `
CREATE TO USERS ADMIN AND CLIENT ADJUST NETWORKS ADAPTER 1 TO NAT AND ADAPTER 2 TO HOST-ONLY ADAPTER
ADJUST THE ETHERNET BOTH ADMIN AND CLIENT IN ADAPTER 2 
 
ADMIN
 - Choose IPV4
 - Manual
 - IPv4 Address: 192.168.3.10
 - Subnet Mask: 255.255.255.0
 - Default Gateway: 192.168.3.1
CLIENT
 - Choose IPV4
 - Manual
 - IPv4 Address: 192.168.3.20
 - Subnet Mask: 255.255.255.0
 - Default Gateway: 192.168.3.1

PING ADMIN FROM CLIENT
ping 192.168.3.10
PING CLIENT FROM ADMIN
ping 192.168.3.20

ADMIN
sudo groupadd --gid 1001 "WebDev Team"
sudo useradd --uid 1500 --gid 1001 --create-home devuser
sudo usermod -aG "WebDev Team" devuser
sudo usermod -aG "WebDev Team" $(whoami)
getent group "WebDev Team"

CLEINT
sudo groupadd --gid 1001 "WebDev Team"
sudo useradd --uid 1500 --gid 1001 --create-home devuser
sudo usermod -aG "WebDev Team" devuser
sudo usermod -aG "WebDev Team" $(whoami)
getent group "WebDev Team"



`}
];

