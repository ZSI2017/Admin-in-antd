import dva from "dva";

export default {
  namespace:'app',
  state:{
    menu:[
      {
        id:1,
        icon:'laptop',
        name:"myTable",
        router:"/myTable"
      }
    ],
    navOpenKeys:JSON.parse(window.localStorage.getItem("navOpenKeys")) || [],
    locationPathname:"",
    locationQuery:{}
  },
  subscriptions: {
    setupHistory({dispatch,history}) {
      history.listen((location)=>{
        dispatch({
          type:"updateState",
          payload:{
            locationPathname:location.pathname,
            locationQuery:location.search
          }
        })
      })
    }
  },
  reducers:{
   'updateState'(state,{payload}) {
     console.log("updateState");
     return {
       ...state,
       ...payload,
     }
    },
    'handleNavOpenKeys'(state,{payload:navOpenKeys}) {
      return {
        ...state,
        ...navOpenKeys
      }
    },
  },
};