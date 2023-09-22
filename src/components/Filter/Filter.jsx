export const Filter = ({ name, handleFilterChange }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleFilterChange}
        // onClick={() => filterContacts(name)}
      />
    </div>
  );
};
