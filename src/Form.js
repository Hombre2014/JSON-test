import Button from './Button';

const Form = ({ item, setItem }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText="users"
        item={item}
        setItem={setItem}
      />
      <Button
        buttonText="posts"
        item={item}
        setItem={setItem}
      />
      <Button
        buttonText="comments"
        item={item}
        setItem={setItem}
      />
    </form>
  )
}

export default Form;
