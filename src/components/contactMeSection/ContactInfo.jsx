import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="developchris89@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="573159949515" Image={FiPhone} />
      <SingleInfo text="Bogotá, Colombia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
