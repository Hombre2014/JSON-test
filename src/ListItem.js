import Data from './Data';

const ListItem = ({ item }) => {
  return (
    <tr>
      <Data data={JSON.stringify({ item })} />
    </tr>
  )
}

export default ListItem;
