import axios from "axios";

export  async function fetchFilms() {
    try {
        const response = await axios.get('http://192.168.1.104:5000');
        return response.data;
    } catch (e) {
        console.error('Error fetching films', e);
        throw e;
    }
}

// async putPass() {
//         try {
//             const response = await axios.get("http://192.168.1.104:5000/getpass?pass=jopa");
//             console.log(response)
//         } 
//         catch (e) {
//             alert('Errrrrrorrrr')
//         }

//         localStorage.setItem('userToken', 'myAuthToken');

    // },