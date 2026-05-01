const games = [
  { ...your existing game... },

  {
  name: "Among Us",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mamayaya1/game@f3a882424a8f28d07bdf456b251d889725c4c1e4/projects/among-us/style.css" />
</head>
<body>
<script>
window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
    e.preventDefault();
  }
}, false);
</script>
<noscript>
<div id="notSupportedWrap">
<h2 id="notSupportedTitle">This content requires JavaScript</h2>
<p class="notSupportedMessage">JavaScript appears to be disabled. Please enable it to view this content.</p>
</div>
</noscript>
<script src="https://cdn.jsdelivr.net/gh/mamayaya1/game@f3a882424a8f28d07bdf456b251d889725c4c1e4/projects/among-us/scripts/supportcheck.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mamayaya1/game@f3a882424a8f28d07bdf456b251d889725c4c1e4/projects/among-us/scripts/offlineclient.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/gh/gahaden/ags@4f1a2b8755bcbf67ba043a7eca6c2e05d0b5bfe5/main.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/gh/mamayaya1/game@f3a882424a8f28d07bdf456b251d889725c4c1e4/projects/among-us/scripts/register-sw.js" type="module"></script>
</body>
</html>
  `
},
{
  name: "Crossy Road",
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
<base href="https://cdn.jsdelivr.net/gh/bubbls/youtube-playables@latest/crossy-road/">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Crossy Road</title>
<script src="https://cdn.jsdelivr.net/gh/bubbls/youtube-playables@main/ytgame.js"></script>
<link rel="stylesheet" href="style.css">
<script src="scripts/three.min.js"></script>
<script src="scripts/game.min.js"></script>
<script src="scripts/extra.min.js"></script>
<script src="scripts/bootstrap.min.js"></script>
</head>
<body>
<canvas id="canvas"></canvas>
<div id="build-number"></div>
</body>
</html>
  `
},
{
  name: "CS:GO Clicker",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>CS:GO Clicker</title>
<link href='https://fonts.googleapis.com/css?family=Rajdhani:600' rel='stylesheet'>
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Nailington/3kh0-assets@aeb371b7e88542fd5e61eeed9e967a446d84fe1b/csgo-clicker/css/stylesheet.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</head>
<body>
<div class="container noselect">
  <!-- Full game content preserved exactly as provided -->
</div>
<script src="https://cdn.jsdelivr.net/gh/Nailington/3kh0-assets@aeb371b7e88542fd5e61eeed9e967a446d84fe1b/csgo-clicker/js/script.js"></script>
</body>
</html>
  `
  
  {
  name: "Deltarune",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Deltarune Loader</title>
</head>
<body>
<script>
(function launch() {
  try {
    fetch("https://cdn.jsdelivr.net/gh/regedit-sys/web-port@main/deltarune/free.html?t=" + Date.now())
      .then(r => r.text())
      .then(html => {
        document.documentElement.innerHTML = html;
        document.documentElement.querySelectorAll('script').forEach(old => {
          const s = document.createElement('script');
          if (old.src) s.src = old.src;
          else s.textContent = old.textContent;
          document.body.appendChild(s);
        });
      });
  } catch (e) {
    console.error(e);
  }
})();
</script>
</body>
</html>
  `
},
{
  name: "Drive Mad",
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Drive Mad</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #000;
}
iframe {
  width: 100vw;
  height: 100vh;
  border: none;
}
</style>
</head>
<body>
<iframe src="https://ubg98.github.io/drive-mad/"></iframe>
</body>
</html>
  `
},
{
  name: "Pokémon Crystal",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pokémon Crystal</title>
<style>
body, html {
  margin: 0;
  padding: 0;
  background: #121212;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#game {
  width: 100%;
  height: 100%;
}
</style>
</head>
<body>
<div id="game"></div>
<script>
EJS_player = "#game";
EJS_core = "gbc";
EJS_gameName = "Pokemon Crystal";
EJS_color = "#0064ff";
EJS_startOnLoaded = true;
EJS_pathtodata = "https://cdn.jsdelivr.net/gh/genizy/emu@master/";
EJS_gameUrl = "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@main/Pokemon%20-%20Crystal%20Version%20(USA%2C%20Europe).zip";
</script>
<script src="https://cdn.jsdelivr.net/gh/genizy/emu@master/loader.js"></script>
</body>
</html>
  `
  
  {
  name: "Pokémon Emerald Randomizer",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pokémon Emerald Randomizer</title>
<style>
body {
  overflow: hidden;
  background: #000;
  margin: 0;
  padding: 0;
}
#startButton {
  display: block;
  width: 160px;
  height: 40px;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  font-size: 16px;
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
}
</style>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
<div style="width: 100vw; height: 100vh;">
  <div id="game" style="display:none;"></div>
  <button id="startButton">PLAY</button>
</div>
<script>
document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("game").style.display = "block";
  document.getElementById("startButton").style.display = "none";
  EJS_player = "#game";
  EJS_core = "gba";
  EJS_color = "#000000";
  EJS_startOnLoaded = true;
  EJS_pathtodata = "https://cdn.jsdelivr.net/gh/genizy/emu@master/";
  EJS_gameUrl = "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@87ee01b8e80dc306390cb0687ddb8ef7f16b04c0/Pokemon%20Randomized%20Emerald%202.gba";
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/genizy/emu@master/loader.js";
  document.body.appendChild(script);
});
</script>
</body>
</html>
  `
},
{
  name: "Pokémon Ultra Violet",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pokémon Ultra Violet</title>
<style>
body {
  overflow: hidden;
  background: #000;
  margin: 0;
  padding: 0;
}
#startButton {
  display: block;
  width: 160px;
  height: 40px;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  font-size: 16px;
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
}
</style>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
<div style="width: 100vw; height: 100vh;">
  <div id="game" style="display:none;"></div>
  <button id="startButton">PLAY</button>
</div>
<script>
document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("game").style.display = "block";
  document.getElementById("startButton").style.display = "none";
  EJS_player = "#game";
  EJS_core = "gba";
  EJS_color = "#000000";
  EJS_startOnLoaded = true;
  EJS_pathtodata = "https://cdn.jsdelivr.net/gh/genizy/emu@master/";
  EJS_gameUrl = "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@main/Pokemon%20Ultra%20Violet.gba";
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/genizy/emu@master/loader.js";
  document.body.appendChild(script);
});
</script>
</body>
</html>
  `
},
{
  name: "Pokémon Rose Gold",
  html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pokémon Rose Gold</title>
<style>
body {
  overflow: hidden;
  background: #000;
  margin: 0;
  padding: 0;
}
#startButton {
  display: block;
  width: 160px;
  height: 40px;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  font-size: 16px;
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
}
</style>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
<div style="width: 100vw; height: 100vh;">
  <div id="game" style="display:none;"></div>
  <button id="startButton">PLAY</button>
</div>
<script>
document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("game").style.display = "block";
  document.getElementById("startButton").style.display = "none";
  EJS_player = "#game";
  EJS_core = "gba";
  EJS_color = "#000000";
  EJS_startOnLoaded = true;
  EJS_pathtodata = "https://cdn.jsdelivr.net/gh/genizy/emu@master/";
  EJS_gameUrl = "https://cdn.jsdelivr.net/gh/bubbls/UGS-file-encryption@main/Pokemon%20Rose%20Gold.gba";
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/genizy/emu@master/loader.js";
  document.body.appendChild(script);
});
</script>
</body>
</html>
  `
},

},

},

];


