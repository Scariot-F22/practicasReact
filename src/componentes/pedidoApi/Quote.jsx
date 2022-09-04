
const Quote = ({quote}) => {

    const {text, author} = quote
  return (
    <p style={{width:500}}>
        {text}<br />
        <span style={{fontSize:"large", fontWeight:"bold"}}>- {author}</span>
    </p>
  )
}

export default Quote