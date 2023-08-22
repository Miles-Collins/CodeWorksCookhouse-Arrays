const appetizers = [
  {
    name: "HTML5 Hummus Platter",
    price: 8.99,
    calories: 320,
    description:
      "Dive into our HTML5 Hummus Platter, an homage to the cornerstone of modern web development. This exquisite platter presents an array of assorted hummus flavors, accompanied by crisp pita chips and colorful vegetable sticks. The creamy hummus varieties are a testament to the diverse flavors of HTML5, while the crunchy accompaniments represent the robustness of this foundational technology.",
    favorite: true,
    image: "/assets/hummus.webp",
  },
  {
    name: "CSS Crispy Calamari",
    price: 10.99,
    calories: 450,
    description:
      "Immerse yourself in the whimsical world of design with our CSS Crispy Calamari. Tender calamari rings are expertly fried to a crispy perfection, creating a delightful textural interplay. Served with a tangy CSS-inspired dipping sauce, this dish encapsulates the fusion of textures and styles that CSS brings to the web design realm.",
    image: "/assets/crispy-calamari.png",
  },
  {
    name: "Vue Veggies Tempura",
    price: 9.49,
    calories: 280,
    description:
      "Embark on a journey of lightness and innovation with our Vue Veggies Tempura. Seasonal vegetables are artfully coated in a light batter, achieving a delicate crunch that pays tribute to Vue.js' elegance. Paired with a sweet chili dipping sauce, this dish encapsulates the harmonious balance of flavors and simplicity that Vue.js embodies",
    image: "/assets/veggie-tempura.png",
  },
];

const mainCourses = [
  {
    name: "MVC Mixed Grill",
    price: 18.99,
    calories: 620,
    description:
      "The MVC Mixed Grill is a symphony of flavors that pays tribute to the architecture of software development. Savor the succulence of C#-seasoned chicken, .Net-marinated steak, and Node-infused lamb chops. Accompanied by Bootstrap-baked vegetables, this dish showcases the amalgamation of tastes and innovation that MVC architecture brings to the table.",
    favorite: true,
    image: "/assets/mixed-grill.webp",
  },
  {
    name: "Bootstrap BBQ Burger",
    price: 13.99,
    calories: 780,
    description:
      "Relish the hearty goodness of our Bootstrap BBQ Burger, a tribute to frontend frameworks. Sink your teeth into a juicy burger layered with melted cheese, crispy bacon, and a tantalizing Bootstrap-inspired BBQ sauce. Served with a side of MVC coleslaw, this dish captures the essence of dynamic and engaging user experiences.",
    image: "/assets/bootstrap-bbq-burger.png",
  },
  {
    name: "C# Seafood Symphony",
    price: 22.99,
    calories: 540,
    description:
      "Indulge in the C# Seafood Symphony, a culinary masterpiece that mirrors the complexity of the C# language. Seared seafood delights include CSS-coated scallops, HTML5-crusted salmon, and Vue-infused shrimp, all resting atop a bed of Node-powered risotto. This dish embodies the harmony and innovation that the C# ecosystem offers.",
    favorite: true,
    image: "/assets/seafood-symphony.png",
  },
  {
    name: "Node Noodle Stir-Fry",
    price: 15.99,
    calories: 460,
    description:
      "Embark on a flavorful journey with the Node Noodle Stir-Fry, reminiscent of the versatility of Node.js. Wok-tossed noodles are adorned with fresh vegetables and your choice of protein, coated in a savory Node.js-inspired sauce. This dish embodies the dynamic nature and adaptability that Node.js brings to the world of programming.",
    image: "/assets/node-noodle-stir-fry.png",
  },
];

