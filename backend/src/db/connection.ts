import {connect , disconnect } from "mongoose"

async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL)
    }catch(error){
        console.log("DB coonection error",error)
    }
}

async function disConnectFromDatabase(){
    try{
        await disconnect()
    }catch(error){
        console.log("DB coonection not closed",error)
    }
}

export {connectToDatabase, disConnectFromDatabase}