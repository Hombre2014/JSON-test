const Data = ({ data }) => {
  const info = Object.entries(JSON.parse(data))[0][1]
  const details = Object.entries(info).map(([key, value]) => (`${value}`));
  return (
    <td>{details}</td>
  )
}

export default Data;
