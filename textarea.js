// textarea.js
var siteData = [
    {
        content: `
ENTERING TO ROOT FOLDER
sudo su

1.creating groups
sudo groupadd Finance
sudo groupadd Manpower

2. creating users
sudo useradd fin_user1
sudo useradd fin_user2
sudo useradd fin_user3
sudo useradd man_user4
sudo useradd man_user5
sudo useradd man_user6

cat /etc/group

3.assigning users to group(s)
sudo gpasswd -a fin_user1 Finance
sudo gpasswd -a fin_user2 Finance
sudo gpasswd -a fin_user3 Finance

sudo gpasswd -a man_user4 Manpower
sudo gpasswd -a man_user5 Manpower
sudo gpasswd -a man_user6 Manpower

cat /etc/group

4.setting a user as group administrator
mkdir /home/fin_user1
mkdir /home/fin_user1/innovation
sudo chown fin_user1:Finance /home/fin_user1/innovation
ls -l /home/fin_user1

4.1. Creating file named Splash inside innovation directory. 
sudo touch /home/fin_user1/innovation/splash
sudo chgrp -R Finance /home/fin_user1/innovation
ls -l /home/fin_user1/innovation

4.2 setting a user as group administrator
mkdir /home/man_user4
mkdir /home/man_user4/innovation
sudo chown man_user4:Manpower /home/man_user4/innovation
ls -l /home/man_user4

4.3. Creating file named Splash inside innovation directory. 
sudo touch /home/man_user4/innovation/splash
sudo chgrp -R Manpower /home/man_user4/innovation
ls -l /home/man_user4/innovation

5.setting file and directory ownership
sudo chown -R :Finance /home/fin_user1/innovation
sudo chown -R :Manpower /home/man_user4/innovation

6.setting file and directory modes
sudo chmod -R 770 /home/fin_user1/innovation
sudo chmod -R 770 /home/man_user4/innovation


TESTING
Verify Group Members:
getent group Finance
getent group Manpower


removing if there is mistake made

sudo userdel -r fin_user1
sudo userdel -r fin_user2
sudo userdel -r fin_user3
sudo userdel -r man_user4
sudo userdel -r man_user5
sudo userdel -r man_user6

sudo groupdel Finance
sudo groupdel Manpower

`}
];

