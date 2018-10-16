Vagrant.configure("2") do |config|
  config.vm.box = "Intracto/Debian9"
  config.vm.network "private_network", ip: "192.168.33.66"
  config.ssh.forward_agent = true

  config.vm.synced_folder ".", "/vagrant", type: "nfs", mount_options: ['rw', 'vers=3', 'tcp', 'fsc', 'nolock', 'actimeo=2']

  config.vm.provider "virtualbox" do |vb|
     vb.gui = false

     vb.memory = 2048
     vb.cpus = 2

   end

   config.vm.provision "ansible_local" do |ansible|
       ansible.verbose = "v"
       ansible.playbook = "ansible/playbook.yml"
       ansible.version = "latest"
   end

   config.trigger.after :all do |trigger|
       trigger.ignore = [:destroy, :halt, :ssh_run]
       trigger.run_remote = {inline: "sudo /vagrant/boot.sh"}
   end
end