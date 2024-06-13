function skillsMember() {
  return {
    id: 'skills-copilot-codespaces-vscode',
    name: 'Skills Copilot Codespaces VSCode',
    description: 'Skills Copilot Codespaces VSCode',
    icon: 'https://cdn.sanity.io/images/3z8e5z5f/production/9b6c5f2e4b1d6a7e7f4a4b1c8f4e7d0b2b4d6b1-128x128.png',
    version: '0.0.1',
    host: 'codespaces',
    container: {
      image: 'ghcr.io/skills-copilot/codespaces-vscode:latest',
      memory: 2048,
      cpu: 1,
      mounts: [
        {
          source: 'skills-copilot-codespaces-vscode',
          target: '/workspace',
          type: 'volume',
        },
      ],
    },
    ports: [
      {
        port: 3000,
        protocol: 'http',
      },
    ],
    routes: [
      { source: '/skills-copilot-codespaces-vscode', target: 'http://localhost:3000' },
    ],
  };
}