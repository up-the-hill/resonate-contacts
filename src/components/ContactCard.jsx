import {
  IconMail,
  IconPhone,
  IconWorldWww,
  IconMapPin,
  IconBuildings,
} from "@tabler/icons-react";

export default function ContactCard(contact) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div key={contact.id} className="card">
      <div className="card-content">
        {/* Contact Header */}
        <div className="contact-header">
          <div className="avatar">
            <div className="avatar-fallback">{getInitials(contact.name)}</div>
          </div>
          <div className="contact-info">
            <h2 className="contact-name" title={contact.name}>
              {contact.name}
            </h2>
            <p className="contact-username" title={`@${contact.username}`}>
              @{contact.username}
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <div className="contact-detail">
            <IconMail className="icon" />
            <span className="text" title={contact.email}>
              {contact.email}
            </span>
          </div>

          <div className="contact-detail">
            <IconPhone className="icon" />
            <span className="text">{contact.phone}</span>
          </div>

          <div className="contact-detail">
            <IconWorldWww className="icon" />
            <span className="text" title={contact.website}>
              {contact.website}
            </span>
          </div>

          <div className="contact-detail">
            <IconMapPin className="icon" />
            <span
              className="text"
              title={`${contact.address.city}, ${contact.address.zipcode}`}
            >
              {contact.address.city}, {contact.address.zipcode}
            </span>
          </div>

          <div className="contact-detail">
            <IconBuildings className="icon" />
            <span className="text" title={contact.company.name}>
              {contact.company.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
