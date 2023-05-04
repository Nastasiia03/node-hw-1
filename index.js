const contacts = require("./contacts");

const invokeAction = async ({ action, id}) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);
    }
}

invokeAction({action: "list"})