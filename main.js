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
          <h2 class="subheader">The Story</h2>
          <p id ="bio">Wolf waistcoat franzen four dollar toast. Listicle plaid try-hard normcore mustache. Beard lo-fi waistcoat, wolf heirloom lomo raw denim cray four dollar toast hoodie organic thundercats. Chicharrones knausgaard migas umami iPhone cliche whatever single-origin coffee drinking vinegar readymade shoreditch mustache pop-up blog subway tile. Retro lomo vinyl readymade truffaut normcore offal snackwave quinoa pop-up semiotics fashion axe selfies. Street art truffaut vice art party.</p >
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
