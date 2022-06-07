import ListItem from './ListItem';

const List = ({ listItems }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {listItems.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List;
