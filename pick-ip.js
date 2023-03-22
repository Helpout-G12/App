const os = require('os');
const readline = require('readline');

function saveIP(ip) {
  // update ip in .ip file
  const fs = require('fs');
  const path = require('path');
  const envPath = path.resolve(__dirname, '.ip');
  const env = fs.readFileSync(envPath, 'utf8');
  fs.writeFileSync(envPath, `REACT_NATIVE_PACKAGER_HOSTNAME=${ip}`, 'utf8');
}

// Get list of network interfaces
const networkInterfaces = os.networkInterfaces();
const ips = Object.values(networkInterfaces).flat()

// Find the first IPv4 address starting with "192."

const wifi_ip = ips.find((iface) => iface.family === 'IPv4' && iface.address.startsWith('192.'));

if (wifi_ip) {
  saveIP(wifi_ip.address);
  return;
}
//prompt user to pick ip

console.log('No WiFi IP found');
console.log('Please choose one of the following:');
ips
  .filter((iface) => iface.family === 'IPv4')
  .forEach((iface, index) => {
    console.log(`${index + 1}. ${iface.address}`);
  });

//read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter IP: ', (answer) => {
  rl.close();
  const index = parseInt(answer, 10) - 1;
  const ip = ips.filter((iface) => iface.family === 'IPv4')[index].address;
  console.log(`Selected IP: ${ip}`);
  saveIP(ip);
});