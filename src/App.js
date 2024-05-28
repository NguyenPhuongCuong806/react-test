import { useState } from 'react';
import './App.scss'

const App = () => {

  let arr = [
    { id: 1, name: "truong", start: false },
    { id: 2, name: "nguyen van a", start: false },
    { id: 3, name: "nguyen van b", start: false },
  ]

  const [arrobj, setarrobj] = useState(arr)

  const [name, setname] = useState("truong");
  const [nameupdate, setnameupdate] = useState();


  const handleOnChange = (e) => {
    setname(e.target.value)
  }

  const handleClick = () => {
    let cparr = [...arrobj];
    let obj = { id: cparr.length + 1, name: name }

    cparr.push(obj);
    setarrobj(cparr)
  }

  const handledelete = (id) => {
    let cparr = [...arrobj];

    let someArray = cparr.filter(item => item.id != id);

    setarrobj(someArray)
  }

  const handleSetupdate = (id) => {
    let cparr = [...arrobj];
    let objIndex = cparr.findIndex(obj => obj.id === id);
    cparr[objIndex].start = true;
    setarrobj(cparr)

  }

  const handleUpdate = (id) => {
    let cparr = [...arrobj];
    let objIndex = cparr.findIndex(obj => obj.id === id);
    cparr[objIndex].start = false;
    cparr[objIndex].name = nameupdate;
    setarrobj(cparr)
  }

  const handleChangeUpdate = (event) => {
    setnameupdate(event.target.value)
  }

  console.log(nameupdate)

  return (
    <div>
      {
        arrobj.map((item, index) => {
          return (
            <div className='body-parent' key={`id-key-${index}`}>
              <input
                defaultValue={item.name}
                disabled={item.start ? "" : "disabled"}
                onChange={(event) => handleChangeUpdate(event)}
              />
              <button
                className='btn-delete'
                onClick={() => handledelete(item.id)}
              >delete</button>
              {
                item && item.start
                  ?
                  <button
                    className='btn-update'
                    onClick={() => handleUpdate(item.id)}
                  >Save</button>
                  :
                  <button
                    className='btn-update'
                    onClick={() => handleSetupdate(item.id)}
                  >update</button>
              }

            </div>
          )
        })
      }
      <input
        value={name}
        onChange={(e) => handleOnChange(e)}
      />
      <button className='btn-add' onClick={() => handleClick()}>
        thêm
      </button>

    </div>
  );
}

export default App;
