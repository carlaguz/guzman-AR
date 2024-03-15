kaomojis = ["╰(*°▽°*)╯", "(*/ω＼*)", "(✿◡‿◡)", "(*^▽^*)", "/(ㄒoㄒ)/~~", "（；´д｀）ゞ", "(≧﹏ ≦)", "(┬┬﹏┬┬)"];
/**
 * Muestra un kaomoji (emote) simplemente ejecutando la funcion.
 * @returns {string} - Un kaomoji al azar (╰(*°▽°*)╯, (✿◡‿◡), etc.)
*/
function MostrarKaomoji() {
    let randIndex = Math.floor(Math.random() * kaomojis.length);
    console.log(kaomojis[randIndex]);
}

module.exports.MostrarKaomoji = MostrarKaomoji;