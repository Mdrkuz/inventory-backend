import { connect } from 'react-redux';
import Form from './components/form'
import {ContentTable} from "./components/contentTable"
import Find from './components/find'
import TableHeader from './components/tableHeader'
import './App.css';
import {
  removeLine,
  incrementQuantity,
  decrementQuantity,
} from './actions'

function App(props) { 
  return (
    <div className="App">
      <Find/>
      <Form/> 
      <TableHeader all={props.all}>
        <ContentTable list={props.list} increment={props.increment} decrement={props.decrement} delete={props.delete}/> 
      </TableHeader>      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  }
}

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(removeLine(id)),
  increment: id => dispatch(incrementQuantity(id)),
  decrement: id => dispatch(decrementQuantity(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App); 
