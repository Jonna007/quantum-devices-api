import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const devices = [
    {
      name: 'Echo Voice Assistant',
      type: 'Voice Assistant',
      price: 99.99,
      features: ['Voice Control', 'Music Streaming', 'Smart Home Integration'],
    },
    {
      name: 'Nest Thermostat',
      type: 'Thermostat',
      price: 249.99,
      features: ['Energy Saving', 'Remote Control', 'Learning Capabilities'],
    },
    {
      name: 'Ring Security Camera',
      type: 'Security Camera',
      price: 199.99,
      features: ['HD Video', 'Night Vision', 'Motion Detection'],
    },
    {
      name: 'Philips Hue Light',
      type: 'Smart Light',
      price: 59.99,
      features: ['Color Changing', 'Voice Control', 'Scheduling'],
    },
    {
      name: 'Wemo Smart Plug',
      type: 'Smart Plug',
      price: 39.99,
      features: ['Remote Control', 'Energy Monitoring', 'Voice Control'],
    },
    {
      name: 'Arlo Pro Camera',
      type: 'Security Camera',
      price: 299.99,
      features: ['Wireless', 'Weatherproof', 'HD Video'],
    },
    {
      name: 'August Smart Lock',
      type: 'Smart Lock',
      price: 229.99,
      features: ['Keyless Entry', 'Remote Access', 'Auto Lock/Unlock'],
    },
    {
      name: 'Roomba Vacuum',
      type: 'Robot Vacuum',
      price: 499.99,
      features: ['Auto Docking', 'Smart Mapping', 'Voice Control'],
    },
    {
      name: 'Nest Protect',
      type: 'Smoke Detector',
      price: 119.99,
      features: ['Smoke and CO Detection', 'App Alerts', 'Self-Testing'],
    },
    {
      name: 'Sonos One',
      type: 'Smart Speaker',
      price: 199.99,
      features: ['Voice Control', 'Multi-Room Audio', 'Wi-Fi'],
    },
  ];

  for (const device of devices) {
    await prisma.smartDevice.create({
      data: device,
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
