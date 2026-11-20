const axios = require("axios");

describe("Reqres API Testing", () => {

 test("GET Users", async () => {

   const response =
   await axios.get(
   "https://reqres.in/api/users?page=2"
   );

   expect(response.status).toBe(200);

   expect(response.data.page).toBe(2);

 });

 test("Create User", async () => {

   const response =
   await axios.post(
   "https://reqres.in/api/users",
   {
      name: "Kiran",
      job: "QA"
   });

   expect(response.status).toBe(201);

   expect(response.data)
    .toHaveProperty("id");

 });

});