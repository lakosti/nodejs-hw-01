import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const arrayContacts = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(arrayContacts);
    return parseContacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
