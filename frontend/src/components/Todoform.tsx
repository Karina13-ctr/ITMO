import { useTodos } from '../context/todos.context'

export default function Todoform()
{
    const _todos = useTodos()

    return (
        <>
        <form onSubmit={ _todos.add }>
            <div className="py-1">
                <label htmlFor="" className="form-label">Todo title</label>
                <input type="text" className="form-control" onInput={ (e) => _todos.inputForm('title', e.target.value )} />
            </div>
            <div className="py-1">
                <button className="btn btn-success">Create</button>
            </div>
            <p className={`text-${ _todos.Notify.err ? 'danger' : 'success' }`}>{ _todos.Notify.text }</p>
        </form>
        </>
    )
}