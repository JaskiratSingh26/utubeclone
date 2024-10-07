

let baseurl = "https://youtube138.p.rapidapi.com"
const options = {

  headers: {
    // method: 'GET',
    'x-rapidapi-key': 'efd222ad41msh33dc16b9c374313p173472jsn3184974ac635',
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};
//  still remain  request  ec360156afmsh41783fc0dee4137p19b2ebjsn5782435dbd9e
// f65d8a8c9bmsh7edb22cb005ba69p15a2e1jsnf8644b1d5edb
// meri   c2f57d27e1mshc886441bdb2b492p15adebjsn0bc170c56a18
// f19363efcdmshbcf2d32ac722434p161f86jsn23e090a014f5
async function Apidata(url) {


//   console.log('Apidata function called with URL:', url);
  try {
    const data = await fetch(`${baseurl}/${url}`, options);

    let ans = await data.json()
    console.log('api res',ans);
   
    return ans;

  } catch (error) {
    console.error(error, 'fetching data time error '); // Log the error
    // or return an error message
    throw error;
  }

}


module.exports = Apidata