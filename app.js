console.log("get js");



function listCovid19News(date){
    

}

function speechNews(data){


}

function riskLevel(){
    //security
    //low level
    //middle level
    //high level
}

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate())

const currentDate = date.getFullYear() + "-"+(date.getMonth()+1) + "-" + date.getDate();
// const yesterDay = date.getFullYear() + "-"+(date.getMonth()+1) + "-" + (date.getDate()-1);
const newsKey = "9ec9cdd0f4bf4ca1b3e00913ee10f819";

const yesterday = new Date(date);
yesterday.setDate(yesterday.getDate() - 1);


console.log(currentDate);
// console.log(yesterday);

const yesterDayDate = yesterday.getFullYear() + "-"+(yesterday.getMonth()+1) + "-" + yesterday.getDate();

console.log(yesterDayDate);

// const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=17b958f2d46a4ed19ee436039fff051c";

// fetch(url).then((res) => {
//     return res.json()
// }).then((data) => {
//     console.log(data);
// })

// $(document).ready(function(){
//     $.ajax({
//         type: "GET",
//         url: url,
//         // data: {
//         //     key_1   :   value_1,
//         //     key_2   :   value_2
//         // },
//         success: function (response) {
//             console.log(JSON.parse(response));
            
//         }
//     });
// })







function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
         center: { lat: -34.397, lng: 150.644 },
         zoom: 8,
     });
     

    //  setTimeout(function(){
    //     alert(`<p style="color: blue;">this is test</p>`);
    //  },3000);
    //  var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
    //              getTileUrl:  function(coord,  zoom)  {  
    //                 return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=a73bafd78ecdd5be3d7b3dac602f4d26d6d86a9c";  
    //              },  
    //              name:  "Air  Quality",  
    //    });  
 
    //  map.overlayMapTypes.insertAt(0,waqiMapOverlay);  
 }

 setTimeout(function(){
    document.getElementById("popup_box").style.display = "flex";
 },3000);



 dragElement(document.getElementById("popup_box"));

//  fetch()



function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  const list_items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22"
  ];
  

fetch("response.json").then(data => data.json()).then(function(news){
  console.log(news.articles);
  DisplayList(news.articles, list_element, rows, current_page);
  SetupPagination(news.articles, pagination_element, rows);
  
})

let current_page = 1;
let rows = 5;

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i].author;

		let item_element = document.createElement('div');
    item_element.classList.add('container');


    
    item_element.innerHTML = `<div class="cardcontainer">`+
    `<div class="photo"> <img src=${paginatedItems[i].urlToImage}></div>`+
    `</div>`;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

function checkAuthor(author){
    
}
 
