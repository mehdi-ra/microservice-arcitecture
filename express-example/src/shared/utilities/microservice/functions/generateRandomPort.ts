export function generateRandomPort() {
  return Math.floor(Math.random() * (65535 - 1024 + 1) + 1024);
}
