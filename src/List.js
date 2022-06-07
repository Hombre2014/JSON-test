import ListItem from './ListItem';

const List = ({ listItems }) => {
  return (
    <table>
      <tbody>
        {listItems.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  )
}

export default List;
