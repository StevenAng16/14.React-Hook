import { useState } from "react";
import {v4 as uuidv4} from "uuid";

import './Home.module.css';
import ListJudul from './ListJudul';
import JudulInput from './JudulInput';
import Header from './Header';

const initialValue = [
     {
         id: uuidv4(),
         title: "Mengerjakan Exercise",
         completed: true
     },
     {
         id: uuidv4(),
         title: "Mengerjakan Assignment",
         completed: false
     },
 ]

function Home () {
     const [data, setData] = useState(initialValue)

    const hapusJudul = id => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))
       
    };

    const tambahJudul = newUser => {
         const newData = {
             id : uuidv4(),
              ...newUser
         };
         setData((oldData) => [...oldData, newData]);
    };

        return(
        <div class='Home'>
            <div>
            <Header />
            {/* <!-- CSS only --> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            {/* <!-- JavaScript Bundle with Popper --> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
            <JudulInput 
                tambahJudul={tambahJudul}
            />
            <ListJudul 
                data = {data} 
                hapusJudul ={hapusJudul}  
            />
            </div>
        </div>    
        )
    }


export default Home