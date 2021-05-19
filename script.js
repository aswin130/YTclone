const apiKey = 'AIzaSyD_cFk6_5jAf1ipgXEMNOqkzcygfYy2e0Q'
// const clientId = '801417344899-p395bgf0i6f2kruuihb3pqipuvo0tkl0.apps.googleusercontent.com'
// let URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=&type=video&q=$https://www.googleapis.com/discovery/v1/apis/youtube/v3/re
let acturl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${apiKey}&maxResults=5`;
var search ="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD_cFk6_5jAf1ipgXEMNOqkzcygfYy2e0Q&type=video&q=";
// let post = "https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";

async function channeldetails() {
    var response = await fetch (acturl);
    var details = await response.json();
    console.log(details);
}
channeldetails();
// Search with query
async function searchdetails(URL) {
    var response = await fetch (URL);
    var details = await response.json();
    console.log(details);
    var ul = document.getElementById('video-content');
    var content = "";
    var sinppet = null;
    details.items.forEach(element => {
       snippet = element.snippet 
       // rendering the list of search details and embeded video into it
       content+=`<li>
        <div>
            <img src= ${snippet.thumbnails.default.url} width="120" height="90">
            <div class="mainpage-content">
                <a href="http://www.youtube.com/embed/${element.id.videoId}"> 
                    ${snippet.title}
                </a>
                <h5>${snippet.channelTitle}</h5>
                <p>${snippet.description}</p>
            </div>
        </div>
    </li>`
        
    });
    ul.innerHTML = content; 
}
searchdetails(search)
function searchbykeyword () {                                                   //search by userinput 
    var searchtext = document.getElementById('search').value;
    searchdetails(search+searchtext);
}
// click event to submit button
const button = document.getElementById('submit');

button.addEventListener('click', function () {
    searchbykeyword();
});
// var req = new XMLHttpRequest();
// req.open("GET", acturl);
// req.send();
// req.onload = () => {
// 	console.log(req);
// 	if(req.status == 200) {
// 		console.log(JSON.parse(req.response));
// 	}else {
// 		console.log(`error ${req.status} ${req.statusText}`)
// 	}
// }

// const button = document.getElementById('search');

// button.addEventListener('click', function () {
//     fetch(search)
//         .then(function (result) {
//             console.log(result);
//         })
//         .catch(function (err) {
//             console.error(err);
//         });
// });
// var searchDisplay = async () => {
//     var searchvalue = document.getElementById('search').value;
//     var searchURL = search.${searchvalue};
//     try {
//         var response = await fetch(searchURL);
//         var result = await response.json();

//         var values = results.values;

//         values.forEach(element => {
//             var v = document.getElementById('videos');
//             v.innerHTML =`<iframe width = "420" heigth= "315" src="http://www.youtube.com/embed/${element.id.videoID}" frameborder="0" 
//             allowfullscreen> </iframe>`;
//         });
//     }catch (error) {
//         console.log(error)
//     }
// }
// document.getElementById("submit").addEventListener("click", searchDisplay , true);