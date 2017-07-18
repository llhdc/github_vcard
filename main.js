let container = document.querySelector('body');


function vCard() {
  let data = JSON.parse(this.responseText);
  let mainContent = `
        <h1>Leonard Horne</h1>
        <main>
        <section class="profileData">
        <h2 class="subheader">The Basics</h2>
        <ul>
          <li><span id="name">Name: ${data.name}</span></li>
          <li><span id="url">${data.url}</span></li>
          <li><span id="company">${data.company}</span></li>
          <li><span id="website">${data.blog}</span></li>
        </ul>
        </section>
        <section class="story">
          <h2 class="subheader"></h2>
          <p id ="bio">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p >
        </section>
        <section>
          <img src="" alt="">
        </section>
        </main>
      `;

  container.innerHTML = mainContent;
};

let githubDataReq = new XMLHttpRequest();
githubDataReq.open("GET", "https://api.github.com/users/llhdc");
githubDataReq.addEventListener("load", vCard);
githubDataReq.send();
