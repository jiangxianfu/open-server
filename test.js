const http = require('http');

const PORT = process.env.PORT || 3000;

function testServer() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: PORT,
      path: '/',
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200 && data.includes('Hello from open-server!')) {
          console.log('✓ Test passed: Server responded with correct message');
          resolve(true);
        } else {
          console.error('✗ Test failed: Unexpected response');
          reject(new Error('Unexpected response'));
        }
      });
    });

    req.on('error', (error) => {
      console.error('✗ Test failed:', error.message);
      reject(error);
    });

    req.end();
  });
}

// Start the server temporarily for testing
const { startServer } = require('./server.js');
const server = startServer();

setTimeout(async () => {
  try {
    await testServer();
    console.log('\nAll tests passed!');
    server.close();
    process.exit(0);
  } catch (error) {
    console.error('\nTests failed!');
    server.close();
    process.exit(1);
  }
}, 1000);
