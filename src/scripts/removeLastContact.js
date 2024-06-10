import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const arrayContacts = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(arrayContacts);

    const lastEl = parseContacts.length - 1;

    if (parseContacts.length > 0) {
      parseContacts.splice(lastEl, 1);
      await fs.writeFile(PATH_DB, JSON.stringify(parseContacts, null, 2));
    } else {
      console.log('Sorry, no contacts');
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
