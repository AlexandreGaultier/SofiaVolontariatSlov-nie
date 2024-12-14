// Navigation responsive
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const lines = document.querySelectorAll('.burger .line');

burger.addEventListener('click', () => {
    // Toggle la classe active sur nav-links
    navLinks.classList.toggle('active');
    
    // Animation du burger
    lines.forEach((line, index) => {
        line.classList.toggle('active');
    });
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        lines.forEach(line => line.classList.remove('active'));
    });
});

// Carte interactive
function initMap() {
    const map = L.map('map').setView([46.1512, 14.9955], 8);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Points d'intérêt
    const points = [
        {
            name: "Parc National du Triglav",
            coords: [46.3833, 13.8333],
            note: "Mon coup de cœur absolu ! J'ai passé des journées magiques à randonner ici. Le mont Triglav est majestueux et l'air pur des montagnes est vivifiant. Les refuges de montagne y sont particulièrement accueillants."
        },
        {
            name: "Lac Bohinj",
            coords: [46.2769, 13.8872],
            note: "Mon havre de paix préféré. Contrairement à Bled, Bohinj a gardé son authenticité. J'aime m'y baigner tôt le matin quand le lac est encore miroir."
        },
        {
            name: "Ljubljana",
            coords: [46.0569, 14.5058],
            note: "Ma nouvelle maison ! Cette ville a une âme unique. J'adore particulièrement le marché central le samedi matin et les cafés le long de la rivière."
        },
        {
            name: "Cave de Postojna",
            coords: [45.7833, 14.2033],
            note: "Une expérience inoubliable ! Le petit train qui traverse les grottes est fascinant, et j'ai eu la chance de voir les fameux protées, ces salamandres aveugles."
        },
        {
            name: "Lac de Bled",
            coords: [46.3625, 14.0936],
            note: "Un lieu magique, surtout au lever du soleil. J'ai adoré ramer jusqu'à l'île pour sonner la cloche de l'église et déguster la crème de Bled traditionnelle."
        },
        {
            name: "Piran",
            coords: [45.5283, 13.5687],
            note: "Mon échappée méditerranéenne favorite ! Les couchers de soleil depuis les remparts sont à couper le souffle, et les fruits de mer y sont délicieux."
        },
        {
            name: "Maribor",
            coords: [46.5547, 15.6467],
            note: "J'ai découvert ici la plus vieille vigne du monde ! Les dégustations de vin dans les caves historiques sont une expérience unique."
        },
        {
            name: "Škocjan Caves",
            coords: [45.6667, 13.9833],
            note: "Moins touristique que Postojna mais tout aussi impressionnante. La traversée du pont au-dessus du canyon souterrain est absolument vertigineuse !"
        },
        {
            name: "Château de Predjama",
            coords: [45.8156, 14.1267],
            note: "Un château construit dans une falaise ! J'ai adoré découvrir l'histoire du chevalier Erasmus et les passages secrets du château."
        },
        {
            name: "Velika Planina",
            coords: [46.2958, 14.6583],
            note: "Mon coup de cœur pour l'authenticité ! En été, on peut encore voir les bergers traditionnels et goûter leur fromage frais dans les chalets typiques."
        }
    ];

    points.forEach(point => {
        L.marker(point.coords)
            .bindPopup(`<b>${point.name}</b><br>${point.note}`)
            .addTo(map);
    });
}

// Initialiser la carte quand la section est visible
document.addEventListener('DOMContentLoaded', () => {
    const mapSection = document.querySelector('#carte');
    if (mapSection) {
        initMap();
    }
}); 