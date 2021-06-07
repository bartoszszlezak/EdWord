import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default function Notification() {
    const [status, setStatus] = useState(false);
    const [notification, setNotification] = useState("")
    const [timer, setTimer] = useState(false)
    const [info, setInfo]=useState([
        "Create your account today!",
        "Sign up today!",
        "Create new sets!",
        "Learn new languages!",
        "Learn with passion!"
    ])
    const changeStatus = (stat) => {
        setStatus(stat);
    }
    const changeTimer = () => {
        if (timer === true) {
            changeStatus(false);
            setTimer(false);

        } else {
            getNotification().then(()=>{
                console.log(notification);
                if(notification!==""){
                changeStatus(true);
                }
            });
            setTimer(true);


        }
    }


    const getNotification = async () => {
        await api.get("/rabbit/receiveNotification").then(response => {
            if(response.data!=="")
            setNotification(response.data)
            else{
                changeStatus(false);
            }
        })

    }

    const sendNotification = () =>{
        api.get(`/rabbit/addNotification?message=${randSpamer()}`)
    }


    const randSpamer = () =>{
        return  info[Math.floor(Math.random() * info.length)];
    }

    useEffect(() => {

        setTimeout(changeTimer,5000);
        setTimeout(sendNotification,5000);

    }, [timer]);


    return (

        <NotificationWrapper status={status}>
            <div>
                <div className="toastHeader">
                    <strong>Watch this!!!</strong>
                    <i onClick={() => changeStatus(false)} className="far fa-times-circle"/>
                </div>
                <div className="toastBody">
                    <p>
                        <Link className='link_notification' to='/signin'>
                            {notification}
                        </Link>

                    </p>
                    <div>
                        <button onClick={() => changeStatus(false)}>Close</button>
                    </div>
                </div>
            </div>

        </NotificationWrapper>


    )
}


const NotificationWrapper = styled.div`
  width: 20%;
  position: absolute;
  top: 3.5em;
  left: 1.5em;
  z-index: 5;
  background-color: rgba(85, 239, 182,0.75);
  border-radius: 0.25em;
  padding: 0.5em;
  border: 1px solid black;
  display: ${(props) => props.status ? "block" : "none"};

  .toastHeader {
    display: flex;
  }

  .toastHeader > strong {
    color: #000000;
    font-size: 50px;
  }

  i {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }

  .link_notification {
    word-wrap: break-word;
    color: #fff;
    font-size: 30px;
    text-decoration: none;
  }
  .toastBody button {
    width: 50%;
    height: 5%;
  }
  

`
