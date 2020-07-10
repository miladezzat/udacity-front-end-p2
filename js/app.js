/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const createNav = () => {
    let items = ['Home', 'About', 'Popular', 'Contact'];
    let fragment = new DocumentFragment();
    let navContainer = document.getElementById('navbar__list');
    items.forEach(function (item) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute("class", "menu__link");
        a.setAttribute("href", `#${item}`)
        a.innerHTML = item
        li.appendChild(a);
        fragment.appendChild(li)
    })
    navContainer.appendChild(fragment)
}

createNav()

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const addHeader = () => {
    let header = document.createElement('header');
    header.setAttribute("class", "main__hero");
    // header.setAttribute("id", "Home")
    let h1 = document.createElement("h1");
    h1.textContent = "Landing Page";
    header.appendChild(h1);
    let main = document.getElementById("content");
    main.appendChild(header);
}


let sections = [
    {
        id: "About",
        h2: "About",
        ps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
            "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
        ]
    },
    {
        id: "Popular",
        h2: "Popular",
        ps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
            "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
        ]
    },
    {
        id: "Contact",
        h2: "Contact",
        ps: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
            "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
        ]
    },
]


const addSections = () => {
    let mainFrament = new DocumentFragment();
    let main = document.getElementById("content");
    for (let index = 0; index < sections.length; index++) {
        let el = sections[index];
        
        let section = document.createElement("section");
        section.setAttribute("id", el.id);

        let div = document.createElement("div");
        div.setAttribute("class", "landing__container");

        let h2 = document.createElement("h2");
        h2.textContent = el.h2;

        let frament = new DocumentFragment();
        for (let index = 0; index < el.ps.length; index++) {
            const pContent = el.ps[index];
            let p = document.createElement("p");
            p.textContent = pContent;
            frament.appendChild(p)
        }

        div.appendChild(h2)
        div.appendChild(frament);
        section.appendChild(div)

        mainFrament.appendChild(section);
    }
    main.appendChild(mainFrament);
}

addHeader();
addSections()