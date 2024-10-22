import { faker } from "@faker-js/faker";
import fs from "fs";
faker.location = {
   country: "Vietnam",
};

const generateUsers = (amount) => {
   const users = [];

   for (let index = 0; index < amount; index++) {
      const randomUser = {
         id: faker.string.uuid(),
         name: faker.person.fullName(),
         email: faker.internet.email(),
         phone: faker.phone.imei(),
         company: faker.company.name(),
         website: faker.internet.url(),
      };
      users.push(randomUser);
   }

   return users;
};

const generateDate = () => {
   /** Khởi tạo data mẫu */
   const users = generateUsers(10);

   /** Tạo các object chứa data mẫu để lưu vào db.json */
   const db = {
      users: users,
      /** Có nhiều data hơn thì mình sẽ để ở dưới này */
   };

   /** Lưu data vào db.json */
   fs.writeFile("db.json", JSON.stringify(db), () => {
      console.log("Save to database json server successfully!!");
   });
};

generateDate();
