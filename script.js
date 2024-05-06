import 'regenerator-runtime/runtime'; // To avoid "regeneratorRuntime is not defined" error
import axios from 'axios';


let input = document.createElement('input')

input.setAttribute('id', 'srchBar')

document.body.append(input) ;

document.getElementById('srchBar').onclick = search

function search(){
    // const term = document.getElementById('srchBar').value;
    getData()
}

const baseUrl = 'https://api.mangadex.org';

async function getData(){
    const mangaID = 'f98660a1-d2e2-461c-960d-7bd13df8b76d';

const baseUrl = 'https://api.mangadex.org';

const resp = await axios({
    method: 'GET',
    url: `${baseUrl}/manga/${mangaID}/feed`
});

console.log(resp.data.data.map(chapter => chapter.id));
}

