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
        title: `TESTING
Verify Group Members:`,
        content: `
    getent group Finance
getent group Manpower
    `}


];

