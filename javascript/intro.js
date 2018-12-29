function replace(text) {
  text.innerHTML = "Le navigateur web affiche seulement le texte noir sur l'écran, le reste sert à la structure. Le texte mauve indique le type d'élément et le texte vert indique un attribut de l'élément, qui comprend une valeur. Chaque élément a une balise d'ouverture et une balise de fermeture. Pour donner un exemple, le paragraphe que vous êtes en train de lire est entouré des balises &ltp&gt et &lt/p&gt, qui veulent dire paragraphe. Il a aussi un attribut id=\"banane\" , cela lui assigne l'identifiant banane. Un identifiant permet de modifier l'élément en question sans affecter le reste des éléments du même type. Avec JavaScript, il est possible de modifier le contenu d'éléments html directement dans le navigateur. Pour faire cela, il vous faudra accéder à la console JavaScript en faisant Ctrl-Shift-J (Windows/Linux) ou Cmd+Opt+J (Mac). Notez que la console ne sera pas assessible si vous utilisez un téléphone intelligent. Une fois là, entrez le texte suivant dans la console :"
}
let Arbre = {
  fruit:"Pomme",
  tailleEnMètres:10,
  âge:50,
  nom: function() {
        alert("Le nom de l'arbre est Arbre 1.");
    }
};
let progress = document.getElementById("bar");
window.addEventListener('scroll', function() {
  let max = document.body.clientHeight - window.innerHeight;
  let value = window.pageYOffset;
  document.getElementById("bar").max = max;
  document.getElementById("bar").value = value;
});
let p = [document.getElementById("p1"), document.getElementById("p2"),
document.getElementById("p3"),
document.getElementById("p4"),
document.getElementById("p5"),
document.getElementById("p6"),
document.getElementById("p7")];
let a = [document.getElementById("11"),
document.getElementById("22"),
document.getElementById("33"),
document.getElementById("44"),
document.getElementById("55"),
document.getElementById("66")];
function asdf(x) {
  if (window.pageYOffset > p[x+1].getBoundingClientRect().top + window.scrollY) {  return a[x].style.color = "#aaa"
} else return a[x].style.color = ""
};
window.addEventListener("scroll", function() {
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
var menu = document.getElementById("menu");
var sticks = menu.offsetTop;
function sticky() {
  if (window.pageYOffset >= sticks) {
    menu.classList.add("stick");
  } else {
    menu.classList.remove("stick");
  }
}
window.addEventListener("scroll", function() {sticky()});
