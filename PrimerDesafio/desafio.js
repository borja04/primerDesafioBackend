
class ProductManager {
    constructor() {
        this.products = [];
    }

    //agregar producto al array
    addProduct(product) {
        if (!this.isCodeUnique(product.code)) {
            throw new Error('El codigo ya está en uso.');
        }

        this.products.push(product);
    }

    //  validar que el codigo del producto no se repita
    isCodeUnique(code) {
        return this.products.every((product) => product.code !== code);
    }

    // devolver todos los productos
    getProducts() {
        return this.products;
    }

    // obtener un producto por su codigo
    getProductById(code) {
        return this.products.find((product) => product.code === code);
    }


}


// creo algunos productos
const product1 = {
    title: 'Producto 1',
    description: 'Descripcion  producto 1',
    price: 10.99,
    thumbnail: 'ruta/imagen1.jpg',
    code: 4342,
    stock: 12,
};

const product2 = {
    title: 'Producto 2',
    description: 'Descripcion  producto 2',
    price: 238,
    thumbnail: 'ruta/imagen2.jpg',
    code: 5453,
    stock: 76,
};

// instancia de ProductManager
const productManager = new ProductManager();

// agregar productos a la instancia
try {
    productManager.addProduct(product1);
    productManager.addProduct(product2);
} catch (error) {
    console.error(error.message);
}

// devolver todos los productos 
const allProducts = productManager.getProducts();
console.log(allProducts);

// devolver un producto por su codigo
const productIdToFind = 4342;
const productById = productManager.getProductById(productIdToFind);
console.log(productById);

