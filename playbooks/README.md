
1. change `hosts` and `group_vars/all`
2. `ansible-playbook -i hosts -e remote_user={user} -e ansible_ssh_port={port} site.yml
