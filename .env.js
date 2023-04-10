const os = require('os');
const readline = require('readline');

function getIP() {
  // Get list of network interfaces
  const networkInterfaces = os.networkInterfaces();
  const ips = Object.values(networkInterfaces).flat()//.filter(iface => iface.family === 'IPv4')

  // pick wifi if only one
  const wifi_ips = ips.filter(iface => iface.address.startsWith('192.'));
  if (wifi_ips.length == 1) return wifi_ips[0].address;

  console.log('No WiFi IP found');
  console.log('Please choose one of the following:');
  ips.forEach((iface, index) => {
    console.log(`${index + 1}. ${iface.address}`);
  });

  //read user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question('Enter IP: ', (answer) => {
      resolve(answer);
      rl.close();
    });
  }).then((answer) => {
    let ip = ips[answer - 1].address;
    console.log(`You chose ${ip}`);
    return ip;
  });
}

module.exports = (async () => {
  return {
    // GENERATE_SOURCEMAP: false,
    REACT_NATIVE_PACKAGER_HOSTNAME: await getIP(),
    BACKEND_URL: 'http://lokeshc2.me',
  }
})();