const sideDishes = [
  {
    name: ".NET Nacho Tower",
    price: 11.99,
    calories: 520,
    description:
      "Elevate your dining experience with the architectural marvel of our .NET Nacho Tower. Layered nachos, adorned with melted cheese, black beans, jalapeños, and sour cream, pay tribute to the structural elegance of .NET architecture. This dish exemplifies the fusion of flavors and stability that .NET technology provides.",
    favorite: true,
    image: "/assets/net-nacho-tower.png",
  },
  {
    name: "Dynamic CSS Salad",
    price: 7.49,
    calories: 180,
    description:
      "Immerse yourself in the innovative flavors of our Dynamic CSS Salad. Mixed greens, roasted nuts, and dried fruits are complemented by a customizable array of dressings, embodying the flexibility and adaptability that CSS brings to the world of design and taste.",
    image: "/assets/css-salad.png",
  },
];

const desserts = [
  {
    name: "Vue Vanilla Parfait",
    price: 6.99,
    calories: 280,
    description:
      "Satisfy your sweet cravings with the Vue Vanilla Parfait, a dessert that mirrors the dynamic nature of Vue.js. Layers of creamy vanilla goodness are intertwined with fresh fruit, creating a delightful harmony of flavors and textures that encapsulate the essence of Vue.js' simplicity and innovation.",
    image: "/assets/vue-vanilla-parfait.png",
  },
  {
    name: "Node Nutty Brownie",
    price: 7.99,
    calories: 420,
    description:
      "Delight in the harmonious blend of flavors found in the Node Nutty Brownie. A warm chocolate brownie, adorned with nuts and a scoop of Node.js-powered coffee ice cream, is a testament to the exquisite taste and functionality that Node.js brings to the culinary realm.",
    favorite: true,
    image: "/assets/node-nutty-brownie.png",
  },
  {
    name: "Responsive Raspberry Cheesecake",
    price: 8.49,
    calories: 380,
    description:
      "Embark on a journey of taste and elegance with our Responsive Raspberry Cheesecake. Classic cheesecake infused with fresh raspberries is complemented by HTML5-inspired raspberry coulis and delicate CSS-spun sugar decorations. This dessert mirrors the dynamic and responsive qualities of web design, re-imagined in a sweet form.",
    image: "/assets/responsive-raspberry-cheesecake.png",
  },
];

const beverages = [
  {
    name: "CodeBrew Coffee",
    price: 3.99,
    calories: 5,
    description:
      "Immerse yourself in the essence of CodeWorks with our signature CodeBrew Coffee. Crafted from a carefully blended selection of coffee beans, this beverage pays homage to the blend of programming languages taught at CodeWorks. Choose between a bold black brew or a creamy latte, both offering a unique taste experience.",
    favorite: true,
    image: "/assets/codebrew-coffee.png",
  },
  {
    name: "TechTonic Tea",
    price: 2.99,
    calories: 0,
    description:
      "Discover tranquility and refreshment in every sip of our TechTonic Tea. This selection of aromatic teas, each named after a programming technology, offers a soothing and invigorating experience. Embrace the essence of various languages while indulging in a moment of relaxation.",
    image: "/assets/techtonic-tea.png",
  },
  {
    name: "Node Nectar",
    price: 4.49,
    calories: 90,
    description:
      "Immerse yourself in the fruity and refreshing embrace of Node Nectar. This mocktail, infused with the spirit of Node.js, features a delightful blend of fresh fruits and herbs. Garnished with citrus slices, this beverage captures the dynamic and vibrant nature of Node.js in liquid form.",
    image: "/assets/node-nectar.png",
  },
];

