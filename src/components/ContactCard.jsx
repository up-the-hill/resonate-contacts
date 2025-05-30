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
    <div
      key={contact.id}
      className="shadow-sm hover:shadow-md transition-shadow duration-200 rounded-xl"
      id="card"
    >
      <div id="card-content" className="p-4">
        {/* Contact Header */}
        <div id="contact-header" className="flex items-center space-x-3 mb-4 bac">
          <div id="avatar-fallback" className="h-12 w-12 flex justify-center items-center bg-gray-500 text-white font-semibold  rounded-full">{getInitials(contact.name)}</div>
          <div id="contact-info" className="flex-1 min-w-0">
            <h2 id="contact-name" title={contact.name} className="text-lg font-semibold text-gray-900 truncate">
              {contact.name}
            </h2>
            <p id="contact-username" title={`@${contact.username}`} className="text-sm text-gray-500 truncate">
              @{contact.username}
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div id="contact-details" className="space-y-3">
          <div id="contact-detail" className="flex items-center space-x-3 text-sm">
            <IconMail id="icon" />
            <span id="text" title={contact.email}>
              {contact.email}
            </span>
          </div>

          <div id="contact-detail" className="flex items-center space-x-3 text-sm">
            <IconPhone id="icon" />
            <span id="text">{contact.phone}</span>
          </div>

          <div id="contact-detail" className="flex items-center space-x-3 text-sm">
            <IconWorldWww id="icon" />
            <span id="text" title={contact.website}>
              {contact.website}
            </span>
          </div>

          <div id="contact-detail" className="flex items-center space-x-3 text-sm">
            <IconMapPin id="icon" />
            <span
              id="text"
              title={`${contact.address.city}, ${contact.address.zipcode}`}
            >
              {contact.address.city}, {contact.address.zipcode}
            </span>
          </div>

          <div id="contact-detail" className="flex items-center space-x-3 text-sm">
            <IconBuildings id="icon" />
            <span id="text" title={contact.company.name}>
              {contact.company.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
