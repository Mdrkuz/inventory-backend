import {useState} from 'react'
import { connect } from 'react-redux';
import {
  createLine,
  showAll
} from '../../src/actions.js';

function Form(props) {  
  const [name, setNewListName] = useState()
  const [price, setNewListPrice] = useState()
  const [quantity, setNewListQuantity] = useState()

  return (
    <div>
      <input  type='text' placeholder='product'  value={name} onChange={e => setNewListName(e.target.value)}/>
      <input  type='text' placeholder='price'  value={price} onChange={e => setNewListPrice(e.target.value)}/>
      <input  type='text' placeholder='quantity'  value={quantity} onChange={e => setNewListQuantity(e.target.value)}/>
      <button onClick={() => {
        setNewListName('')
        setNewListPrice('')
        setNewListQuantity('')
        console.log(props);
        props.create(name, price, quantity)
      }}> add </button> 
      <button onClick={() => {
        props.all();
      }}>all</button>
    </div> 
 );
}


const mapDispatchToProps = dispatch => ({
  create: (name, price, quantity) => dispatch(createLine(name, price, quantity)),
  all: (productName, field, direction) => dispatch(showAll(productName, field, direction)) 
})


export default connect(
  null,
  mapDispatchToProps
)(Form); 