const menu = [
  {
    name: "HTML5 Hummus Platter",
    quantity: 0,
    price: 8.99,
    calories: 320,
    description:
      "Dive into our HTML5 Hummus Platter, an homage to the cornerstone of modern web development. This exquisite platter presents an array of assorted hummus flavors, accompanied by crisp pita chips and colorful vegetable sticks. The creamy hummus varieties are a testament to the diverse flavors of HTML5, while the crunchy accompaniments represent the robustness of this foundational technology.",
    favorite: true,
    image: "/assets/hummus.webp",
    type: "appetizers",
  },
  {
    name: "CSS Crispy Calamari",
    quantity: 0,
    price: 10.99,
    calories: 450,
    description:
      "Immerse yourself in the whimsical world of design with our CSS Crispy Calamari. Tender calamari rings are expertly fried to a crispy perfection, creating a delightful textural interplay. Served with a tangy CSS-inspired dipping sauce, this dish encapsulates the fusion of textures and styles that CSS brings to the web design realm.",
    image: "/assets/crispy-calamari.png",
    type: "appetizers",
  },
  {
    name: "Vue Veggies Tempura",
    quantity: 0,
    price: 9.49,
    calories: 280,
    description:
      "Embark on a journey of lightness and innovation with our Vue Veggies Tempura. Seasonal vegetables are artfully coated in a light batter, achieving a delicate crunch that pays tribute to Vue.js' elegance. Paired with a sweet chili dipping sauce, this dish encapsulates the harmonious balance of flavors and simplicity that Vue.js embodies",
    image: "/assets/veggie-tempura.png",
    type: "appetizers",
  },
  {
    name: "MVC Mixed Grill",
    quantity: 0,
    price: 18.99,
    calories: 620,
    description:
      "The MVC Mixed Grill is a symphony of flavors that pays tribute to the architecture of software development. Savor the succulence of C#-seasoned chicken, .Net-marinated steak, and Node-infused lamb chops. Accompanied by Bootstrap-baked vegetables, this dish showcases the amalgamation of tastes and innovation that MVC architecture brings to the table.",
    favorite: true,
    image: "/assets/mixed-grill.webp",
    type: "main courses",
  },
  {
    name: "Bootstrap BBQ Burger",
    quantity: 0,
    price: 13.99,
    calories: 780,
    description:
      "Relish the hearty goodness of our Bootstrap BBQ Burger, a tribute to frontend frameworks. Sink your teeth into a juicy burger layered with melted cheese, crispy bacon, and a tantalizing Bootstrap-inspired BBQ sauce. Served with a side of MVC coleslaw, this dish captures the essence of dynamic and engaging user experiences.",
    image: "/assets/bootstrap-bbq-burger.png",
    type: "main courses",
  },
  {
    name: "C# Seafood Symphony",
    quantity: 0,
    price: 22.99,
    calories: 540,
    description:
      "Indulge in the C# Seafood Symphony, a culinary masterpiece that mirrors the complexity of the C# language. Seared seafood delights include CSS-coated scallops, HTML5-crusted salmon, and Vue-infused shrimp, all resting atop a bed of Node-powered risotto. This dish embodies the harmony and innovation that the C# ecosystem offers.",
    favorite: true,
    image: "/assets/seafood-symphony.png",
    type: "main courses",
  },
  {
    name: "Node Noodle Stir-Fry",
    quantity: 0,
    price: 15.99,
    calories: 460,
    description:
      "Embark on a flavorful journey with the Node Noodle Stir-Fry, reminiscent of the versatility of Node.js. Wok-tossed noodles are adorned with fresh vegetables and your choice of protein, coated in a savory Node.js-inspired sauce. This dish embodies the dynamic nature and adaptability that Node.js brings to the world of programming.",
    image: "/assets/node-noodle-stir-fry.png",
    type: "main courses",
  },
  {
    name: ".NET Nacho Tower",
    quantity: 0,
    price: 11.99,
    calories: 520,
    description:
      "Elevate your dining experience with the architectural marvel of our .NET Nacho Tower. Layered nachos, adorned with melted cheese, black beans, jalapeños, and sour cream, pay tribute to the structural elegance of .NET architecture. This dish exemplifies the fusion of flavors and stability that .NET technology provides.",
    favorite: true,
    image: "/assets/net-nacho-tower.png",
    type: "sides",
  },
  {
    name: "Dynamic CSS Salad",
    quantity: 0,
    price: 7.49,
    calories: 180,
    description:
      "Immerse yourself in the innovative flavors of our Dynamic CSS Salad. Mixed greens, roasted nuts, and dried fruits are complemented by a customizable array of dressings, embodying the flexibility and adaptability that CSS brings to the world of design and taste.",
    image: "/assets/css-salad.png",
    type: "sides",
  },
  {
    name: "Vue Vanilla Parfait",
    quantity: 0,
    price: 6.99,
    calories: 280,
    description:
      "Satisfy your sweet cravings with the Vue Vanilla Parfait, a dessert that mirrors the dynamic nature of Vue.js. Layers of creamy vanilla goodness are intertwined with fresh fruit, creating a delightful harmony of flavors and textures that encapsulate the essence of Vue.js' simplicity and innovation.",
    image: "/assets/vue-vanilla-parfait.png",
    type: "desserts",
  },
  {
    name: "Node Nutty Brownie",
    quantity: 0,
    price: 7.99,
    calories: 420,
    description:
      "Delight in the harmonious blend of flavors found in the Node Nutty Brownie. A warm chocolate brownie, adorned with nuts and a scoop of Node.js-powered coffee ice cream, is a testament to the exquisite taste and functionality that Node.js brings to the culinary realm.",
    favorite: true,
    image: "/assets/node-nutty-brownie.png",
    type: "desserts",
  },
  {
    name: "Responsive Raspberry Cheesecake",
    quantity: 0,
    price: 8.49,
    calories: 380,
    description:
      "Embark on a journey of taste and elegance with our Responsive Raspberry Cheesecake. Classic cheesecake infused with fresh raspberries is complemented by HTML5-inspired raspberry coulis and delicate CSS-spun sugar decorations. This dessert mirrors the dynamic and responsive qualities of web design, re-imagined in a sweet form.",
    image: "/assets/responsive-raspberry-cheesecake.png",
    type: "desserts",
  },
  {
    name: "CodeBrew Coffee",
    quantity: 0,
    price: 3.99,
    calories: 5,
    description:
      "Immerse yourself in the essence of CodeWorks with our signature CodeBrew Coffee. Crafted from a carefully blended selection of coffee beans, this beverage pays homage to the blend of programming languages taught at CodeWorks. Choose between a bold black brew or a creamy latte, both offering a unique taste experience.",
    favorite: true,
    image: "/assets/codebrew-coffee.png",
    type: "beverages",
  },
  {
    name: "TechTonic Tea",
    quantity: 0,
    price: 2.99,
    calories: 0,
    description:
      "Discover tranquility and refreshment in every sip of our TechTonic Tea. This selection of aromatic teas, each named after a programming technology, offers a soothing and invigorating experience. Embrace the essence of various languages while indulging in a moment of relaxation.",
    image: "/assets/techtonic-tea.png",
    type: "beverages",
  },
  {
    name: "Node Nectar",
    quantity: 0,
    price: 4.49,
    calories: 90,
    description:
      "Immerse yourself in the fruity and refreshing embrace of Node Nectar. This mocktail, infused with the spirit of Node.js, features a delightful blend of fresh fruits and herbs. Garnished with citrus slices, this beverage captures the dynamic and vibrant nature of Node.js in liquid form.",
    image: "/assets/node-nectar.png",
    type: "beverages",
  },
];

