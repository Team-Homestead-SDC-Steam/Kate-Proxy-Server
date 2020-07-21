#!/usr/bin/env bash
# Run this script in the root of steam-reviews to copy updated files to EC2 instance, then deploy the updates.

ip_pref="ec2-user@13.59.202.34"
ssh_cmd_pref="sudo ssh -i ../steam-proxy.pem $ip_pref"

sudo scp -r -i ../steam-proxy.pem client server public webpack.config.js package-lock.json package.json .babelrc .dockerignore Dockerfile $ip_pref:~/steam-proxy/
$ssh_cmd_pref "sudo service docker start && sudo yum update"
$ssh_cmd_pref "sudo docker kill steam-proxy && sudo docker rm steam-proxy"
$ssh_cmd_pref "cd ~/steam-proxy && sudo docker build -t steam-proxy . && sudo docker run -d -p 3000:3000 --name steam-proxy steam-proxy"
