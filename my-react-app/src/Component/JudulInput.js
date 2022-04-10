import { useState } from 'react';
import "./Header.module.css"

function JudulInput (props) {
    const [data, setData] = useState ({
        title: ""})
        const [editing, setEditing] = useState(true)

    const onChange = (e) => {
        setData({...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = data.title
        if (formIsNotEmpty){
            const newData = { 
                title: data.title
            }
            props.tambahJudul(newData);
            setData({
                title: "",
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    const handleBukaInput = () => {
        setEditing(false)
    }

    const handleTutupInput = () => {
        setEditing(true)
    }

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }


        return (
        <>
            {/* <!-- CSS only --> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            {/* <!-- JavaScript Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
            <div class="App">
            <div onSubmit={handleSubmit} style={viewMode}> 
                    <h3 className='list'>Masukkan Judul Anda</h3>
                <input 
                    type="text" 
                    className='input-text'
                    placeholder="Input Title..."  
                    value={data.title} 
                    name="title" 
                    onChange={onChange}
                />
                <button type="button" class="btn btn-success" onClick={handleSubmit} style={{marginLeft: "10px"}}>Submit</button>
                <button type="button" class="btn btn-secondary" onClick={handleTutupInput} style={{marginLeft: "10px"}}>Selesai</button>
            </div>
            <button type="button" class="btn btn-info" onClick={handleBukaInput} style={editMode}>Masukan nama Penumpang</button>
        </div>
        </>    
        )
    }


export default JudulInput