// SECTION MENU

function drawMenuItems(type) {
  let menuElem = document.getElementById("menuItems");

  const menuItems = filterMenu(type);
  console.log("[MENU ITEMS]", menuItems);
  drawMenuTitle(type);
  const menu = menuString(menuItems);
  console.log("[MENU STRING]", menu);
  menuElem.innerHTML = menu;
}

function drawMenuTitle(type) {
  const menuTitleElem = document.getElementById("filterTitle");

  menuTitleElem.innerHTML = `
  <p class="fs-5 text-light text-uppercase">${type}</p>
  `;
}

function menuString(menu) {
  let menuString = "";
  menu.forEach(
    (item) =>
      (menuString += `
      <div onclick="openModal('${item.name}')" class="col-3 menu-item d-flex align-items-center justify-content-center p-3 m-2">
        <div class="row">
          <div class="col-12 text-center">
            <img src="${item.image}" class="mb-1 menu-item-image" />
            <p class="mb-0 text-light">${item.name}</p>
          </div>
        </div>
      </div>
  `)
  );
  console.log("[MENU STRING]", menuString);
  return menuString;
}

// SECTION CART

function addToCart(name) {
  const item = findMenuItemByName(name);
  item.quantity++;
  drawCart(item);
  drawCartTotalCost(item);
}

