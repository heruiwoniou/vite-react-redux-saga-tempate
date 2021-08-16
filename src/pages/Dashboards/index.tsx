import React from "react";
import model from "./model";
import { useSelector, useDispatch } from "react-redux";
import connectModel from "@/utils/connectModel";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.dashboards.list;
  });
  const add = () => {
    dispatch({
      type: 'dashboards/add'
    })
  }
  const addSync = () => dispatch({ type: 'dashboards/asyncAdd' })
  return (
      <div>
        <h1>Hello Dashboards Page</h1>
        <ul>
          {list.map(({ id, text }: any) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
        <button onClick={add}>Add</button>
        <button onClick={addSync}>Sync Add</button>
      </div>
  );
};

export default connectModel(Home, model) ;
