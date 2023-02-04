const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");
const { v4: uuidv4 } = require("uuid");

const listContacts = async () => {
  const dataString = await fs.readFile(contactsPath);
  const data = JSON.parse(dataString);
  return data;
};

const getContactById = async (contactId) => {
  const allContacts = await listContacts();

  const reqCont = allContacts.find((cont) => cont.id === contactId);
  if (!reqCont) {
    return null;
  }
  return reqCont;
};

const removeContact = async (contactId) => {
  const allContacts = await listContacts();

  const newContactsList = allContacts.filter((cont) => cont.id !== contactId);

  if (newContactsList.length === allContacts.length) {
    return null;
  }
  const deletedContact = allContacts.find((cont) => cont.id === contactId);

  await fs.writeFile(contactsPath, JSON.stringify(newContactsList));

  return deletedContact;
};

const addContact = async ({ name, email, phone }) => {
  const newCont = { id: uuidv4(), name, email, phone };

  const allContacts = await listContacts();

  const newContactList = [...allContacts, newCont];

  await fs.writeFile(contactsPath, JSON.stringify(newContactList));

  return newCont;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const allContacts = await listContacts();
  const contIndex = allContacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contIndex === -1) {
    return null;
  }
  allContacts[contIndex] = { id: contactId, name, email, phone };

  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[contIndex];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