function drawCart(item) {
  let checkoutElem = document.getElementById("checkout");
  checkoutElem.innerHTML += `
    <div class="row my-1 bg-black border-white">
      <div class="col-2 d-flex align-items-center justify-content-center">
        <span class="mdi mdi-trash-can"></span>
      </div>
      <div class="col-7 small-font d-flex align-items-center">
      ${item.name} <br/> $${item.price}
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center">
        <img class="cart-image" src="${item.image}">
      </div>
    </div>   
  `;
}

function drawCartTotalCost() {
  const cartElem = document.getElementById("cart");
  const checkoutCartElem = document.getElementById("checkoutCart");

  const totalItemsInCart = cartTotalItemsInCart();
  const totalPrice = cartTotalPrice();

  cartElem.innerHTML = `
    <p class="m-0">Subtotal (${totalItemsInCart} items)</p>
    <p class="m-0 text-shadow">$${totalPrice.toFixed(2)}</p>
    `;

  checkoutCartElem.innerHTML = `
    <button onclick="checkout()" class="btn btn-light form-control">Checkout</button>
    `;
}

function cartTotalPrice() {
  let totalPrice = 0;
  menu.forEach((item) => (totalPrice += item.quantity * item.price));
  console.log("[TOTAL PRICE]", totalPrice);
  return totalPrice;
}

function cartTotalItemsInCart() {
  let totalItemsInCart = 0;
  menu.forEach((item) => (totalItemsInCart += item.quantity));
  console.log("[TOTAL ITEMS IN CART]", totalItemsInCart);
  return totalItemsInCart;
}

function checkout() {
  clearCheckout();
  window.alert("Your food is on the way!");
}

function clearCheckout() {
  const checkoutElem = document.getElementById("checkout");
  const cartElem = document.getElementById("cart");
  const checkoutCartElem = document.getElementById("checkoutCart");

  checkoutElem.innerText = "";
  cartElem.innerText = "";
  checkoutCartElem.innerText = "";
}

// SECTION MODAL

function openModal(name) {
  const menuItem = findMenuItemByName(name);
  console.log("[MENU ITEM]", menuItem);
  updateModal(menuItem);
}

function updateModal(item) {
  let myModal = new bootstrap.Modal(document.getElementById("itemModal"));
  let menuBodyElem = document.getElementById("menuBody");

  menuBodyElem.innerHTML = `
    <div class="col-12 col-md-6 d-flex align-items-center">
      <img src="${item.image}" class="img-fluid" alt="">
    </div>
    <div class="col-12 col-md-6">
      <div class="row">
        <div class="col-12">
          <h3>${item.name}</h3>
          <hr />
        </div>
        <div class="col-12">
          <p>${item.description}</p>
        </div>
        <div class="col-12">
          <p>Price: $${item.price}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="row justify-content-end mt-2">
            <div class="col-6 col-md-6">
              <button type="button" class="btn btn-outline-danger form-control" data-bs-dismiss="modal">Close</button>
            </div>
            <div class="col-6 col-md-6">
              <button onclick="addToCart('${item.name}', '${item.price}')" type="button" class="btn btn-outline-light form-control">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  myModal.toggle();
}

// SECTION MENU SERVICES

function filterMenu(type) {
  if (type == "all") {
    console.log("[MENU]", menu);
    return menu;
  } else if (type == "favorites") {
    const favoriteMenu = menu.filter((item) => item.favorite);
    console.log("[FAVORITE MENU]", favoriteMenu);
    return favoriteMenu;
  } else {
    const typeMenu = menu.filter((item) => item.type == type);
    console.log("[TYPE MENU]", typeMenu);
    return typeMenu;
  }
}

function findMenuItemByName(name) {
  const menuItem = menu.find((item) => item.name == name);
  console.log("[MENU ITEM]", menuItem);
  return menuItem;
}

// SECTION PAGE LOAD

function pageLoad() {
  drawMenuItems("favorites");
}

pageLoad();
