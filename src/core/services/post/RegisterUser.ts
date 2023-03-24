import {env} from '../../../config/AppConfig';
import UserData from '../../models/UserData';



const registerUserDetails = async ( postData: UserData) => {
    console.log('api parameter data',JSON.stringify(postData));
    const response=await fetch(env.registerEndpoint,{
        method:"POST",
        headers: new Headers({
            'Accept':'*/*',
            'Content-type':'application/json'
        }),
        body: JSON.stringify({
            email:postData.email,
            password: postData.password,
            name:postData.name
        }),
    });
    const responseObject=await response.json();
    console.log('Response Object',responseObject);

    return response;
}

export {registerUserDetails}