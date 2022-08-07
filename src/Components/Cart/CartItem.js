import Button from '@mui/material/Button'

const Cartitem = ({ item, onAdd, onRemove }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',

        borderBottom: 1,
        paddingBottom: 20,
      }}
    >
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.qty * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => onRemove(item)}
          >
            -
          </Button>
          <p>{item.qty}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => onAdd(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.thumb_image} alt={item.title} />
    </div>
  )
}

export default Cartitem
