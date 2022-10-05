let func = (a) => {
  let opened = window.open("");
  opened.document.write(
    `<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="../imgs/favicon.png" />

    <link rel="stylesheet" href="bootstrap_res/bootstrap.min.css" />
    <link rel="stylesheet" href="css/posts.css" />
    <link rel="stylesheet" href="css/head.css" />
    <link rel="stylesheet" href="/css/foot.css" />
    <link rel="stylesheet" href="/css/universal.css" />
    <link href="fontawesome_res/all.min.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="fontawesome_res/fontawesome.min.css"
      integrity="sha512-8Vtie9oRR62i7vkmVUISvuwOeipGv8Jd+Sur/ORKDD5JiLgTGeBSkI3ISOhc730VGvA5VVQPwKIKlmi+zMZ71w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>Document</title>
    </head>
    <body>
    <!-- Header Start -->
    <header id="whole_head">
      <div class="container">
        <!-- Logo Start -->
        <div>
          <h1 id="logo">Techcetera</h1>
          <hr class="w-50 mx-auto" />
        </div>
        <!-- Logo End -->

        <!-- Navbar Start -->
        <nav class="d-block w-50 mx-auto head-nav">
          <ul class="">
            <li><a id="active" href="index.html">Home</a></li>
            <li><a href="posts.html">Posts</a></li>
            <li><a href="submit.html">Create</a></li>
          </ul>
        </nav>
        <!-- Navbar End -->
      </div>
    </header>
    <!-- Header End -->
    <!-- Main Start -->
    
    <main>
      <div class="container">
      <h1 class="text-capitalize text-center mt-3 post-h">${localStorage.getItem(
        `page${a}.heading`
      )}</h1> 
    <p class="text-center my-4">${localStorage.getItem(
      `page${a}.paragraph`
    )}</p>
    
    <img src="${localStorage.getItem(
      `page${a}.image`
    )}" alt="Some difficulty occured while loading the Image" width="350px" class="d-block mx-auto">
      </div>    
    
    </main>
    <!-- Main End -->
    


     <!-- Footer Start -->
    <footer class="whole-foot pt-4">
      <nav class="w-50 mx-auto foot-nav">
        <ul>
          <li>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-instagram-square"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-twitter-square"></i></a>
          </li>
        </ul>
      </nav>
      <hr class="w-50 mx-auto" />
      <div>
        <h5 class="text-center py-2 mb-auto">
          Copyright &copy;2022 | All Rights Reserved by
          <a href="#">Techcetera</a>
        </h5>
      </div>
    </footer>
    <!-- Footer End -->
    </body>
    </html>`
  );
};

// for (let i = 1; i <= localStorage.length / 3; i++) {
//   let btn = document.createElement("button");
//   // let btnatt = document.createAttribute("onclick");
//   btn.innerHTML = `Hello${i}`;
//   btn.setAttribute("onclick", `func(${i})`);
//   document.body.appendChild(btn);
// }

// get Main Div
let mainDiv = document.getElementById("main-div");

for (let i = 1; i <= localStorage.length / 4; i++) {
  // The post Start

  let wholepost = document.createElement("div");
  wholepost.className = "whole_div";
  wholepost.style.display = localStorage.getItem(`page${i}.display`);

  wholepost.setAttribute("id", `post${i}`);

  let post_div = document.createElement("div");
  post_div.className = "post-div p-3";

  post_div.setAttribute("onclick", `func(${i})`);

  // The Post heading Start
  let postH = document.createElement("h3");
  postH.className = "text-center";
  postH.innerHTML =
    localStorage.getItem(`page${i}.heading`).trim().slice(0, 30) + "...";
  post_div.appendChild(postH);
  // The Post heading End

  // Some text of The Post Start
  let postP = document.createElement("p");
  postP.className = "text-justify px-3 py-2";
  postP.innerHTML =
    localStorage.getItem(`page${i}.paragraph`).trim().slice(0, 250) + "...";

  post_div.appendChild(postP);
  // Some text of the Post End

  wholepost.appendChild(post_div);

  // Delete Button Start
  let postBtn = document.createElement("button");
  postBtn.className = "d-block mx-auto mt-3";
  postBtn.innerHTML = "Delete this post";
  postBtn.setAttribute("onclick", `dltPost(${i})`);

  // The Icon of the Delete Button Start
  let trashIcon = document.createElement("i");
  trashIcon.className = "fa-regular fa-trash-can";
  postBtn.appendChild(trashIcon);
  // The Icon of the Delete Button End

  wholepost.appendChild(postBtn);
  let hrzn_ln = document.createElement("hr");
  wholepost.appendChild(hrzn_ln);
  // Delete Button End

  mainDiv.appendChild(wholepost);
  // The Post End
}
