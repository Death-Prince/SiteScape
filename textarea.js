// textarea.js
var siteData = [
    {
        content: `
sudo apt install nginx.service

sudo systemctl status nginx.service

sudo systemctl start nginx.service
sudo systemctl status nginx.service

sudo systemctl stop nginx.service
sudo systemctl status nginx.service

sudo systemctl restart nginx.service
sudo systemctl status nginx.service

sudo systemctl reload nginx.service
sudo systemctl status nginx.service

sudo systemctl enable nginx.service
sudo systemctl status nginx.service

sudo systemctl disable nginx.service

sudo systemctl list-dependencies nginx

sudo systemctl is-active nginx.service

sudo systemctl is-failed nginx.service

sudo systemctl is-enabled nginx.service

 TASK B

sudo systemctl list-units --type=service --all

sudo systemctl list-unit-files

sudo systemctl list-unit-files --type=service | grep enabled

sudo systemctl list-unit-files --type=service | grep static

sudo systemctl list-unit-files --type=service | grep disabled

sudo systemctl list-units --type=service --state=active

https://computingforgeeks.com/install-and-configure-zabbix-lts-on-ubuntu/

`}
];
