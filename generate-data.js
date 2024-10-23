import { faker } from "@faker-js/faker";
import fs from "fs";
const generateRandomUser = (count) => {
   const users = [];

   for (let index = 0; index < count; index++) {
      const user = {
         id: faker.string.uuid(),
         firstName: faker.person.firstName(),
         lastName: faker.person.lastName(),
         email: faker.internet.email(),
         avatar: faker.image.avatar(),
         jobTitle: faker.person.jobTitle(),
         phone: faker.phone.number(),
         company: faker.company.name(),
         website: faker.internet.url(),
      };

      users.push(user);
   }

   return users;
};

const generateRandomCategories = (count) => {
   const categories = [];

   for (let index = 0; index < count; index++) {
      const category = {
         id: faker.string.uuid(),
         name: faker.commerce.department(),
         image: faker.image.urlLoremFlickr(),
      };

      categories.push(category);
   }

   return categories;
};

const generateRandomProducts = (categories, count) => {
   const products = [];

   for (let index = 0; index < categories.length; index++) {
      const element = categories[index];

      for (let i = 0; i < count; i++) {
         const product = {
            categoryId: element.id,
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.urlLoremFlickr(),
            quality: faker.number.int({ max: 100 }),
         };
         products.push(product);
      }
   }

   return products;
};

const generateData = () => {
   /** Tạo data mẫu */
   const users = generateRandomUser(50);
   const categories = generateRandomCategories(5);
   const products = generateRandomProducts(categories, 10);

   /** Tạo object chứa bảng database */
   const object = {
      users: users,
      categories: categories,
      products: products,
      profile: {},
   };

   /** lưu object data vào database */
   fs.writeFile("db.json", JSON.stringify(object), () => {
      console.log("Lưu data thành công");
   });
};

generateData();
