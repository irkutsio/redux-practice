const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const getProducts = async() => {
const data = await fetch(`${BASE_URL}/products`)
return await data.json()
}