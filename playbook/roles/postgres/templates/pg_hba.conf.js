local   all             postgres                                peer
local   all             all                                     peer
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5

{% for server in groups.get("appservers") %}
host    all             all             {{server}}/32       trust
{% endfor %}