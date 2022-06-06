const ListItem = ({ item }) => {
  return (
    <li>
      <p>{JSON.stringify({ item })}</p>
    </li>
  )
}

export default ListItem;
