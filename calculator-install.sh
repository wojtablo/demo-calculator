#
# For Linux/MacOS a simple (re) installation script
#

# Clean-up
#rm -rf /app/vandor
#rm -rf /assets/node_modules
#rm -rf ./public/s/*

# Installation
cd app && composer install
cd ../
cd assets && npm install

# Build
gulp build
cd ../

mkdir logs
chmod -R 777 ./logs
