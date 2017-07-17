// TODO: use template literal to make main (with class of container); center h1; two h2 (class of subheader), two p tags (width: 35% + 65% respectively to start). p tags are flex items (display:flex on container); the story p tag has lightgrey border-left

let container = document.querySelector('body');
let mainContent = `
      <h1></h1>
      <div>
      <h2 class="subheader"></h2>
      <ul>
        <li><span></span></li>
        <li><span id="url"></span></li>
        <li><span id="company"></span></li>
        <li><span id=""></span></li>
      </ul>
      </div>
      <div>
        <h2 class="subheader"></h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
      </div>
    `;

container.innerHTML = mainContent;

function vCard() {
  let data = JSON.parse(this.responseText);

  let name = document.createTextNode(data.name)
  let nameSpan = document.querySelector('span');
  nameSpan.appendChild(name);
  console.log(name);

  let url = document.createTextNode(data.url)

  // let li = document.querySelector('li')
  // let liText1 = document.createTextNode()
  li.appendChild(url);

  let companySpan = document.getElementById('company')
  let companySpanContent = document.createTextNode(data.company)
  companySpan.appendChild(companySpanContent);
  li.appendChild(company);
};

let githubDataReq = new XMLHttpRequest();
githubDataReq.open("GET", "https://api.github.com/users/llhdc");
githubDataReq.addEventListener("load", vCard);
githubDataReq.send();
