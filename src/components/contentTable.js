import '../../src/App.css';

export function ContentTable(props) {
  return(
    <>
      <tbody>
        {props.list.map(it => (
          <tr>
            <td className="TD">{it.id}</td>
            <td className="TD">{it.name}</td>
            <td className="TD">{it.price}</td>
            <td className="TD">
              {it.quantity}
              <button onClick={() => props.increment(it.id)}>+</button>
              <button onClick={() => props.decrement(it.id)}>-</button>
            </td>
            <td className="TD">{it.code}</td>
            <td className="TD"><button onClick = {() => props.delete(it.id)}>delete</button></td>
          </tr>
        ))}
      </tbody>    
    </>
  )
}