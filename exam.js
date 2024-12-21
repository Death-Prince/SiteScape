// exam.js
var siteData = [
    {
        content: `
CREATE TO USERS ADMIN AND USERS ADJUST NETWORKS ADAPTER 1 TO NAT AND ADAPTER 2 TO HOST-ONLY ADAPTER
ADJUST THE ETHERNET BOTH ADMIN AND USER IN ADAPTER 2 
 
ADMIN
 - Choose IPV4
 - Manual
 - IPv4 Address: 192.168.3.10
 - Subnet Mask: 255.255.255.0
 - Default Gateway: 192.168.3.1

TERMINAL
sudo nano /etc/netplan/00-installer-config.yaml

network:
  ethernets:
    enp0s8:
      dhcp4: no
      addresses: [192.168.3.10/24]  # Or [192.168.3.11/24] depending on the machine
  version: 2

  - CTRL 0
  - ENTER
  - CTRL X

sudo netplan apply
ip a


`}
];

