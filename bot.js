const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'spihonysmp.falixsrv.me', 
  port: 25565, // Eğer Falix panelinde farklı bir port yazıyorsa buradaki sayıyı onunla değiştirebilirsin
  username: 'KralBot', 
  version: false 
});

bot.on('spawn', () => {
  console.log("Bot sunucuya başarıyla giriş yaptı!");
});

bot.on('end', () => {
  console.log("Bot düştü, yeniden bağlanılıyor...");
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
