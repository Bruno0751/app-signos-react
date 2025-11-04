import InputDate from '../components/input/InputDate'
import Button from '../components/input/Button'
import useIndex from './hooks/useIndex'

export default function Init() {
  const hooks = useIndex();
  return (
    <div>
      <div className="row">
        <div className='col-md-12'>
          <InputDate
            placeholder="Data Nascimento"
            id="born" 
            name="born"
            width="100%"
          />
        </div>
      </div>
      <div className="row">
        <div className='col-md-12'>
          <Button
            click={ hooks.handleClick }
            text="Signo"
          />
        </div>
      </div>
      <div className="row">
        <div id="answer"></div>
      </div>
    </div>
  );
}
