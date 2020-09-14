const jwt =require('jsonwebtoken');

exports.getUserId=(token)=>{
  try{
     const decodedToken = jwt.verify(token,'RANDOM_TOKEN_SECRET');
     const userId=decodedToken.userId;
     if(userId !=null){
        return userId;
     }else{
        return null
     }
  }catch{
    
  }
};

exports.getTypeUser=(token)=>{
    try{
       const decodedToken = jwt.verify(token,'RANDOM_TOKEN_SECRET');
       const typeUser = decodedToken.typeUser;
       if(typeUser==null){
           throw 'Type User is null'
       }else{
           return typeUser;
       }
    }catch{
        throw 'error to get typeUser';
    }
}