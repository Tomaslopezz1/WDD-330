import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `
    <li class="product-card">
      <a href="product_pages/index.html?product=${product.Id}">
        <img src="${product.ImageUrl}" alt="Image of ${product.Name}" /> 
        <h2 class="card__brand">${product.Brand}</h2>
        <h3 class="card__name">${product.Name}</h3>
        <p class="card__price">${product.Price}</p>
        </a>
      </li>`
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
    async init() {
    const list = await this.dataSource.getData();
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}


