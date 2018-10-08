Vagrant.configure("2") do |config|
  config.vm.box = "Intracto/Debian9"
  config.vm.network "private_network", ip: "192.168.33.66"

  config.vm.synced_folder ".", "/vagrant", type: "nfs", mount_options: %w{nolock,vers=3,udp,noatime,actimeo=1,lookupcache=none}

  config.vm.provider "virtualbox" do |vb|
     vb.gui = false

     vb.memory = 4096
     vb.cpus = 4

   end

   config.vm.provision "ansible_local" do |ansible|
       ansible.verbose = "v"
       ansible.playbook = "ansible/playbook.yml"
       ansible.version = "latest"
   end

   config.trigger.after :all do |trigger|
       trigger.ignore = [:destroy, :halt, :ssh_run]
       trigger.run_remote = {inline: "sudo supervisorctl restart all"}
   end
end