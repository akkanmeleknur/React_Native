import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer OIKlHAWYqkaTk0fQGHJoe3fsjMJcpZfqSZn8R-ElW6GmNcFK0faiAKzuEroTjHknVp2ll3teuniawskNpG3rYhU4SyNWyHuW7vsMEWYSPLTqVsVZ1qSnM-ulkn5DZ3Yx',
    },
});