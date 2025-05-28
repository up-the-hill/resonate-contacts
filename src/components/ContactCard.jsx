export default function ContactCard(contact) {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <div className="name">{contact.name}</div>
        <div className="company-name">{contact.company.name}</div>
      </div>
      <div className="username">{contact.username}</div>
      <div className="email">{contact.email}</div>
      <div className="website">{contact.website}</div>
    </div>
  );
}
