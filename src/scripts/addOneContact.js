import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    //отримуємо шлях до файлу
    const arrayContacts = await fs.readFile(PATH_DB, 'utf8');
    // перетворюємо файл з рядка на об'єкт
    const parseContacts = JSON.parse(arrayContacts);

    parseContacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(parseContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
