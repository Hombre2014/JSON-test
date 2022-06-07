import Data from './Data';

const ListItem = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return (
          <Data key={key} cellData={JSON.stringify(value)} />
        )
      })}
    </tr>
  )
}

export default ListItem;
