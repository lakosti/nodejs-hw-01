import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const arrayContacts = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(arrayContacts);

    for (let i = 0; i < number; i++) {
      parseContacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(parseContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
