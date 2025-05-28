import { useState, useEffect } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";

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
    // TODO
    return "Loading";
  }

  if (error) {
    // TODO
    return "Error";
  }

  return (
    <>
      Hello world
      {contacts.map((contact) => ContactCard(contact))}
    </>
  );
}

export default App;
