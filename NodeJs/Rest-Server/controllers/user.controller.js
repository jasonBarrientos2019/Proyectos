const {response,request}=require('express');

const getUser=(req=request,res=response)=> {
    
    const {name,lastName}=req.query

    res.send(
        {
            verb:"get-controller",
            msg:`Bienvenido ${name} ${lastName}`

        }
    )
}
const postUser=(req=request,res=response)=>{ 

    const {name,lastName}=req.body;
    res.send(
        {
            verb:"post-controller",
            msg:`Bienvenido ${name} ${lastName}`
        }
    )
}

const putUser=(req=request,res=response)=>{
 
    const id= req.params.id;

    res.send(
        {
            verb:"put-controller",
            id:` id: ${id} ingresado `,
        }
    )

}
const deleteUser=(req=request,res=response)=> res.json({msg:"delete-controller"})
const patchUser=(req=request,res=response)=> res.json({msg:"patch-controller"})

module.exports={
 getUser,
 postUser,
 putUser,
 deleteUser,
 patchUser
};