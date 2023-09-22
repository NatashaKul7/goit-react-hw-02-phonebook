export const Contacts = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (  <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => handleDelete(name)}>Delete</button>
          </li>);
      })}
    </ul>
  );
};
