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
sudo useradd -G Finance fin_user1
sudo useradd -G Finance fin_user2
sudo useradd -G Finance fin_user3
sudo useradd -G Manpower man_user4
sudo useradd -G Manpower man_user5
sudo useradd -G Manpower man_user6

cat /etc/group



3.assigning users to group(s)
gpasswd -A fin_user1 Finance
apasswd -A man user4 Manpower


4.setting a user as group administrator
5.setting file and directory ownership
6.setting file and directory modes

`}
];
