import ListItem from './ListItem';

const List = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default List;
