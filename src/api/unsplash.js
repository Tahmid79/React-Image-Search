import axios from 'axios' ;

export default axios.create({

    baseURL : 'https://api.unsplash.com' ,

    headers : {
    Authorization : 'Client-ID e3afd35ef557bd893bd77f21d44c7926ae1de2ff1d2a16d9a8b12e36a7e74da9'
}


}) ;
