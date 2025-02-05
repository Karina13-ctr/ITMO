import { useTodos } from '../context/todos.context'

export default function Todotabs()
{
    const _todos = useTodos()

    return (
        <>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked={true} onChange={() => _todos.switchTab('all')} />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onChange={() => _todos.switchTab('complete')} />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Completed</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"  onChange={() => _todos.switchTab('uncomplete')}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio3">Uncompleted</label>
        </div>            
        </>
    )
}