import { useTodos } from '../context/todos.context'

export default function Todopopup()
{

    const _todos = useTodos()

    return (
        <>
        <div className="popup-wrap">
            <div className="popup">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4>Edit todo</h4>
                    <button className="btn-close" onClick={ () => _todos.setPopup(false) }></button>
                </div>
                <form onSubmit={ _todos.save }>
                    <div className="py-1">
                        <label htmlFor="" className="form-label fw-bold">Todo title</label>
                        <input type="text" 
                               className="form-control" 
                               onInput={ (e) => _todos.inputForm('title', e.target.value )} 
                               defaultValue={_todos.Form.title}       
                               
                        />
                    </div>
                    <div className="py-1">
                        <label htmlFor="" className="form-label fw-bold">Todo complete</label>
                        <div className="col-3 d-flex align-items-center mt-2">
                             <input type="checkbox" 
                                    className="form-check-input me-2" 
                                    onChange={ (e) => _todos.inputForm('complete', e.target.checked) }
                                    defaultChecked={ _todos.Form.complete } 
                            />
                             <p className='m-0'>{ _todos.Form.complete ? 'Complete' : 'Uncomplete' }</p>
                         </div>
                    </div>
                    
                    <div className="py-1">
                        <button className="btn btn-success">Save</button>
                    </div>
                    <p className={`text-${ _todos.Notify.err ? 'danger' : 'success' }`}>{ _todos.Notify.text }</p>
                </form>
            </div>
        </div>
        </>
    )
}