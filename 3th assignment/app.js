const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 5,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 6,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 7,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 8,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

const container=document.querySelector('.btn-container');

function createButton(category) {
  const button = document.createElement("button");
  button.textContent = category;
  button.classList.add('btn', 'btn-outline-dark', 'btn-item');
  button.setAttribute('type', 'button');
  return button;
}

const btnAll = createButton("All");
container.appendChild(btnAll);

const btnKorea = createButton("Korea");
container.appendChild(btnKorea);

const btnJapan = createButton("Japan");
container.appendChild(btnJapan);

const btnChina = createButton("China");
container.appendChild(btnChina);


const menu1=document.querySelector('.section-center ');
menu1.id="menu";

function menuAll(menuItems){
  let items= menuItems.map(item=>{
    return `<div class="menu-items col-lg-6 col-sm-12 " >
    <img src="${item.img}" alt="${item.title}" class="photo">
    <div class="menu-info">
    <div class="menu-title">
    <h4>${item.title}</h4>
    <h4>${item.price}</h4>
    </div>
    <p class="menu-text">${item.desc}</p>
    </div>
  </div>`
  })
  menu1.innerHTML=items.join('');
}

function filterMenu(category) {
  if(category==="All") menuAll(menu);
  else{
  const filteredItems = menu.filter(item => item.category === category);
  menuAll(filteredItems);}
}

btnAll.addEventListener("click", () => filterMenu("All"));
btnJapan.addEventListener("click", () => filterMenu("Japan"));
btnKorea.addEventListener("click", () => filterMenu("Korea"));
btnChina.addEventListener("click", () => filterMenu("China"));

window.addEventListener("DOMContentLoaded", () => {
  menuAll(menu);
});