import React, {useEffect, useState} from "react"
import {test} from "@/api/api";
import store from "@/store";
import {observer} from "mobx-react-lite";


const Home = () => {
    const [text, setText] = useState('');

    const getData = async () => {
        const res = await test({})
        setText(res.data.data)
    }

    useEffect(
        () => {
            getData()
        }, []
    )

    return <>
        <div>this is home</div>
        <div>this is mock data: {text}</div>
        <div>
            <button onClick={() => store.add()}>mobx test</button>
            {store.num}
        </div>

    </>

}
export default observer(Home)