import { IconAddressBook } from "@tabler/icons-react";

export default function Header() {
  return (
    <header>
      <div
        id="header-container"
        className="flex justify-center items-center p-4 font-bold"
      >
        <IconAddressBook size={48} className="px-1" />
        <h1 className="text-3xl">Contacts</h1>
      </div>
    </header>
  );
}
