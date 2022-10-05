class page {
  constructor(head, para, img) {
    this.heading = head;
    this.paragraph = para;
    this.image = img;
  }
}
let head = document.getElementById("head");
let para = document.getElementById("para");
let img = document.getElementById("img");

let datastore = () => {
  if (
    head.value.trim() != (null || " ") &&
    head.value.trim().length > 0 &&
    para.value.trim() != (null || " ") &&
    para.value.trim().length > 0
  ) {
    let pagenum = localStorage.length / 4 + 1;
    window["page" + pagenum] = new page(head.value, para.value, img.value);

    localStorage.setItem(
      `page${pagenum}.heading`,
      eval("page" + pagenum).heading
    );
    localStorage.setItem(
      `page${pagenum}.paragraph`,
      eval("page" + pagenum).paragraph
    );
    localStorage.setItem(`page${pagenum}.image`, eval("page" + pagenum).image);
    localStorage.setItem(`page${pagenum}.display`, "block");
    document.location.reload();
  } else {
    alert(
      "One of your heading or blog section is empty.You have to fill it out to submit"
    );
  }
};

// let localStoLength = () => {
//   for (let i = 0; typeof localStorage.key(i); i++) {
//     if (localStorage.key(i) === null) {
//       len = i;
//       break;
//     }
//   }

//   return len;
// };
// console.log(localStoLength());

// console.log(storeVal);
