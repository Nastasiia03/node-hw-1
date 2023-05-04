const fs = require('fs').promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
    const text = await fs.readFile(contactsPath);
    return JSON.parse(text);
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id = contactId);
    return result || null;
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
    listContacts,
    getContactById
};