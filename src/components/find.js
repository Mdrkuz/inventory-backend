import {useState} from 'react'
import { connect } from 'react-redux';
import {
  showAll
} from '../../src/actions.js';

function Find(props) {
  const [productName, setProductName] = useState()

  return (
    <div align='right'>
        <input class='search-input' type='text' placeholder='search' value={productName} onChange={e => setProductName(e.target.value)}></input>
        <button  onClick={() => {
          props.all(productName, undefined, undefined)
        }}>find</button>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  all: (productName, field, direction) => dispatch(showAll(productName, field, direction)) 
})


export default connect(
  null,
  mapDispatchToProps
)(Find); 
