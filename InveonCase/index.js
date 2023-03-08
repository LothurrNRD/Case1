var allItems = [
  {
    title: "Korkmaz A1678 Kappa Düdüklü Tencere",
    lastPrice: "750.0",
    newPrice: "355.24",
    discountPerc: "27",
    itemImage: "./images/ii.jpg",
    extraDiscount: "10",
  },
  {
    title: "Korkmaz A1678 Kappa 8 Parça Tencere Seti",
    lastPrice: "250.0",
    newPrice: "450.24",
    discountPerc: "30",
    itemImage: "./images/aa.jpg",
  },
  {
    title: "Korkmaz A1678 Kappa Düdüklü Tencere",
    lastPrice: "740.0",
    newPrice: "375.24",
    discountPerc: "33",
    itemImage: "./images/ii.jpg",
    extraDiscount: "17",
  },
  {
    title: "Korkmaz A1678 Kappa Çaydanlık",
    lastPrice: "740.0",
    newPrice: "375.24",
    discountPerc: "33",
    itemImage: "./images/jj.jpg",
    extraDiscount: "32",
  },
  {
    title: "Korkmaz A1678 Kappa Düdüklü Tencere",
    lastPrice: "750.0",
    newPrice: "355.24",
    discountPerc: "27",
    itemImage: "./images/ii.jpg",
    extraDiscount: "23",
  },
  {
    title: "Korkmaz A1678 Kappa 8 Parça Tencere Seti",
    lastPrice: "250.0",
    newPrice: "450.24",
    discountPerc: "30",
    itemImage: "./images/aa.jpg",
    extraDiscount: "25",
  },
  {
    title: "Korkmaz A1678 Kappa Düdüklü Tencere",
    lastPrice: "740.0",
    newPrice: "375.24",
    discountPerc: "33",
    itemImage: "./images/ii.jpg",
    extraDiscount: "27",
  },
  {
    title: "Korkmaz A1678 Kappa Çaydanlık",
    lastPrice: "740.0",
    newPrice: "375.24",
    discountPerc: "33",
    itemImage: "./images/jj.jpg",
  },
];

function items() {
  var items = ``;
  var extraDsc = 0;
  for (var i = 0; i < allItems.length; i++) {
    items +=
      `<div class="item">
    <img src="` +
      allItems[i].itemImage +
      `" alt="">
    <h4>` +
      allItems[i].title +
      `</h4>
    <div class="description">
        <div class="discount">
            <span class="discountPerc">` +
      allItems[i].discountPerc +
      `%
      </span>
        </div>
        <div class="price">
            <p class="lastPrice">` +
      allItems[i].lastPrice +
      ` TL</p>
            <p class="newPrice">` +
      allItems[i].newPrice +
      ` TL</p>
        </div>
    </div>`;
    if (allItems[i].extraDiscount >= 0) {
      extraDsc = allItems[i].newPrice * (allItems[i].extraDiscount / 100);
      var afterDesc = extraDsc.toFixed(2);
      items +=
        `<div class="extraDiscount"><p class="extraDiscountPerc">Sepette ` +
        allItems[i].extraDiscount +
        `% indirim</p>
      <p class="extraDiscountPrice">` +
      afterDesc +
        ` TL</p>
      </div> </div>`;
    } 
    else {
      items += `</div>`;
    }
  }
  $(".sec2").append(items);
}
function createArray() {
  for (var i = 0; i < 4; i++) {
    if (i <= 2) {
      $(".third").append("<div></div>");
    }
    $(".fourth .sections").append("<div></div>");
  }
}
