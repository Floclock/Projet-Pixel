
const initialState = {
  pathName: '',
  token: '',
  dataGames: [],
  dataMenu: [],
  isConnected: false,
  userId: '',
};

/*ooooooooooooo oooooo   oooo ooooooooo.   oooooooooooo  .oooooo..o 
8'   888   `8  `888.   .8'  `888   `Y88. `888'     `8 d8P'    `Y8 
     888        `888. .8'    888   .d88'  888         Y88bo.      
     888         `888.8'     888ooo88P'   888oooo8     `"Y8888o.  
     888          `888'      888          888    "         `"Y88b 
     888           888       888          888       o oo     .d8P 
    o888o         o888o     o888o        o888ooooood8 8""88888P'  
                                                                  
                                                                  
    */


/*    .                 .o8                .                      
  .o8                "888              .o8                      
.o888oo          .oooo888   .oooo.   .o888oo  .oooo.    .oooo.o 
  888           d88' `888  `P  )88b    888   `P  )88b  d88(  "8 
  888   8888888 888   888   .oP"888    888    .oP"888  `"Y88b.  
  888 .         888   888  d8(  888    888 . d8(  888  o.  )88b 
  "888"         `Y8bod88P" `Y888""8o   "888" `Y888""8o 8""888P' 
                                                                
                                                                
                                                                */

export const LOAD_GAMES = 'LOAD_GAMES';
const RECEIVE_DATA_GAMES = ' RECEIVE_DATA_GAMES';
export const LOAD_MENU = 'LOAD_MENU';
const RECEIVE_DATA_MENU = 'RECEIVE_DATA_MENU';



/*    .                                       .o8                 o8o      .             
  .o8                                      "888                 `"'    .o8             
.o888oo         oooo oooo    ooo  .ooooo.   888oooo.   .oooo.o oooo  .o888oo  .ooooo.  
  888            `88. `88.  .8'  d88' `88b  d88' `88b d88(  "8 `888    888   d88' `88b 
  888   8888888   `88..]88..8'   888ooo888  888   888 `"Y88b.   888    888   888ooo888 
  888 .            `888'`888'    888    .o  888   888 o.  )88b  888    888 . 888    .o 
  "888"             `8'  `8'     `Y8bod8P'  `Y8bod8P' 8""888P' o888o   "888" `Y8bod8P' 
                                                                                       
                                                                                       
                                                                                       */


const SET_PATH_NAME = 'SET_PATH_NAME';
const SET_DISPLAY_NAME = 'SET_DISPLAY_NAME';
const SET_DISPLAY_SUBTITLE = 'SET_DISPLAY_SUBTITLE';



/*    .           oooo                        o8o              
  .o8           `888                        `"'              
.o888oo          888   .ooooo.   .oooooooo oooo  ooo. .oo.   
  888            888  d88' `88b 888' `88b  `888  `888P"Y88b  
  888   8888888  888  888   888 888   888   888   888   888  
  888 .          888  888   888 `88bod8P'   888   888   888  
  "888"         o888o `Y8bod8P' `8oooooo.  o888o o888o o888o 
                                d"     YD                    
                                "Y88888P'                    
                                                             */


const POST_LOGINS = 'POST_LOGINS';
const ERROR_CONNEXION = 'ERROR_CONNEXION';
const USER_IS_CONNECTED = 'USER_IS_CONNECTED';
const RECEIVED_TOKEN = 'RECEIVED_TOKEN';
const CHANGE_USERNAME_INPUT = 'CHANGE_USERNAME_INPUT';
const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';



/*ooooooooo.   oooooooooooo oooooooooo.   ooooo     ooo   .oooooo.   oooooooooooo ooooooooo.   
`888   `Y88. `888'     `8 `888'   `Y8b  `888'     `8'  d8P'  `Y8b  `888'     `8 `888   `Y88. 
 888   .d88'  888          888      888  888       8  888           888          888   .d88' 
 888ooo88P'   888oooo8     888      888  888       8  888           888oooo8     888ooo88P'  
 888`88b.     888    "     888      888  888       8  888           888    "     888`88b.    
 888  `88b.   888       o  888     d88'  `88.    .8'  `88b    ooo   888       o  888  `88b.  
o888o  o888o o888ooooood8 o888bood8P'      `YbodP'     `Y8bood8P'  o888ooooood8 o888o  o888o 
                                                                                             
                                                                                             
                                                                                             */

                                                                                             const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_DATA_GAMES:
      return {
        ...state,
        dataGames: action.dataGames,
      };
    
    case RECEIVE_DATA_MENU:
      return {
        ...state,
        dataMenu: action.dataMenu,
      };


