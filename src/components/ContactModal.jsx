import {
  IconMail,
  IconPhone,
  IconWorldWww,
  IconMapPin,
  IconBuildings,
} from "@tabler/icons-react";

export default function ContactModal(props) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white max-w-md w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 pt-10">
          {/* Contact Profile */}
          <div className="flex flex-col items-center text-center mb-6">
            <div
              id="avatar"
              className="h-20 w-20 flex justify-center items-center bg-gray-500 text-white font-semibold rounded-full"
            >
              {getInitials(props.contact.name)}
            </div>
            <h3 className="text-2xl pt-4 font-bold text-gray-900">
              {props.contact.name}
            </h3>
            <p className="text-gray-500">@{props.contact.username}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <IconMail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {props.contact.email}
                    </p>
                    <p className="text-xs text-gray-500">Email</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <IconPhone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {props.contact.phone}
                    </p>
                    <p className="text-xs text-gray-500">Phone</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <IconWorldWww className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {props.contact.website}
                    </p>
                    <p className="text-xs text-gray-500">Website</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <IconMapPin className="h-4 w-4 mr-2" />
                Address
              </h4>
              <div className="text-sm text-gray-700">
                <p>
                  {props.contact.address.street} {props.contact.address.suite}
                </p>
                <p>
                  {props.contact.address.city}, {props.contact.address.zipcode}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Coordinates: {props.contact.address.geo.lat},{" "}
                  {props.contact.address.geo.lng}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <IconBuildings className="h-4 w-4 mr-2" />
                Company
              </h4>
              <div className="text-sm">
                <p className="font-medium text-gray-900">
                  {props.contact.company.name}
                </p>
                <p className="text-gray-600 italic mt-1">
                  "{props.contact.company.catchPhrase}"
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2 mt-6 pt-4 border-t border-gray-100">
            <button
              className="p-4 flex flex-1 items-center justify-center hover:cursor-pointer"
              onClick={() => window.open(`mailto:${props.contact.email}`)}
            >
              <IconMail className="h-4 w-4 mr-2" />
              Email
            </button>
            <button
              className="p-4 flex flex-1 items-center justify-center hover:cursor-pointer"
              onClick={() => window.open(`tel:${props.contact.phone}`)}
            >
              <IconPhone className="h-4 w-4 mr-2" />
              Call
            </button>
          </div>
        </div>
      </div>
  );
}
