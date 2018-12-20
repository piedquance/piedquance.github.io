function replace(text) {
  text.innerHTML = "Vous ne voyez pas le texte entre crochets (balises) car le navigateur web affiche seulement le contenu (couleur noire). Le texte mauve indique le type d'élément et le texte vert indique un attribut de l'élément, qui comprend une valeur. Chaque élément a une balise d'ouverture et une balise de fermeture Pour donner un exemple, le paragraphe que vous êtes en train de lire est entouré de balises   &ltp&gt et   &lt/p&gt, qui veulent dire paragraphe. Il a aussi un attribut id='banane', cela lui assigne l'identifiant banane. Un identifiant permet de modifier l'élément en question sans affecter le reste des éléments du même type.<br>Avec JavaScript, il est possible de modifier le contenu d'éléments html directement dans le navigateur. Pour faire cela, il vous faudra accéder à la console JavaScript en faisant Ctrl-Shift-J (Windows/Linux) ou Cmd+Opt+J (Mac). Notez que la console ne sera pas assessible si vous utilisez un téléphone intelligent. Une fois là, entrez le texte suivant dans la console :"
}
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
document.getElementById("p5")];
let a = [document.getElementById("11"),
document.getElementById("22"),
document.getElementById("33"),
document.getElementById("44"),
document.getElementById("55")];
window.addEventListener("scroll", function() {
  try {
  for (var v = 0; v <= p.length; v++) {
    if (window.pageYOffset > p[v+1].getBoundingClientRect().top + window.scrollY) {
      a[v].style.color = "#aaa"
    }
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