/*                            .o8                 o8o      .             
                           "888                 `"'    .o8             
oooo oooo    ooo  .ooooo.   888oooo.   .oooo.o oooo  .o888oo  .ooooo.  
 `88. `88.  .8'  d88' `88b  d88' `88b d88(  "8 `888    888   d88' `88b 
  `88..]88..8'   888ooo888  888   888 `"Y88b.   888    888   888ooo888 
   `888'`888'    888    .o  888   888 o.  )88b  888    888 . 888    .o 
    `8'  `8'     `Y8bod8P'  `Y8bod8P' 8""888P' o888o   "888" `Y8bod8P' 
                                                                       
                                                                       
                                                                       */

    case SET_PATH_NAME:
      return {
        ...state,
        pathName: action.pathName,
      };

    case SET_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.label,
      };

    case SET_DISPLAY_SUBTITLE:
      return {
        ...state,
        displaySubtitle: action.subtitle,
      };




      /*oooo                        o8o              
`888                        `"'              
 888   .ooooo.   .oooooooo oooo  ooo. .oo.   
 888  d88' `88b 888' `88b  `888  `888P"Y88b  
 888  888   888 888   888   888   888   888  
 888  888   888 `88bod8P'   888   888   888  
o888o `Y8bod8P' `8oooooo.  o888o o888o o888o 
                d"     YD                    
                "Y88888P'                    
                                             */


      case POST_LOGINS:
        return{
          ...state,
        }

      case CHANGE_USERNAME_INPUT:
        return {
        ...state,
        username: action.usernameValue,
      };

      case CHANGE_PASSWORD_INPUT:
        return {
        ...state,
        password: action.passwordValue,
      };

      case RECEIVED_TOKEN:
        return {
        ...state,
        token: action.token,
      }

      case ERROR_CONNEXION:
        return{
          ...state,
          errorMessage: action.errorMessage
        }

        case USER_IS_CONNECTED:
          return{
            ...state,
            isConnected: true,
            userId: action.id,
          }


    default:
      return state;
  }
};


/*      .o.                                                          .                      
     .888.                                                       .o8                      
    .8"888.              .ooooo.  oooo d8b  .ooooo.   .oooo.   .o888oo  .ooooo.  oooo d8b 
   .8' `888.            d88' `"Y8 `888""8P d88' `88b `P  )88b    888   d88' `88b `888""8P 
  .88ooo8888.   8888888 888        888     888ooo888  .oP"888    888   888   888  888     
 .8'     `888.          888   .o8  888     888    .o d8(  888    888 . 888   888  888     
o88o     o8888o         `Y8bod8P' d888b    `Y8bod8P' `Y888""8o   "888" `Y8bod8P' d888b    
                                                                                          
                                                                                          
                                                                                          */


export const setMenuName = pathName => ({
  type: SET_PATH_NAME,
  pathName,
});

export const setDisplayNane = label => ({
  type: SET_DISPLAY_NAME,
  label,
});

export const setDisplaySubtitle = subtitle => ({
  type: SET_DISPLAY_SUBTITLE,
  subtitle,
});



/*      .o.                     .o8                .                      
     .888.                   "888              .o8                      
    .8"888.              .oooo888   .oooo.   .o888oo  .oooo.    .oooo.o 
   .8' `888.            d88' `888  `P  )88b    888   `P  )88b  d88(  "8 
  .88ooo8888.   8888888 888   888   .oP"888    888    .oP"888  `"Y88b.  
 .8'     `888.          888   888  d8(  888    888 . d8(  888  o.  )88b 
o88o     o8888o         `Y8bod88P" `Y888""8o   "888" `Y888""8o 8""888P' 
                                                                        
                                                                        
                                                                        */


export const getDataGames = () => ({
  type: LOAD_GAMES,
});

export const receiveDataGames = dataGames => ({
  type: RECEIVE_DATA_GAMES,
  dataGames,
});

export const getDataMenu = () => ({
  type: LOAD_MENU,
});

export const receiveDataMenu = dataMenu => ({
  type: RECEIVE_DATA_MENU,
  dataMenu,
});



/*      .o.               oooo                        o8o              
     .888.              `888                        `"'              
    .8"888.              888   .ooooo.   .oooooooo oooo  ooo. .oo.   
   .8' `888.             888  d88' `88b 888' `88b  `888  `888P"Y88b  
  .88ooo8888.   8888888  888  888   888 888   888   888   888   888  
 .8'     `888.           888  888   888 `88bod8P'   888   888   888  
o88o     o8888o         o888o `Y8bod8P' `8oooooo.  o888o o888o o888o 
                                        d"     YD                    
                                        "Y88888P'                    
                                                                     */

export const submitLogins = logins => ({
  type: SUBMIT_LOGINS,
  logins,
});

export const errorConnexion = errorMessage => ({
  type: ERROR_CONNEXION,
  errorMessage,
});

export const UserIsConnected = id => ({
  type: USER_IS_CONNECTED,
  id,
});

export const changeUsernameInput = usernameValue => ({
  type: CHANGE_USERNAME_INPUT,
  usernameValue,
})

export const changePasswordInput = passwordValue => ({
  type: CHANGE_PASSWORD_INPUT,
  passwordValue,
})
/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
