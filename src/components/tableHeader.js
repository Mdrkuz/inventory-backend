import '../../src/App.css';
//import {setProductName}  from './find.js'
import { connect } from 'react-redux';
import {
  showAll
} from '../../src/actions.js';

function TableHeader(props) {

  return(
    <div align='center'>
      <table class='styled-table'>
        <thead>
          <tr>
            <th class = "TH"/>
            <th class = "TH">Name 
              <button onClick={() => {props.all(undefined, 'name')}}>asc</button>
              <button onClick={() => {props.all(undefined, 'name', 'desc' || undefined)}}>desc</button>
            </th>
            <th class = "TH">Price 
              <button onClick={() => {props.all(undefined, 'price' , 'asc' || undefined)}}>asc</button>
              <button onClick={() => {props.all(undefined, 'price', 'desc' || undefined)}}>desc</button>
            </th>
            <th class = "TH">Quantity
              <button onClick={() => {props.all(undefined, 'quantity', 'asc' || undefined)}}>asc</button>
              <button onClick={() => {props.all(undefined, 'quantity', 'desc' || undefined)}}>desc</button>
              {/* {setProductName('')} */}
            </th>
            <th class = "TH">id </th>
            <th class = "TH"/>
          </tr>
        </thead>  
        {props.children}
      </table>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  all: (productName, field, direction) => dispatch(showAll(productName, field, direction)) 
})


export default connect(
  null,
  mapDispatchToProps
)(TableHeader); 
