import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE,persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'todos',
    storage,
}

export const todosPersistReducer = persistReducer(
    persistConfig,
    todoSlice
)


const store = configureStore({
    reducer: {
        todos: todosPersistReducer,

    
    },
     middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
            }
        })
})


export const persistor = persistStore(store)

export default store;

