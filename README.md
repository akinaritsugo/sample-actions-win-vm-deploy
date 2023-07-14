
# Node.js Install

```
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs
```


# Initialize Node Application

```
cd /app
npm initialize
```


# SELinuxの設定変更

```
cd /etc/systemd/system/
chmod +x ./webapp.service
chcon \
  -u system_u \
  -r object_r \
  -t systemd_unit_file_t \
  ./webapp.service
```



# Service登録

```
systemctl list-unit-files --type=service | grep webapp
systemctl daemon-reload
systemctl enable webapp
systemctl start webapp
```
