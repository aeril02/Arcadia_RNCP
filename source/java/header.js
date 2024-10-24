// header pour les page du site 
// creation d'un array pour la creation du menu
const menuItems = [
    {src : "photo/logo_arcadia.webp", alt: "logo arcadia"},
    {href: "../../page/index.php", label: "Accueil"},
    {href: "../../page/service.php", label: "Services"},
    {href: "../../page/habitats.php", label: "Habitats"},
    {href: "../../page/contact.php", label: "Contact"},
]
// recuperer le chemin actuel
const currentPath = window.location.pathname;

// creation de la boucle for pour l'affichage du menu 
const menu = document.getElementById("header");
menuItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.label;

    // test pour savoir si le lien est actif ou non
    if (currentPath.includes(item.href.split("/").pop())) {
        a.classList.add("active");
    }

    li.appendChild(a);
    menu.appendChild(li);
});

//footer pour les pages du site 
// creation d'un array pour la creation du menu
const footerItems = [
    {href: "../../page/legal.html", label: "Mentions legales"},
    {href: "../../page/billeterie.php", label: "Billetterie"},
    {href: "../../page/reglement.php", label: "Réglement interne"},
    {href: "../../page/recrutement.html", label: "Recrutement"},
    {href: "../../page/login.php", label: "Connexion"},
]
const footer = document.getElementById("footer");
footerItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.label;
    li.appendChild(a);
    footer.appendChild(li);
});