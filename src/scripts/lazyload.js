const navbar = document.getElementById("nav-bar");
const childrens = navbar.children[1];
const elements = childrens.children;
const elementsArray = Array.from(elements);

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                let current_li = "";
                switch (entry.target.id) {
                    case "home": {
                        current_li = "inicio"
                        break;
                    }
                    case "type-pages": {
                        current_li = "paginas"
                        break;
                    }
                    case "benefits": {
                        current_li = "bene";
                        break;
                    }
                    case "works": {
                        current_li = "trabajos"
                        break;
                    }
                    case "contact": {
                        current_li = "contacto"
                        break;
                    }
                    default: {
                        break;
                    }
                }
                elementsArray.forEach(element => {
                    if (element.classList.contains(current_li)) {
                        element.classList.add("current-section");
                    } else {
                        element.classList.remove("current-section");
                    }
                });
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    const lazySections = document.querySelectorAll('.lazy-section');
    lazySections.forEach(section => {
        observer.observe(section);
    });
});
