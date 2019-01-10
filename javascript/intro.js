//button click event
function replace(text) {
  text.innerHTML = "Le navigateur web affiche seulement le texte noir sur l'écran, le reste sert à la structure. Le texte mauve indique le type d'élément et le texte vert indique un attribut de l'élément, qui comprend une valeur. Chaque élément a une balise d'ouverture et une balise de fermeture. Pour donner un exemple, le paragraphe que vous êtes en train de lire est entouré des balises &ltp&gt et &lt/p&gt, qui veulent dire paragraphe. Il a aussi un attribut id=\"banane\" , cela lui assigne l'identifiant banane. Un identifiant permet de modifier l'élément en question sans affecter le reste des éléments du même type. Avec JavaScript, il est possible de modifier le contenu d'éléments html directement dans le navigateur. Pour faire cela, il vous faudra accéder à la console JavaScript en faisant Ctrl-Shift-J (Windows/Linux) ou Cmd+Opt+J (Mac). Notez que la console ne sera pas assessible si vous utilisez un téléphone intelligent. Une fois là, entrez le texte suivant dans la console :"
}
//object example
let Arbre = {
  fruit:"Pomme",
  tailleEnMètres:10,
  âge:50,
  nom: function() {
        alert("Le nom de l'arbre est Arbre 1.");
    }
};
//progress bar
let progress = document.getElementById("bar");
window.addEventListener('scroll', function() {
  let max = document.body.clientHeight - window.innerHeight;
  let value = window.pageYOffset;
  document.getElementById("bar").max = max;
  document.getElementById("bar").value = value;
});
//all headers and sidenav links pushed into 2 arrays
let p = [], a = [];
let xD;
for(let x = 1; x <= 7; x++) {
  xD = "p" + x;
  p.push(document.getElementById(xD));
  xD = "a" + x;
  a.push(document.getElementById(xD));
}
a.pop();

//function that colors grey passed links
function asdf(x) {
  if (window.pageYOffset > p[x+1].getBoundingClientRect().top + window.scrollY - 200) {  return a[x].style.color = "#aaa"
} else return a[x].style.color = ""
};
//on scroll, whenever you hover the link(green) or not(asdf)
document.addEventListener("scroll", function() {
try {
  for (let x = 0; x <= p.length; x++) {
    a[x].addEventListener("mouseover", function() {
      this.style.color = "#3ff936";
    });
    a[x].addEventListener("mouseout", function() {
    asdf(x);
    });
    asdf(x);
  }} catch(TypeError) {}
});
//sticky navigation for mobile
var menu1 = document.getElementById("menu");
var menu2 = document.getElementById("color");
var sticks = menu1.offsetTop;
function sticky() {
  if (window.pageYOffset >= 73) {
     menu1.classList.add("stick");
     if(window.innerWidth < 599) {
       menu2.style.marginTop = 0;
     }
  }
 else {
    menu1.classList.remove("stick");
     if(window.innerWidth < 599) {
       menu2.style.marginTop = "69" - window.pageYOffset + "px";
     }
  }
  if(window.innerWidth > 599) {
  menu2.style.marginTop = 0;
  }
}
document.addEventListener("scroll", sticky);
setInterval(sticky, 10);
//javascript DOM example
let egg = document.getElementById("eggs");
eggs.onclick = function() {
let réponse = prompt("Entrez une couleur parmi les suivantes : cyan ou violet");
if(réponse === "cyan") {
eggs.style.color = "#00ffff";
} else if(réponse === "violet") {
eggs.style.color = "#ff00ff";
} else alert("Vous n'avez pas entré une couleur valide.");
};
//code for Défis
let code = document.getElementById("code").contentWindow.document;
(function () {
  let button = document.getElementById("codeInput");
  let js = document.getElementById("js");
  button.onclick = function() {
    code.open();
    code.writeln(
"<p id=\"patate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><script>" +
        js.value +
        "</script>");
    code.close();
  };
})();
window.onload = () => {
  code.open();
  code.writeln(
"<p id=\"patate\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><script></script>");
  code.close();
}
//color picker code

let col = [
{label:'#textl', input:'#text', ele:'p, li', backrnd:false},
{label:'#stl', input:'#st', ele:'h2', backrnd:false},
{label:'#tl', input:'#t', ele:'header', backrnd:false},
{label:'#cl', input:'#c', ele:'.nav, header', backrnd:true},
{label:'#Cl', input:'#C', ele:'body', backrnd:true}
];
for(let x = 0; x<col.length;x++) {
if(!!localStorage[""+x]) {
} else {
  localStorage.setItem(""+x, document.querySelector(col[x].input).value);
}
}
function allElementsColor(y, x) {
  document.querySelectorAll(col[x].ele).forEach(function(thing) {
    if(col[x].backrnd) {
      thing.style.backgroundColor = y;
    } else thing.style.color = y;
  });
}
setInterval(function() {
    document.querySelectorAll("p, li, .sites").forEach(function(x) {
      x.style.fontSize = document.querySelector("#size").value + "px";
    })
    document.querySelectorAll("h2, header").forEach(function(x) { x.style.fontSize = 10+ +document.querySelector("#size").value+"px";
    });
},100);

window.addEventListener("load", startup);
function startup() {
  for(let x = 0; x<col.length;x++) {
    document.querySelector(col[x].label).style.color =
    localStorage.getItem(""+x);
    allElementsColor(localStorage.getItem(""+x), x);
  col[x].color = document.querySelector(col[x].input);
  col[x].color.addEventListener("change", function(event) {
  allElementsColor(event.target.value, x);
  document.querySelector(col[x].label).style.color = event.target.value;
  localStorage.setItem(""+x, event.target.value);
    });
  }
}
document.querySelector("#Default").addEventListener("click", function() {
  localStorage.clear();
  window.location.reload();
});
