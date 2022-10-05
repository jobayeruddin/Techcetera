let static_post = (h, p, img) => {
  let opened = window.open("");
  opened.document.write(
    `<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="imgs/favicon.png" />

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
      <h1 class="text-capitalize text-center mt-3 post-h">${h}</h1> 
    <p class="text-center my-4 text-capitalize">${p}</p>
    
    <img src="${img}" alt="Some difficulty occured while loading the Image" width="350px" class="d-block mx-auto">
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

// MetaVerse Post Start
let metav = document.getElementById("metav");
let metah = document.getElementById("metah").innerHTML;
let metav_text =
  " the metaverse is understood as a graphically rich virtual space, with some degree of verisimilitude, where people can work, play, shop, socialize — in short, do the things humans like to do together in real life (or, perhaps more to the point, on the internet). Metaverse proponents often focus on the concept of “presence” as a defining factor: feeling like you’re really there, and feeling like other people are really there with you, too.This version of the metaverse arguably already exists in the form of video games. But there’s another definition of the metaverse that goes beyond the virtual worlds we know. This definition doesn’t actually describe the metaverse at all, but does explain why everyone thinks it’s so important. This definition isn’t about a vision for the future or a new technology. Rather, it looks to the past and to the now commonplace technologies of the internet and smartphones, and assumes that it will be necessary to invent the metaverse to replace them";
metav.innerHTML = metav_text.slice(0, 250) + "...";
let metav_post = () => {
  static_post(metah, metav_text, "../imgs/meta.jpeg");
};
// MetaVerse Post End
// Neuralink Brain Chip Post Start
let neubc = document.getElementById("neubc");
let neubch = document.getElementById("neubch").innerHTML;
let neubc_text =
  " The chip Neuralink is developing is about the size of a coin, and would be embedded in a person's skull. From the chip, an array of tiny wires, each roughly 20 times thinner than a human hair, fan out into the patient's brain.The wires are equipped with 1,024 electrodes which are able to monitor brain activity  and, theoretically, electrically stimulate the brain. This data is transmitted wirelessly via the chip to computers, where it can be studied by researchers.A robot would work by using a stiff needle to punch the flexible wires emanating from a Neuralink chip into a person's brain, a bit like a sewing machine.Neuralink released video of a macaque monkey named Pager playing video games such as 'Pong' for banana-smoothie rewards.Pager played the games using a joystick that was disconnected from the games console, meaning he was controlling the cursor using his brain signals as his arm moved. ";
neubc.innerHTML = neubc_text.slice(0, 250) + "...";
let neubc_post = () => {
  static_post(neubch, neubc_text, "../imgs/neubc.jpg");
};
// Neuralink Brain Chip Post End
// Blockchain Post Start
let blk_chn = document.getElementById("blk_chn");
let blk_chnh = document.getElementById("blk_chnh").innerHTML;
let blk_chn_text =
  " Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system.A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger. The decentralised database managed by multiple participants is known as Distributed Ledger Technology (DLT).Blockchain is a type of DLT in which transactions are recorded with an immutable cryptographic signature called a hash.This means if one block in one chain was changed, it would be immediately apparent it had been tampered with. If hackers wanted to corrupt a blockchain system, they would have to change every block in the chain, across all of the distributed versions of the chain.Blockchains such as Bitcoin and Ethereum are constantly and continually growing as blocks are being added to the chain, which significantly adds to the security of the ledger.";
blk_chn.innerHTML = blk_chn_text.slice(0, 250) + "...";
let blk_chn_post = () => {
  static_post(blk_chnh, blk_chn_text, "../imgs/blk_chn_img.png");
};
// Blockchain Post End
