import { useTodos } from '../context/todos.context'

export default function Todolist()
{
    const _todos = useTodos()


    return (
        <>
            <div className="list-group">
                { _todos.Data.map((el) => (
                <div className="list-group-item" key={el._id}>
                     <div className="row align-items-center">
                         <div className="col-3 d-flex align-items-center">
                             <input type="checkbox" 
                                    className="form-check-input me-2" 
                                    checked={el.complete}  
                                    onChange={ (e) => _todos.changeComplete({ ...el, complete: e.target.checked }) }        
                            />
                             <p className='m-0'>{ el.complete ? 'Complete' : 'Uncomplete' }</p>
                         </div>
                         <div className="col-6">
                             <em className="text-primary">{ el.date }</em>
                             <h4 className={el.complete ? 'completed' : ''}>{ el.title }</h4>
                         </div>
                         <div className="col">
                             <button className="btn btn-success btn-sm" onClick={ () => _todos.edit(el._id) }>Edit</button>
                             <button className="btn btn-danger btn-sm ms-1" onClick={ () => _todos.remove(el._id) }>Remove</button>
                         </div>
                     </div>
                 </div>
                ))}
               
            </div>
        
        </>
    )
}