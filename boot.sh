#!/usr/bin/env bash

# Commands ensuring a proper vagrant bootup

sudo supervisorctl restart all
rm /dev/shm/cache -rf
su vagrant -c "mkdir /dev/shm/cache -p"
rm /vagrant/backend/var/cache -rf
su vagrant -c "ln -sf /dev/shm/cache /vagrant/backend/var/"
chown vagrant:vagrant -R /dev/shm/cache