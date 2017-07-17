// TODO: use template literal to make main (with class of container); center h1; two h2 (class of subheader), two p tags (width: 35% + 65% respectively to start). p tags are flex items (display:flex on container); the story p tag has lightgrey border-left
// TODO: examine github api data
// TODO: create AJAX request to pull info from personal profile and add to p tag

let container = document.querySelector('body');
container.appendChild(mainContent);
let mainContent = `<main>
      <h1></h1>
      <h2 class="subheader"></h2>
      <h2 class="subheader"></h2>
      <p><ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul></p>
      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
    </main>`;

function vCard() {
  let data = JSON.parse(this.responseText);

  data.results.forEach(function(profileData) {

    let name = document.createTextNode(data.name)
    li.appendChild(name);
    });
}

let githubDataReq = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/llhdc");
request.addEventListener("load", starWarsReq);
request.send();
