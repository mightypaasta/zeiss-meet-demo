/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { env } from "../../../config/AppConfig";
import UserData from "../../models/UserData";
/* istanbul ignore next */

// BACKUP COPY
// const getUserDetails = async (emailId: any) => {
//     const url = `${env.userInfoEndpoint}${emailId}`;
//     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//     });
//     return response;
// };

const getUserDetails = async (data: UserData) => {
  // const url = `${env.userInfoEndpoint}${data}`;
  console.log("api parameter data", data);
  const response = await fetch(env.loginEndpoint, {
    // method: "POST",
    // mode: "no-cors",
    // headers: { Accept: "*/*", "Content-Type": "application/json" },
    // body: JSON.stringify({
    //   email: data.email,
    //   password: data.password,
    // }),
    method: "POST",
    headers: new Headers({
      'Accept': "application/json, text/plain",
      'Content-Type': "application/json",
    }),
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
  const responseText=await response.text();
  console.log("Response Text",responseText);
  const postData = {
    email: "baba@test.com",
    password: "baba",
  };
  console.log(JSON.stringify(postData));
  // const url = "http://localhost:5010/api/account/login";
//   const requestOptions = {
//     method: "POST",
//     mode: "no-cors"
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email: "baba@test.com", password: "baba" }),
//   };
//   const response = fetch(url, requestOptions).then((response) =>
//     response.json()
//   );
  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: { Accept: "*/*", "Content-Type": "application/json" },
  //     body: "",
  //   });
  return response;
};
export { getUserDetails };
