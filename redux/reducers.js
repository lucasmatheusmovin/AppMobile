import {combineReducers} from 'redux';

const ESTADO_INICIAL ={

    people: [],
    id: '',

};


const AdcionarPessoas = ( state, action) => {
    const novostatus = object.assing({}, state, {})
    novostatus.pessoas.push(action.payload);
    return novostatus;
}

const login = (status, action) => {
    const novostatus = Object.assign({}, state, {});
    novostatus.token = action.payload;
    return novostatus;
  };


  const reducer = (status = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case 'AdcionaPessoas':
        return AdcionarPessoas(novostatus, action);
      case 'LOGIN':
          return login(novostatus, action);
      default:
        return state;
    }
  };
  
  export default reducer;