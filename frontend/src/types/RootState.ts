import { AppState } from 'app/containers/App/types';
import { RouterState } from 'connected-react-router';
import { LoginState } from 'app/containers/Login/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  router?: RouterState;
  app?: AppState;
  login?: LoginState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
