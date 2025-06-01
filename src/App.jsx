import { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import { IconLoader2 } from "@tabler/icons-react";

function App() {
  const [contacts, setContacts] = useState([]);
  let [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <IconLoader2 className="animate-spin h-8 w-8" />
      </div>
    );
  }

  if (error) {
    // TODO
    return "Error";
  }

  return (
    <>
      <Header />
      <div
        className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        id="contacts-container"
      >
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
}

export default App;
