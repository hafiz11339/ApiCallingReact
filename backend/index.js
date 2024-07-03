import express from 'express';

const app = express();

const port = process.env.PORT || 3000;


app.get('/api/products',(req, res) => {
    const products = [{
        "id": 1,
        "first_name": "Jeanette",
        "last_name": "Penddreth",
        "email": "jpenddreth0@census.gov",
        "gender": "Female",
        "ip_address": "26.58.193.2"
      }, {
        "id": 2,
        "first_name": "Giavani",
        "last_name": "Frediani",
        "email": "gfrediani1@senate.gov",
        "gender": "Male",
        "ip_address": "229.179.4.212"
      }, {
        "id": 3,
        "first_name": "Noell",
        "last_name": "Bea",
        "email": "nbea2@imageshack.us",
        "gender": "Female",
        "ip_address": "180.66.162.255"
      }, {
        "id": 4,
        "first_name": "Willard",
        "last_name": "Valek",
        "email": "wvalek3@vk.com",
        "gender": "Male",
        "ip_address": "67.76.188.26"
      }]
    if (req.query.search){
        const filterData = products.filter(products => products.first_name.includes(req.query.search))
        res.send(filterData);
        return;
    }
    setTimeout(() => {
        res.send(products);
    }, 3000);
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});