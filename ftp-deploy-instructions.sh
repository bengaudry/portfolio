set ftp:ssl-allow no

cd /var/www/portfolio
mkdir -p deployment
mirror -R --parallel=5 --delete build/client deployment
mv public_html public_html_old
mv deployment public_html
rm -rf public_html_old

close
bye