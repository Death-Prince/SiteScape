// textarea.js
var siteData = [
    {
        title: 'ENTERING TO ROOT FOLDER',
        content: `
sudo su
    `},
    {
        title: `1.creating groups`,
        content: `
    sudo groupadd Finance
sudo groupadd Manpower
    `},
    {
        title: `2. creating users`,
        content: `
    sudo useradd -m fin_user1
sudo useradd -m fin_user2
sudo useradd -m fin_user3
sudo useradd -m man_user4
sudo useradd -m man_user5
sudo useradd -m man_user6


cat /etc/group
    `},
    {
        title: `3. assigning users to group(s)`,
        content: `
    sudo gpasswd -a fin_user1 Finance
sudo gpasswd -a fin_user2 Finance
sudo gpasswd -a fin_user3 Finance

sudo gpasswd -a man_user4 Manpower
sudo gpasswd -a man_user5 Manpower
sudo gpasswd -a man_user6 Manpower

cat /etc/group

    `},
    {
        title: `4. setting a user as group administrator`,
        content: `
    mkdir /home/fin_user1
mkdir /home/fin_user1/innovation
sudo chown fin_user1:Finance /home/fin_user1/innovation
ls -l /home/fin_user1
    `},
    {
        title: `4.1. Creating file named Splash inside innovation directory. `,
        content: `
    sudo touch /home/fin_user1/innovation/splash
sudo chgrp -R Finance /home/fin_user1/innovation
ls -l /home/fin_user1/innovation
    `},
    {
        title: `4.2 setting a user as group administrator`,
        content: `
    mkdir /home/man_user4
mkdir /home/man_user4/innovation
sudo chown man_user4:Manpower /home/man_user4/innovation
ls -l /home/man_user4
    `},
    {
        title: `4.3. Creating file named Splash inside innovation directory. `,
        content: `
    sudo touch /home/man_user4/innovation/splash
sudo chgrp -R Manpower /home/man_user4/innovation
ls -l /home/man_user4/innovation
    `},
    {
        title: `5. setting file and directory ownership`,
        content: `
    sudo chown -R :Finance /home/fin_user1/innovation
sudo chown -R :Manpower /home/man_user4/innovation
    `},
    {
        title: `6.setting file and directory modes`,
        content: `
    sudo chmod -R 770 /home/fin_user1/innovation
sudo chmod -R 770 /home/man_user4/innovation
    `},
    {
        title: `Demonstration`,
        content: `
    `},
    {
        title: `1. Verify Group Membership`,
        content: `
    getent group Finance
getent group Manpower
    `},
    {
        title: `The output`,
        content: `
    Finance:x:1001:fin_user1,fin_user2,fin_user3
Manpower:x:1002:man_user4,man_user5,man_user6
    `}
    ,
    {
        title: `2. Verify Directory and File Creation`,
        content: `
    ls /home/fin_user1
ls /home/man_user4
    `},
    {
        title: `The output`,
        content: `
    /home/fin_user1/innovation
/home/man_user4/innovation
    `},
    {
        title: `Check if the splash file exists inside the innovation directories:`,
        content: `
    ls -l /home/fin_user1/innovation
ls -l /home/man_user4/innovation
    `},
    {
        title: `The output`,
        content: `
    -rw-r--r-- 1 fin_user1 Finance 0 Dec 21 12:34 splash
-rw-r--r-- 1 man_user4 Manpower 0 Dec 21 12:34 splash
    `},
    {
        title: `3. Verify Ownership of Files and Directories`,
        content: `
    ls -l /home/fin_user1/innovation
ls -l /home/fin_user1/innovation/splash

ls -l /home/man_user4/innovation
ls -l /home/man_user4/innovation/splash
    `},
    {
        title: `The output`,
        content: `
    drwxrwx--- 2 fin_user1 Finance 4096 Dec 21 12:34 innovation
-rw-r--r-- 1 fin_user1 Finance 0 Dec 21 12:34 splash

drwxrwx--- 2 man_user4 Manpower 4096 Dec 21 12:34 innovation
-rw-r--r-- 1 man_user4 Manpower 0 Dec 21 12:34 splash
    `},
    {
        title: `4. Verify Permissions`,
        content: `
    ls -ld /home/fin_user1/innovation
ls -ld /home/man_user4/innovation

ls -l /home/fin_user1/innovation/splash
ls -l /home/man_user4/innovation/splash
    `},
    {
        title: `The output`,
        content: `
    drwxrwx--- 2 fin_user1 Finance 4096 Dec 21 12:34 /home/fin_user1/innovation
drwxrwx--- 2 man_user4 Manpower 4096 Dec 21 12:34 /home/man_user4/innovation

-rw-r--r-- 1 fin_user1 Finance 0 Dec 21 12:34 /home/fin_user1/innovation/splash
-rw-r--r-- 1 man_user4 Manpower 0 Dec 21 12:34 /home/man_user4/innovation/splash
    `},
    {
        title: `5. Test Group Permissions`,
        content: `
    
    `},
    {
        title: `5.1 Switch to fin_user1 and try accessing the innovation directory and splash file:`,
        content: `
    sudo su - fin_user1
ls /home/fin_user1/innovation
cat /home/fin_user1/innovation/splash

    `},
    {
        title: `5.2 Switch to fin_user2 (or any other member of the Finance group) and test:`,
        content: `
    sudo su - fin_user2
ls /home/fin_user1/innovation
cat /home/fin_user1/innovation/splash
    `},
    {
        title: `5.3 Switch to a user who is not part of the Finance group (e.g., man_user4) and test:`,
        content: `
    sudo su - man_user4
ls /home/fin_user1/innovation
cat /home/fin_user1/innovation/splash
    `} ,
    {
        title: `5.4 Test for the Manpower group: Repeat the process`,
        content: `
    
    `}


];