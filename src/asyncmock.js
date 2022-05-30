const products = [
    {id: '1', category: 'remeras', name: 'remera roja', price: 1200,stock: 200,img:'/images/remeraRoja.jpg'},
    {id: '2', category: 'remeras', name: 'remera azul', price: 2300,stock: 100,img:'/images/remeraAzul.jpg'},
    {id: '3', category: 'remeras', name: 'remera blanca', price: 3000,stock: 80,img:'/images/remeraBlanca.jpg'},
    {id: '4', category: 'buzos', name: 'buzos', price: 15000,stock: 20,img:'/images/buzo.jpg'},
    {id: '5', category: 'camperas', name: 'camperas', price: 17000,stock: 50,img:'/images/campera.jpg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },2000)
    })
}