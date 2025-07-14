module.exports = {
  apps : [{
    name: 'portfolio',
    script: "pnpm",
    args: ["start"],
    watch: '.'
  }],
  watch: false, 
  max_memory_restart: '500M',
};
