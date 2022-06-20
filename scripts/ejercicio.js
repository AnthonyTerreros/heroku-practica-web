const ejecutarCodigo = () => {
  const titulo1 = document.getElementById("titulo1");
  titulo1.textContent = "Album de fotos";
  let arr = [];
  let text = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`;
  arr = document.getElementsByClassName("text-muted");
  arr[1].innerHTML = text;

  let arr2 = [];
  arr2 = document.getElementsByTagName("p");
  arr2[2].classList.add("d-none");

  const imagages_url = [
    {
      url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "camino",
    },
    {
      url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "energia",
    },
    {
      url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "papá",
    },
    {
      url: "https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "restaurante",
    },
    {
      url: "https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "coctel",
    },
    {
      url: "https://images.unsplash.com/photo-1653938245506-3203e63338b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "yoga",
    },
    {
      url: "https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "bosque",
    },
    {
      url: "https://images.unsplash.com/photo-1653965188866-e544c043a2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "playa",
    },
    {
      url: "https://images.unsplash.com/photo-1654045851484-d9aea271acda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "bandera",
    }
  ];
  let list_svg;
  list_svg = document.querySelectorAll('svg')
  const len_list_svg = list_svg.length;
  for (let i = 1; i < len_list_svg; i++) {
    const imagen = document.createElement("img");
    imagen.setAttribute("src", imagages_url[i-1].url);
    imagen.setAttribute("alt", imagages_url[i-1].alt);
    imagen.setAttribute("height", "200px");
    imagen.setAttribute("width", "100%");
    imagen.classList.add('bd-placeholder-img', 'card-img-top');
    list_svg[i].parentElement.replaceChild(imagen, list_svg[i])
  }
};

ejecutarCodigo();
