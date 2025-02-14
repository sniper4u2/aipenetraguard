document.addEventListener('DOMContentLoaded', () => {
  const terminalContainer = document.getElementById('terminal');
  const terminal = new Terminal();
  const fitAddon = new FitAddon.FitAddon();

  terminal.loadAddon(fitAddon);
  terminal.open(terminalContainer);
  fitAddon.fit();

  const socket = io.connect();

  terminal.onData(data => {
    socket.emit('input', data);
  });

  socket.on('output', data => {
    terminal.write(data);
  });

  window.addEventListener('resize', () => {
    fitAddon.fit();
  });
});