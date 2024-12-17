// textarea.js
var siteData = [
    {
        content: `
sudo apt install nginx

sudo systemctl status nginx

sudo systemctl start nginx

sudo systemctl stop nginx

sudo systemctl restart nginx

sudo systemctl reload nginx

sudo systemctl enable nginx

sudo systemctl disable nginx

sudo systemctl list-dependencies nginx

sudo systemctl is-active nginx

sudo systemctl is-failed nginx

sudo systemctl is-enabled nginx

 TASK B

sudo systemctl list-units --type=service --all

sudo systemctl list-unit-files

sudo systemctl list-unit-files --type=service | grep enabled

sudo systemctl list-unit-files --type=service | grep static

sudo systemctl list-unit-files --type=service | grep disabled

sudo systemctl list-units --type=service --state=active

`}
];
