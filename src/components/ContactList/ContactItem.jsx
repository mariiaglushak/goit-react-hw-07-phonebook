import { Item,ItemNumber,ItemBtnDel } from "./ContactItemStyle";


const ContactItem = ({ id, name, number, onDeleteContact,text }) => {

  return (
    <Item key={id}>
          {name}:<ItemNumber>{number}</ItemNumber>
          <ItemBtnDel type="button" onClick={() => onDeleteContact(id)}>
            {text}
          </ItemBtnDel>
        </Item>
  );
};

export default ContactItem;